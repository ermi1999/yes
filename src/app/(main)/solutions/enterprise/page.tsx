import type { Metadata } from "next"
import Enterprise from "@/page-components/solutions/Enterprise"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Your Enterprise Solutions | Syntropy Work \u00b7 Property \u00b7 Pharma \u00b7 Health | YES",
  description: "The Syntropy platform suite by YES. Workforce management, commercial property, pharmaceutical distribution, and healthcare — enterprise software built for Ethiopian business realities.",
  alternates: { canonical: "/solutions/enterprise" },
  openGraph: {
    title: "Your Enterprise Solutions | Syntropy Work \u00b7 Property \u00b7 Pharma \u00b7 Health | YES",
    description: "The Syntropy platform suite by YES. Workforce management, commercial property, pharmaceutical distribution, and healthcare — enterprise software built for Ethiopian business realities.",
    url: "/solutions/enterprise",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Your Enterprise Solutions (YES) \u2014 Syntropy Platform Suite",
        description: "Enterprise software built by YES: Syntropy Work, Syntropy Property, Syntropy Pharma, Syntropy Health, and FundTracker.",
        provider: { "@type": "Organization", name: "YES Employment Solutions", url: "https://www.yes.et" },
        areaServed: { "@type": "Country", name: "Ethiopia" },
        serviceType: "Enterprise Software Solutions",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Enterprise Solutions", item: "https://www.yes.et/solutions/enterprise" },
        ],
      }} />
      <Enterprise />
    </>
  )
}
