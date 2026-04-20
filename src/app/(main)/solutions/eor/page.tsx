import type { Metadata } from "next"
import Eor from "@/page-components/solutions/Eor"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Employer of Record in Ethiopia | Legal Compliance & Payroll | YES",
  description: "Hire employees in Ethiopia without a local entity. YES handles employment contracts, tax filing, pension, and full Proclamation 1156/2019 compliance. Operational in weeks, not months.",
  alternates: { canonical: "/solutions/eor" },
  openGraph: {
    title: "Employer of Record in Ethiopia | Legal Compliance & Payroll | YES",
    description: "Hire employees in Ethiopia without a local entity. YES handles employment contracts, tax filing, pension, and full Proclamation 1156/2019 compliance. Operational in weeks, not months.",
    url: "/solutions/eor",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Employer of Record in Ethiopia",
        description: "Enter the Ethiopian market without entity registration. YES absorbs all legal liability as your Employer of Record, ensuring full compliance with Proclamation 1156/2019.",
        provider: { "@type": "Organization", name: "YES Employment Solutions", url: "https://www.yes.et" },
        areaServed: { "@type": "Country", name: "Ethiopia" },
        serviceType: "Employer of Record",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is an EOR?",
            acceptedAnswer: { "@type": "Answer", text: "An Employer of Record (EOR) is a local legal entity that employs workers on your behalf. YES becomes the legal employer under Ethiopian law, handling contracts, payroll, tax, and compliance — while you direct the day-to-day work." },
          },
          {
            "@type": "Question",
            name: "How does YES handle Proclamation 1156/2019?",
            acceptedAnswer: { "@type": "Answer", text: "We draft all employment contracts to the specifications of Ethiopia's Labour Proclamation 1156/2019, manage mandatory pension and social security contributions, handle all tax filings, and ensure termination procedures follow statutory requirements." },
          },
          {
            "@type": "Question",
            name: "EOR vs local entity?",
            acceptedAnswer: { "@type": "Answer", text: "A local entity requires investment commission approval, capital deposit, company registration, and ongoing corporate governance — typically 3\u20136 months and significant cost. With YES as your EOR, you're operational in weeks." },
          },
          {
            "@type": "Question",
            name: "How quickly can we hire?",
            acceptedAnswer: { "@type": "Answer", text: "Typically under three weeks from signed agreement. That includes contract drafting, tax registration, pension enrollment, and employee onboarding." },
          },
          {
            "@type": "Question",
            name: "What does it cost?",
            acceptedAnswer: { "@type": "Answer", text: "Pricing depends on headcount, role complexity, and service scope. We provide a transparent, all-inclusive monthly fee per employee. Contact us for a quote." },
          },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Employer of Record", item: "https://www.yes.et/solutions/eor" },
        ],
      }} />
      <Eor />
    </>
  )
}
