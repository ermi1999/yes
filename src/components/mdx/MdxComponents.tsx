import type { MDXComponents } from "mdx/types"
import Link from "next/link"
import {
  StatGrid, Stat,
  BarChart,
  CompareTable, CompareRow,
  Callout,
  SalaryBand, SalaryBandGroup,
  DonutGrid, Donut,
  PullQuote,
} from "./DataViz"

export const mdxComponents: MDXComponents = {
  // ── Block Elements ──
  h2: (props) => (
    <h2
      className="text-[28px] md:text-[36px] font-black leading-[0.85] mt-14 mb-5"
      style={{ fontFeatureSettings: '"calt"' }}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-[22px] md:text-[26px] font-black leading-[0.85] mt-10 mb-3"
      style={{ fontFeatureSettings: '"calt"' }}
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-[15px] md:text-base text-warm-dark leading-[1.8] font-medium mb-5"
      style={{ fontFeatureSettings: '"calt"' }}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 space-y-2 mb-6 text-[15px] text-warm-dark font-medium leading-[1.7]" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 space-y-2 mb-6 text-[15px] text-warm-dark font-medium leading-[1.7]" {...props} />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-wise-green pl-6 my-8 text-[17px] text-near-black font-medium leading-[1.7] italic"
      style={{ fontFeatureSettings: '"calt"' }}
      {...props}
    />
  ),

  // ── Inline Elements ──
  strong: (props) => <strong className="font-black text-near-black" {...props} />,
  em: (props) => <em className="hook" {...props} />,
  a: ({ href, ...props }) => {
    const isExternal = href?.startsWith("http")
    if (isExternal) {
      return (
        <a
          href={href}
          className="text-wise-green underline underline-offset-2 hover:text-dark-green transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      )
    }
    return (
      <Link
        href={href || "#"}
        className="text-wise-green underline underline-offset-2 hover:text-dark-green transition-colors"
        {...props}
      />
    )
  },

  // ── Misc Elements ──
  hr: () => <hr className="my-10 border-t border-near-black/[0.08]" />,
  table: (props) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-[14px] text-warm-dark font-medium border-collapse" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="text-left text-[12px] font-bold uppercase tracking-[0.06em] text-near-black/50 px-4 py-3 border-b border-near-black/[0.08]"
      style={{ fontFeatureSettings: '"calt"' }}
      {...props}
    />
  ),
  td: (props) => (
    <td className="px-4 py-3 border-b border-near-black/[0.04]" {...props} />
  ),
  code: (props) => (
    <code className="bg-near-black/[0.04] px-1.5 py-0.5 rounded text-[13px] font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-near-black text-white/90 rounded-[var(--radius-standard)] p-5 overflow-x-auto my-6 text-[13px] font-mono leading-relaxed" {...props} />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-[var(--radius-card)] my-8 w-full"
      alt={props.alt || ""}
      {...props}
    />
  ),

  // ── Data Visualization Components ──
  StatGrid,
  Stat,
  BarChart,
  CompareTable,
  CompareRow,
  Callout,
  SalaryBand,
  SalaryBandGroup,
  DonutGrid,
  Donut,
  PullQuote,
}
