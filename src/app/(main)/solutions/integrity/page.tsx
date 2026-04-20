import type { Metadata } from "next"
import Integrity from "@/page-components/solutions/Integrity"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Background Checks Ethiopia | Employee Vetting & Verification | YES",
  description: "Primary source verification across all Ethiopian regions. Academic, criminal, professional, and reference checks with physical on-site verification at source institutions.",
  alternates: { canonical: "/solutions/integrity" },
  openGraph: {
    title: "Background Checks Ethiopia | Employee Vetting & Verification | YES",
    description: "Primary source verification across all Ethiopian regions. Academic, criminal, professional, and reference checks with physical on-site verification at source institutions.",
    url: "/solutions/integrity",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Background Verification & Vetting in Ethiopia",
        description: "Forensic-grade background verification across all Ethiopian regions. Academic, criminal, professional, and reference checks using PSV methodology.",
        provider: { "@type": "Organization", name: "YES Employment Solutions", url: "https://www.yes.et" },
        areaServed: { "@type": "Country", name: "Ethiopia" },
        serviceType: "Background Verification",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is PSV methodology and why does it matter?",
            acceptedAnswer: { "@type": "Answer", text: "PSV stands for Pre-employment Screening & Verification. It is a forensic approach to candidate vetting that treats every credential claim as unverified until independently confirmed through primary sources. Unlike basic reference checks, PSV involves direct contact with issuing institutions, employer HR departments, police records offices, and regulatory bodies. In Ethiopia, where document fraud and credential misrepresentation are documented risks, PSV methodology is the only reliable standard." },
          },
          {
            "@type": "Question",
            name: "How long does a full background verification take?",
            acceptedAnswer: { "@type": "Answer", text: "Standard verification (academic + criminal + employment history) takes 5-7 business days. Enhanced verification packages that include international checks, financial background, or deep reference interviews take 10-14 business days. We provide interim status reports every 48 hours so you are never waiting without visibility." },
          },
          {
            "@type": "Question",
            name: "Can YES verify credentials from outside of Ethiopia?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. For candidates with international education or work history, we leverage partner verification networks in 30+ countries. This is particularly relevant for diaspora candidates returning to Ethiopia and for verifying credentials from East African, European, and North American institutions." },
          },
          {
            "@type": "Question",
            name: "What happens if a discrepancy is found during verification?",
            acceptedAnswer: { "@type": "Answer", text: "Every discrepancy is classified by severity: minor (date variations, title differences), moderate (unverifiable claims, partial credential), or critical (fabricated credentials, concealed criminal history). You receive a detailed discrepancy report with our risk assessment and recommendation. The final hiring decision always remains yours." },
          },
          {
            "@type": "Question",
            name: "Is background verification required for EOR employees?",
            acceptedAnswer: { "@type": "Answer", text: "We strongly recommend it, but it is not mandatory for standard EOR engagements. However, for fiduciary roles (finance, legal, executive), roles involving vulnerable populations, or positions with access to sensitive data, background verification is included as a standard component of our service. Many of our clients opt for verification across all roles as a matter of risk policy." },
          },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Integrity & Vetting", item: "https://www.yes.et/solutions/integrity" },
        ],
      }} />
      <Integrity />
    </>
  )
}
