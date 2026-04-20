import type { Metadata } from "next"
import TheStandard from "@/page-components/TheStandard"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "About YES Employment Solutions | 10+ Years in Addis Ababa",
  description: "Founded in 2015 in Addis Ababa. A decade of building Ethiopia's employment infrastructure — vetting, placing, and managing professionals for 200+ enterprise partners.",
  alternates: { canonical: "/the-standard" },
  openGraph: {
    title: "About YES Employment Solutions | 10+ Years in Addis Ababa",
    description: "Founded in 2015 in Addis Ababa. A decade of building Ethiopia's employment infrastructure — vetting, placing, and managing professionals for 200+ enterprise partners.",
    url: "/the-standard",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "The Standard — About YES Employment Solutions",
        description: "A decade of employment infrastructure in Ethiopia. Learn about the team, mission, and values behind YES Employment Solutions — the standard for international companies.",
        url: "https://www.yes.et/the-standard",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "YES Employment Solutions",
        url: "https://www.yes.et",
        logo: "https://www.yes.et/favicon.svg",
        description: "On-the-ground employment infrastructure in Ethiopia since 2015. Employer of Record, talent acquisition, background verification, payroll processing, and CISI training services for international companies.",
        foundingDate: "2015",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suite 301E, Bethlehem Plaza, Kenenisa Avenue, Megenagna",
          addressLocality: "Addis Ababa",
          addressRegion: "Addis Ababa",
          addressCountry: "ET",
        },
        telephone: "+251942070707",
        email: "info@yes.et",
        sameAs: [
          "https://linkedin.com/company/yes-your-employment-solutions",
          "https://www.facebook.com/youremploymentsolutionsethiopia/",
          "https://twitter.com/YESethiopia",
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "The Standard", item: "https://www.yes.et/the-standard" },
        ],
      }} />
      <TheStandard />
    </>
  )
}
