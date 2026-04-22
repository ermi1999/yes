"use client"

import { useEffect, useState, type ComponentType } from "react"
import { compile, run } from "@mdx-js/mdx"
import * as jsxRuntime from "react/jsx-runtime"
import { mdxComponents } from "@/components/mdx/MdxComponents"

export function MdxRenderer({ source }: { source: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Content, setContent] = useState<ComponentType<any> | null>(null)

  useEffect(() => {
    async function renderMdx() {
      const compiled = await compile(source, { outputFormat: "function-body" })
      const { default: MdxContent } = await run(String(compiled), {
        ...jsxRuntime,
        baseUrl: import.meta.url,
      })
      setContent(() => MdxContent)
    }
    renderMdx().catch(console.error)
  }, [source])

  if (!Content) {
    return <div className="text-center text-gray py-10 animate-pulse">Loading article...</div>
  }

  return <Content components={mdxComponents} />
}
