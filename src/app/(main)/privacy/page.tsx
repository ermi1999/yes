import type { Metadata } from "next"
import Privacy from "@/page-components/Privacy"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Privacy Policy | YES Employment Solutions",
  description: "Privacy policy for YES Employment Solutions. Learn how we collect, use, store, and protect personal data in connection with our employment, recruitment, payroll, and training services.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | YES Employment Solutions",
    description: "Privacy policy for YES Employment Solutions. Learn how we collect, use, store, and protect personal data in connection with our employment, recruitment, payroll, and training services.",
    url: "/privacy",
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
          { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.yes.et/privacy" },
        ],
      }} />
      <Privacy />
    </>
  )
}
