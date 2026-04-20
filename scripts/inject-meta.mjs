/**
 * Post-build script: Injects per-route meta tags into index.html copies
 * for each route. This ensures social crawlers (Facebook, LinkedIn, Twitter)
 * and search engine bots see correct meta tags even without JS execution.
 *
 * Run after `vite build`: node scripts/inject-meta.mjs
 */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, "..", "dist")

const SITE_URL = "https://www.yes.et"
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/OG IMAGE YES.png`

const routes = [
  {
    path: "/",
    title: "YES | The Standard for Employment in Ethiopia",
    description: "Hire, manage, and pay teams in Ethiopia with full legal compliance. EOR, talent acquisition, vetting, payroll, and CISI training. Established 2015, Addis Ababa.",
  },
  {
    path: "/the-standard",
    title: "About YES Employment Solutions | 10+ Years in Addis Ababa",
    description: "Founded in 2015 in Addis Ababa. Learn about YES Employment Solutions — Ethiopia's employment infrastructure standard.",
  },
  {
    path: "/for-talent",
    title: "For Talent | Apply to Join — YES Employment Solutions Ethiopia",
    description: "Join the YES Executive Roster. Priority matching to 200+ hiring partners, CISI certification access, and vetted professional credibility.",
  },
  {
    path: "/initialize",
    title: "Start Your Ethiopia Expansion | Strategy Briefing | YES",
    description: "Begin your Ethiopian expansion with a strategy briefing. Timeline, costs, compliance requirements, and next steps — mapped in one conversation.",
  },
  {
    path: "/intelligence",
    title: "Ethiopia Market Intelligence | Employment Law, Talent Trends & Guides | YES",
    description: "Research, guides, and analysis for companies operating in Ethiopia. Labor law, market entry strategies, talent trends, and capital market insights.",
  },
  {
    path: "/solutions/eor",
    title: "Employer of Record in Ethiopia | Legal Compliance & Payroll | YES",
    description: "Hire employees in Ethiopia without a local entity. Full Proclamation 1156/2019 compliance, payroll, tax, and pension — managed by YES.",
  },
  {
    path: "/solutions/talent-acquisition",
    title: "Talent Acquisition Ethiopia | Executive Search & Technical Recruiting | YES",
    description: "Access the top 3% of Ethiopian professional talent. 14-day average time-to-hire, 94% retention rate, 20,000+ vetted candidates.",
  },
  {
    path: "/solutions/integrity",
    title: "Background Checks Ethiopia | Employee Vetting & Verification | YES",
    description: "Forensic-grade background verification using Primary Source Verification methodology. Academic, criminal, professional, and reference checks.",
  },
  {
    path: "/solutions/payroll",
    title: "Payroll Services Ethiopia | Tax Filing & Pension | YES",
    description: "Zero-error payroll processing with ERCA integration. Income tax, pension, and withholding tax — filed on time, every time. 10+ years, zero penalties.",
  },
  {
    path: "/solutions/training-academy",
    title: "CISI Certification Ethiopia | Capital Markets Training | YES Academy",
    description: "Ethiopia's authorized CISI UK training partner. Certify your financial services team with globally recognized qualifications.",
  },
  {
    path: "/solutions/enterprise",
    title: "Your Enterprise Solutions | Syntropy Work · Property · Pharma · Health | YES",
    description: "The Syntropy platform suite by YES. Workforce management, property, pharmaceutical distribution — enterprise software for Ethiopia.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | YES Employment Solutions",
    description: "Privacy policy for YES Employment Solutions. How we collect, use, and protect your personal data.",
  },
  {
    path: "/terms",
    title: "Terms of Service | YES Employment Solutions",
    description: "Terms of service for YES Employment Solutions. Legal terms governing use of our services and platforms.",
  },
]

// Read the base index.html
const indexHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8")

for (const route of routes) {
  const canonicalUrl = `${SITE_URL}${route.path === "/" ? "" : route.path}`

  // Replace the default title and description, and add OG/Twitter tags
  let html = indexHtml
    .replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    )
    .replace(
      /<meta name="description" content=".*?".*?\/>/,
      `<meta name="description" content="${route.description}" />`
    )

  // Inject OG + Twitter + canonical before </head>
  const metaTags = `
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="${DEFAULT_OG_IMAGE}" />
    <meta property="og:site_name" content="YES Employment Solutions" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />
  `

  html = html.replace("</head>", `${metaTags}</head>`)

  // Write to the route's directory
  if (route.path === "/") {
    fs.writeFileSync(path.join(distDir, "index.html"), html)
  } else {
    const routeDir = path.join(distDir, route.path)
    fs.mkdirSync(routeDir, { recursive: true })
    fs.writeFileSync(path.join(routeDir, "index.html"), html)
  }
}

console.log(`✓ Injected meta tags for ${routes.length} routes`)
