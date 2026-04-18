// Google Apps Script endpoint — set VITE_FORM_ENDPOINT in .env
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

const SUBJECTS: Record<string, string> = {
  contact: 'New Quick Contact — yes.et',
  diagnostic: 'New Strategy Briefing Request — yes.et',
  training: 'New Training Enrollment Interest — yes.et',
  talent: 'New Talent Application — yes.et',
}

export interface SubmitResult {
  ok: boolean
  message: string
}

function iframePost(fields: Record<string, string>): Promise<void> {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe')
    iframe.name = 'yes-form-' + Date.now()
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    const form = document.createElement('form')
    form.method = 'POST'
    form.action = ENDPOINT!
    form.target = iframe.name

    for (const [key, value] of Object.entries(fields)) {
      if (!value) continue
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value
      form.appendChild(input)
    }

    document.body.appendChild(form)

    let resolved = false
    const done = () => {
      if (resolved) return
      resolved = true
      try { document.body.removeChild(form) } catch {}
      try { document.body.removeChild(iframe) } catch {}
      resolve()
    }

    iframe.onload = () => setTimeout(done, 200)
    setTimeout(done, 15000)

    form.submit()
  })
}

export async function submitForm(
  formType: string,
  data: Record<string, unknown>
): Promise<SubmitResult> {
  if (!ENDPOINT) {
    return { ok: false, message: 'Form endpoint not configured. Please contact info@yes.et directly.' }
  }

  const fields: Record<string, string> = {
    subject: SUBJECTS[formType] || `New ${formType} submission — yes.et`,
    form_type: formType,
    submitted_at: new Date().toISOString(),
    page_url: typeof window !== 'undefined' ? window.location.href : '',
  }

  for (const [key, value] of Object.entries(data)) {
    fields[key] = typeof value === 'string' ? value : JSON.stringify(value)
  }

  // Try fetch first for real success/failure feedback
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(fields).toString(),
    })
    if (res.ok) {
      return { ok: true, message: 'Submitted successfully.' }
    }
    return { ok: false, message: 'Submission failed. Please try again or email info@yes.et directly.' }
  } catch {
    // CORS blocked — fall back to iframe (fire-and-forget, assume success)
    try {
      await iframePost(fields)
      return { ok: true, message: 'Submitted successfully.' }
    } catch {
      return { ok: false, message: 'Network error. Please check your connection and try again.' }
    }
  }
}
