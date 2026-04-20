import type { Metadata } from "next"
import Initialize from "@/page-components/Initialize"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Start Your Ethiopia Expansion | Strategy Briefing | YES",
  description: "Begin your Ethiopian expansion with a strategy briefing. Tell us your requirements — headcount, timeline, services needed — and we'll map a clear plan. No commitment.",
  alternates: { canonical: "/initialize" },
  openGraph: {
    title: "Start Your Ethiopia Expansion | Strategy Briefing | YES",
    description: "Begin your Ethiopian expansion with a strategy briefing. Tell us your requirements — headcount, timeline, services needed — and we'll map a clear plan. No commitment.",
    url: "/initialize",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Start Your Ethiopia Expansion | Strategy Briefing | YES",
        description: "Begin your Ethiopian expansion with a strategy briefing. Tell us your requirements — headcount, timeline, services needed — and we'll map a clear plan. No commitment.",
        url: "https://www.yes.et/initialize",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "YES Employment Solutions",
        description: "On-the-ground employment infrastructure in Ethiopia since 2015. Employer of Record, talent acquisition, background verification, payroll processing, and CISI training services for international companies.",
        url: "https://www.yes.et",
        logo: "https://www.yes.et/favicon.svg",
        image: "https://www.yes.et/favicon.svg",
        telephone: "+251942070707",
        email: "info@yes.et",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suite 301E, Bethlehem Plaza, Kenenisa Avenue, Megenagna",
          addressLocality: "Addis Ababa",
          addressRegion: "Addis Ababa",
          addressCountry: "ET",
        },
        openingHours: "Mo-Fr 08:30-17:30",
        priceRange: "$$",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Talk to Us", item: "https://www.yes.et/initialize" },
        ],
      }} />
      <Initialize />
    </>
  )
}
