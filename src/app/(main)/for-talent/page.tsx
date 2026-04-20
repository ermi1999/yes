import type { Metadata } from "next"
import ForTalent from "@/page-components/ForTalent"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "For Talent | Apply to Join — YES Employment Solutions Ethiopia",
  description: "Join the YES Executive Roster — Ethiopia's premier vetted professional network. Get matched to roles with leading companies operating in Ethiopia.",
  alternates: { canonical: "/for-talent" },
  openGraph: {
    title: "For Talent | Apply to Join — YES Employment Solutions Ethiopia",
    description: "Join the YES Executive Roster — Ethiopia's premier vetted professional network. Get matched to roles with leading companies operating in Ethiopia.",
    url: "/for-talent",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "For Talent | Apply to Join — YES Employment Solutions Ethiopia",
        description: "Join the YES Executive Roster — Ethiopia's premier vetted professional network. Get matched to roles with leading companies operating in Ethiopia. Apply for vetting, access CISI certification, and advance your career.",
        url: "https://www.yes.et/for-talent",
        publisher: {
          "@type": "Organization",
          name: "YES Employment Solutions",
          url: "https://www.yes.et",
        },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "For Talent", item: "https://www.yes.et/for-talent" },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is there a cost to join?",
            acceptedAnswer: { "@type": "Answer", text: "No. There is no fee for professionals. YES is retained by the companies that hire through us." },
          },
          {
            "@type": "Question",
            name: "What types of roles?",
            acceptedAnswer: { "@type": "Answer", text: "Roles span finance, technology, operations, engineering, and management across international and Ethiopian enterprises." },
          },
          {
            "@type": "Question",
            name: "How long is vetting?",
            acceptedAnswer: { "@type": "Answer", text: "Typically 5\u20137 business days from application to roster decision." },
          },
          {
            "@type": "Question",
            name: "Do I need English?",
            acceptedAnswer: { "@type": "Answer", text: "English proficiency is required for most international roles. Some positions may require Amharic only." },
          },
          {
            "@type": "Question",
            name: "What happens after vetting?",
            acceptedAnswer: { "@type": "Answer", text: "Your profile enters the active Executive Roster. When a role matches, we contact you directly." },
          },
          {
            "@type": "Question",
            name: "Can I browse open positions?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. For active job listings, visit PalmJobs.et \u2014 our job board built for the Ethiopian market. The Executive Roster is for proactive matching." },
          },
        ],
      }} />
      <ForTalent />
    </>
  )
}
