import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getArticleSlugs, getArticleMeta } from "@/lib/articles"
import { getArticleContent } from "@/lib/mdx"
import { JsonLd } from "@/components/seo/JsonLd"
import { ArticleLayout } from "./article-layout"
import { MdxRenderer } from "./mdx-renderer"

export const dynamicParams = false

export function generateStaticParams() {
  const slugs = getArticleSlugs()
  if (slugs.length === 0) return [{ slug: "_placeholder" }]
  return slugs.map((slug) => ({ slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (slug === "_placeholder") return { title: "Not Found" }
  const meta = getArticleMeta(slug)
  if (!meta) return { title: "Article Not Found" }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/intelligence/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/intelligence/${slug}`,
      type: "article",
      publishedTime: meta.date,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  if (slug === "_placeholder") notFound()

  const meta = getArticleMeta(slug)
  if (!meta) notFound()

  const articleContent = await getArticleContent(slug)
  if (!articleContent) notFound()

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        datePublished: meta.date,
        author: { "@type": "Organization", name: meta.author || "YES Employment Solutions", url: "https://www.yes.et" },
        publisher: { "@type": "Organization", name: "YES Employment Solutions", url: "https://www.yes.et" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yes.et/" },
          { "@type": "ListItem", position: 2, name: "Intelligence", item: "https://www.yes.et/intelligence" },
          { "@type": "ListItem", position: 3, name: meta.title, item: `https://www.yes.et/intelligence/${slug}` },
        ],
      }} />
      <ArticleLayout meta={meta}>
        <MdxRenderer source={articleContent.content} />
      </ArticleLayout>
    </>
  )
}
