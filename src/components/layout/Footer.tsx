import { Link } from "react-router-dom"
import { useState } from "react"
import { AnimatedFooterLink } from "@/components/ui/AnimatedLink"

const solutionLinks = [
  { label: "Employer of Record", href: "/solutions/eor" },
  { label: "Talent Acquisition", href: "/solutions/talent-acquisition" },
  { label: "Integrity & Vetting", href: "/solutions/integrity" },
  { label: "Payroll & Tax", href: "/solutions/payroll" },
  { label: "Training Academy", href: "/solutions/training-academy" },
  { label: "Enterprise Solutions", href: "/solutions/enterprise" },
]

const companyLinks = [
  { label: "About", href: "/the-standard" },
  { label: "For Talent", href: "/for-talent" },
  { label: "Talk to Us", href: "/initialize" },
]

const resourceLinks = [
  { label: "Intelligence Hub", href: "/intelligence" },
  { label: "Ethiopian Labor Law", href: "/intelligence#legal" },
  { label: "Market Entry Guide", href: "/intelligence#market-entry" },
  { label: "PalmJobs.et", href: "https://palmjobs.et", external: true, note: "A YES Platform" },
]

export function Footer() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus("sending")
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT
      if (!endpoint) {
        setFormStatus("error")
        return
      }
      const fields: Record<string, string> = {
        subject: "New Quick Contact — yes.et",
        form_type: "contact",
        submitted_at: new Date().toISOString(),
        page_url: window.location.href,
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      }
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(fields).toString(),
      })
      if (res.ok) {
        setFormStatus("sent")
        form.reset()
        setTimeout(() => setFormStatus("idle"), 5000)
      } else {
        setFormStatus("error")
      }
    } catch {
      setFormStatus("error")
    }
  }

  return (
    <footer className="bg-near-black text-white">
      {/* Footer Quick Contact */}
      <div className="border-b border-white/[0.06]">
        <div className="container-yes py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black leading-[0.85]" style={{ fontFeatureSettings: '"calt"' }}>
                Quick <span className="hook">Question?</span>
              </h3>
              <p className="mt-4 text-[14px] text-white/60 leading-relaxed max-w-sm font-medium" style={{ fontFeatureSettings: '"calt"' }}>
                Not ready for a full strategy briefing? Drop us a line and we'll get back to you within 24 hours.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3" aria-label="Quick contact form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text" name="name" placeholder="Your Name" required
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-[var(--radius-standard)] text-white text-[13px] font-medium placeholder:text-white/25 focus:border-wise-green/40 focus:bg-white/8 outline-none transition-all"
                  style={{ fontFeatureSettings: '"calt"', backdropFilter: "blur(12px)" }}
                  aria-label="Your name"
                />
                <input
                  type="email" name="email" placeholder="Email Address" required
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-[var(--radius-standard)] text-white text-[13px] font-medium placeholder:text-white/25 focus:border-wise-green/40 focus:bg-white/8 outline-none transition-all"
                  style={{ fontFeatureSettings: '"calt"', backdropFilter: "blur(12px)" }}
                  aria-label="Email address"
                />
              </div>
              <textarea
                name="message" placeholder="Your message..." rows={3} required
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-[var(--radius-standard)] text-white text-[13px] font-medium placeholder:text-white/25 focus:border-wise-green/40 focus:bg-white/8 outline-none transition-all resize-none"
                style={{ fontFeatureSettings: '"calt"', backdropFilter: "blur(12px)" }}
                aria-label="Your message"
              />
              <div className="flex items-center justify-between">
                <span className={`text-[12px] font-medium transition-opacity ${formStatus === "sent" ? "text-wise-green opacity-100" : formStatus === "error" ? "text-danger-red opacity-100" : "opacity-0"}`}>
                  {formStatus === "sent" ? "Message sent — we'll reply within 24 hours." : formStatus === "error" ? "Failed to send. Please email info@yes.et directly." : ""}
                </span>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="wise-btn self-end px-6 py-2.5 bg-wise-green text-dark-green text-[13px] font-semibold rounded-[var(--radius-pill)]"
                  style={{ fontFeatureSettings: '"calt"' }}
                >
                  {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Sent" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container-yes py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-wise-green mb-4" style={{ fontFeatureSettings: '"calt"' }}>Solutions</h4>
            <ul className="flex flex-col gap-2.5">
              {solutionLinks.map((link) => (
                <li key={link.href}><AnimatedFooterLink to={link.href}>{link.label}</AnimatedFooterLink></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-wise-green mb-4" style={{ fontFeatureSettings: '"calt"' }}>Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}><AnimatedFooterLink to={link.href}>{link.label}</AnimatedFooterLink></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-wise-green mb-4" style={{ fontFeatureSettings: '"calt"' }}>Resources</h4>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <AnimatedFooterLink href={link.href} external>
                      {link.label}
                      {link.note && <span className="text-[10px] text-white/25 ml-1.5">{link.note}</span>}
                    </AnimatedFooterLink>
                  ) : (
                    <AnimatedFooterLink to={link.href}>{link.label}</AnimatedFooterLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/25 mb-4">Contact</h4>
            <div className="flex flex-col gap-2.5 text-[13px] text-white/60" style={{ fontFeatureSettings: '"calt"' }}>
              <p>Suite 301E, Bethlehem Plaza<br />Kenenisa Avenue, Megenagna<br />Addis Ababa, Ethiopia</p>
              <a href="tel:+251942070707" className="hover:text-white/80 transition-colors">+251 942 07 07 07</a>
              <div className="flex flex-col gap-1">
                <a href="mailto:info@yes.et" className="hover:text-white/80 transition-colors">info@yes.et</a>
                <a href="mailto:employ@yes.et" className="hover:text-white/80 transition-colors">employ@yes.et</a>
                <a href="mailto:apply@yes.et" className="hover:text-white/80 transition-colors">apply@yes.et</a>
              </div>
              <p className="text-[12px] text-white/45">Monday &ndash; Friday, 8:30 AM &ndash; 5:30 PM EAT</p>
              <div className="mt-1">
                <span className="text-[11px] text-wise-green font-medium">Accepting inquiries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/yes-logo-white.webp" alt="YES Employment Solutions" className="h-18 w-auto" />
            </div>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/company/yes-your-employment-solutions" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/50 transition-colors" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/youremploymentsolutionsethiopia/" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/50 transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://twitter.com/YESethiopia" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/50 transition-colors" aria-label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-6">
            <p className="text-[11px] text-white/20">&copy; 2026 YES | Your Employment Solutions. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-[11px] text-white/20 hover:text-white/40 transition-colors">Privacy Policy</Link>
              <span className="text-white/10">|</span>
              <Link to="/terms" className="text-[11px] text-white/20 hover:text-white/40 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
