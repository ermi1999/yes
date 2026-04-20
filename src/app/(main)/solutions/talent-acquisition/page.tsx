import type { Metadata } from "next"
import TalentAcquisition from "@/page-components/solutions/TalentAcquisition"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Talent Acquisition Ethiopia | Executive Search & Technical Recruiting | YES",
  description: "Access Ethiopia's top professionals. Executive search, technical recruiting, and specialized talent sourcing. 14-day average time-to-hire. 94% 12-month retention.",
  alternates: { canonical: "/solutions/talent-acquisition" },
  openGraph: {
    title: "Talent Acquisition Ethiopia | Executive Search & Technical Recruiting | YES",
    description: "Access Ethiopia's top professionals. Executive search, technical recruiting, and specialized talent sourcing. 14-day average time-to-hire. 94% 12-month retention.",
    url: "/solutions/talent-acquisition",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Strategic Talent Acquisition in Ethiopia",
        description: "Access the top 3% of Ethiopian professional talent — over 20,000 specialists across 40+ disciplines. 14-day average time-to-hire, 94% retention rate.",
        provider: { "@type": "Organization", name: "YES Employment Solutions", url: "https://www.yes.et" },
        areaServed: { "@type": "Country", name: "Ethiopia" },
        serviceType: "Talent Acquisition",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What makes YES different from other recruitment agencies in Ethiopia?",
            acceptedAnswer: { "@type": "Answer", text: "Three things: infrastructure, verification, and retention. We are not a job board. Every candidate passes through our proprietary PSV (Pre-employment Screening & Verification) methodology before presentation. We calibrate for culture fit, not just skill match — which is why our placements last. And our tenure on the ground means we understand compensation benchmarks, notice period customs, and hiring dynamics that offshore recruiters simply cannot." },
          },
          {
            "@type": "Question",
            name: "How long does the recruitment process typically take?",
            acceptedAnswer: { "@type": "Answer", text: "Our average time-to-hire is 14 business days from signed engagement to accepted offer. Executive and highly specialized roles may take 21-30 days. We provide weekly progress reports and maintain a shortlist pipeline so you are never waiting without visibility." },
          },
          {
            "@type": "Question",
            name: "Can YES handle high-volume recruitment?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. We have executed recruitment drives of 50+ positions for international organizations entering the Ethiopian market. Our sourcing infrastructure scales through university partnerships, regional sourcing networks, and our proprietary Executive Roster — a pre-vetted, continuously maintained candidate database." },
          },
          {
            "@type": "Question",
            name: "Do candidates come with background verification?",
            acceptedAnswer: { "@type": "Answer", text: "Every candidate presented by YES undergoes our standard verification protocol: identity confirmation, academic credential verification, professional reference checks, and criminal record screening. Enhanced verification tiers are available for executive and fiduciary roles through our Integrity division." },
          },
          {
            "@type": "Question",
            name: "What if a placement does not work out?",
            acceptedAnswer: { "@type": "Answer", text: "We offer a replacement guarantee for all placements within the first 90 days. If a hire does not meet performance expectations during this period, we will source and place a replacement at no additional recruitment fee. This guarantee is rarely invoked — our matching methodology is built to get it right the first time." },
          },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Talent Acquisition", item: "https://www.yes.et/solutions/talent-acquisition" },
        ],
      }} />
      <TalentAcquisition />
    </>
  )
}
