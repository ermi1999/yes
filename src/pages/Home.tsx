import { Hero } from "@/components/home/Hero"
import { BeyondDashboard } from "@/components/home/BeyondDashboard"
import { Roadmap } from "@/components/home/Roadmap"
import { TrustedBy } from "@/components/home/TrustedBy"
import { CTABanner } from "@/components/home/CTABanner"
import { VelvetRope } from "@/components/layout/VelvetRope"
import { SEOHead } from "@/components/seo/SEOHead"
import { JsonLd } from "@/components/seo/JsonLd"

export default function Home() {
  return (
    <>
      <SEOHead
        title="YES | The Standard for Employment in Ethiopia"
        description="Hire, manage, and pay teams in Ethiopia with full legal compliance. EOR, talent acquisition, vetting, payroll, and CISI training. Established 2015, Addis Ababa."
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "YES Employment Solutions",
        url: "https://www.yes.et",
        logo: "https://www.yes.et/favicon.svg",
        description: "Hire, manage, and pay employees in Ethiopia with full legal compliance. Employer of Record, talent acquisition, vetting, payroll, and CISI training. Established 2015, Addis Ababa.",
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
        "@type": "WebSite",
        name: "YES Employment Solutions",
        url: "https://www.yes.et",
        description: "Hire, manage, and pay employees in Ethiopia with full legal compliance. Employer of Record, talent acquisition, vetting, payroll, and CISI training. Established 2015, Addis Ababa.",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
        ],
      }} />
      <Hero />
      <BeyondDashboard />
      <Roadmap />
      <TrustedBy />
      <CTABanner />
      <VelvetRope />
    </>
  )
}
