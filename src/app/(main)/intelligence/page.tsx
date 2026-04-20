import type { Metadata } from "next"
import Intelligence from "@/page-components/Intelligence"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Ethiopia Market Intelligence | Employment Law, Talent Trends & Guides | YES",
  description: "Research, guides, and analysis for companies operating in Ethiopia. Labor law, market entry strategies, talent trends, and capital market insights from YES Employment Solutions.",
  alternates: { canonical: "/intelligence" },
  openGraph: {
    title: "Ethiopia Market Intelligence | Employment Law, Talent Trends & Guides | YES",
    description: "Research, guides, and analysis for companies operating in Ethiopia. Labor law, market entry strategies, talent trends, and capital market insights from YES Employment Solutions.",
    url: "/intelligence",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Ethiopia Market Intelligence | Employment Law, Talent Trends & Guides | YES",
        description: "Research, guides, and analysis for companies operating in Ethiopia. Labor law, market entry strategies, talent trends, and capital market insights from YES Employment Solutions.",
        url: "https://www.yes.et/intelligence",
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
          { "@type": "ListItem", position: 2, name: "Intelligence", item: "https://www.yes.et/intelligence" },
        ],
      }} />
      <Intelligence />
    </>
  )
}
