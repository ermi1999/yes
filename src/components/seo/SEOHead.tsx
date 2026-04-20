import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"

interface SEOHeadProps {
  title: string
  description: string
  ogImage?: string
}

const SITE_URL = "https://www.yes.et"
const SITE_NAME = "YES Employment Solutions"
const DEFAULT_OG_IMAGE = "/og/OG IMAGE YES.png"

export function SEOHead({ title, description, ogImage = DEFAULT_OG_IMAGE }: SEOHeadProps) {
  const { pathname } = useLocation()
  const canonicalUrl = `${SITE_URL}${pathname}`
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  )
}
