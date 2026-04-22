import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const CONTENT_DIR = path.join(process.cwd(), "src/content/intelligence")

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  category: "Legal" | "Market Entry" | "Talent Trends" | "Capital Markets" | "Compliance"
  date: string
  author?: string
  readingTime: string
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}

export function getArticleMeta(slug: string): ArticleMeta | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    title: data.title,
    description: data.description,
    category: data.category,
    date: data.date,
    author: data.author,
    readingTime: rt.text,
  }
}

export function getAllArticles(): ArticleMeta[] {
  return getArticleSlugs()
    .map(getArticleMeta)
    .filter((a): a is ArticleMeta => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
