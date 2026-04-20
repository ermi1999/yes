import type { Metadata } from "next"
import Terms from "@/page-components/Terms"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Terms of Service | YES Employment Solutions",
  description: "Terms of service for YES Employment Solutions. The terms governing your access to and use of the website, services, and platforms operated by YES.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | YES Employment Solutions",
    description: "Terms of service for YES Employment Solutions. The terms governing your access to and use of the website, services, and platforms operated by YES.",
    url: "/terms",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://www.yes.et/terms" },
        ],
      }} />
      <Terms />
    </>
  )
}
