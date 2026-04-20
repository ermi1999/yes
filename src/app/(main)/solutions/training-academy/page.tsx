import type { Metadata } from "next"
import TrainingAcademy from "@/page-components/solutions/TrainingAcademy"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "CISI Certification Ethiopia | Capital Markets Training | YES Academy",
  description: "CISI UK certification for Ethiopia's live capital market. YES Academy in partnership with CISI and Exam Ready. Level 1-3 programs for finance professionals.",
  alternates: { canonical: "/solutions/training-academy" },
  openGraph: {
    title: "CISI Certification Ethiopia | Capital Markets Training | YES Academy",
    description: "CISI UK certification for Ethiopia's live capital market. YES Academy in partnership with CISI and Exam Ready. Level 1-3 programs for finance professionals.",
    url: "/solutions/training-academy",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "CISI Training Academy in Ethiopia",
        description: "Ethiopia's authorized CISI UK training partner. Certify your financial services team with globally recognized qualifications for the live capital market. Levels 1-3 available.",
        provider: { "@type": "Organization", name: "YES Employment Solutions", url: "https://www.yes.et" },
        areaServed: { "@type": "Country", name: "Ethiopia" },
        serviceType: "Professional Training & Certification",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is CISI and why does it matter for Ethiopia?",
            acceptedAnswer: { "@type": "Answer", text: "The Chartered Institute for Securities & Investment (CISI) is the largest professional body for securities, investment, wealth, and financial planning professionals globally. With Ethiopia's capital market now live, CISI certification ensures professionals meet internationally recognized standards of competence and ethics — a critical requirement for attracting foreign investment and building market credibility." },
          },
          {
            "@type": "Question",
            name: "Is YES an authorized CISI training partner?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. YES | Your Employment Solutions is an authorized CISI UK training partner in Ethiopia, licensed to deliver the official CISI curriculum, administer exam preparation, and register candidates for CISI examinations. Our partnership gives Ethiopian professionals direct access to globally recognized certifications without leaving the country." },
          },
          {
            "@type": "Question",
            name: "Can my firm enroll multiple employees at once?",
            acceptedAnswer: { "@type": "Answer", text: "Absolutely. We offer corporate cohort enrollment with dedicated scheduling, progress tracking, and group pricing. Most firms enroll teams of 5-30 professionals per cohort. We can also customize the delivery schedule to minimize disruption to your operations." },
          },
          {
            "@type": "Question",
            name: "What is the exam pass rate for YES-trained candidates?",
            acceptedAnswer: { "@type": "Answer", text: "Our Exam Ready methodology has achieved a first-attempt pass rate significantly above the global CISI average. We attribute this to our structured preparation approach: diagnostic assessment, focused study plans, weekly mock exams, and one-on-one tutoring for candidates who need additional support." },
          },
          {
            "@type": "Question",
            name: "Do I need prior financial services experience?",
            acceptedAnswer: { "@type": "Answer", text: "Not for the Introduction to Investment or Level 1 (Fundamentals). These programs are designed for new entrants to financial services — no prior experience needed. The Introduction to Investment is an Ofqual-accredited Level 3 Award that covers financial principles, asset classes, markets, regulation, and ethics from scratch. Levels 2 and 3 do assume foundational knowledge and are best suited for professionals already working in or transitioning into compliance, risk, or fund management roles." },
          },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Training Academy", item: "https://www.yes.et/solutions/training-academy" },
        ],
      }} />
      <TrainingAcademy />
    </>
  )
}
