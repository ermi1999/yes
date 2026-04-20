import type { Metadata } from "next"
import Payroll from "@/page-components/solutions/Payroll"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Payroll Services Ethiopia | Tax Filing & Pension | YES",
  description: "Zero-error payroll processing for Ethiopian employees. Tax filing, pension fund management, and guaranteed compliance. No penalties, no surprises.",
  alternates: { canonical: "/solutions/payroll" },
  openGraph: {
    title: "Payroll Services Ethiopia | Tax Filing & Pension | YES",
    description: "Zero-error payroll processing for Ethiopian employees. Tax filing, pension fund management, and guaranteed compliance. No penalties, no surprises.",
    url: "/solutions/payroll",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Fiduciary Payroll & Tax in Ethiopia",
        description: "Precision payroll processing and ERCA-compliant tax filing in Ethiopia. Pension fund management, income tax withholding, and full audit trail backed by on-the-ground expertise since 2015.",
        provider: { "@type": "Organization", name: "YES Employment Solutions", url: "https://www.yes.et" },
        areaServed: { "@type": "Country", name: "Ethiopia" },
        serviceType: "Payroll Processing",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What taxes does YES handle for Ethiopian payroll?",
            acceptedAnswer: { "@type": "Answer", text: "We manage all mandatory withholdings: employment income tax (progressive brackets per Proclamation 979/2016 as amended), pension fund contributions (employer 11% + employee 7% per Private Organizations Employees Pension Proclamation), and any additional levies as directed by ERCA. All filings are submitted directly to the Ethiopian Revenue and Customs Authority on schedule." },
          },
          {
            "@type": "Question",
            name: "Can YES run payroll for both local and expatriate employees?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. We process payroll for Ethiopian nationals and expatriate staff in parallel, accounting for the different tax treatment, work permit requirements, and foreign currency considerations that apply to international employees under Ethiopian labor law." },
          },
          {
            "@type": "Question",
            name: "What happens if there is a payroll error?",
            acceptedAnswer: { "@type": "Answer", text: "Our accuracy guarantee means we absorb the financial liability for any miscalculation on our side. Our error rate has remained below 0.01% across every year of operations. Every payroll cycle goes through a triple-verification process before submission." },
          },
          {
            "@type": "Question",
            name: "How quickly can YES onboard our company for payroll services?",
            acceptedAnswer: { "@type": "Answer", text: "Standard payroll onboarding takes 5-7 business days from signed agreement to first payroll cycle. This includes ERCA registration verification, bank account setup, employee data migration, and a parallel test run to ensure accuracy before going live." },
          },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Payroll & Tax", item: "https://www.yes.et/solutions/payroll" },
        ],
      }} />
      <Payroll />
    </>
  )
}
