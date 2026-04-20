import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yes.et"),
  title: {
    default: "YES | The Standard for Employment in Ethiopia",
    template: "%s | YES Employment Solutions",
  },
  description: "Hire, manage, and pay teams in Ethiopia with full legal compliance. EOR, talent acquisition, vetting, payroll, and CISI training. Established 2015, Addis Ababa.",
  openGraph: {
    type: "website",
    siteName: "YES Employment Solutions",
    images: ["/og/OG IMAGE YES.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Cormorant/Cormorant-MediumItalic.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
            <h1>YES | Your Employment Solutions</h1>
            <p>This website requires JavaScript to function. Please enable JavaScript in your browser settings.</p>
            <p>Contact us directly: <a href="mailto:info@yes.et">info@yes.et</a> | <a href="tel:+251942070707">+251 942 07 07 07</a></p>
          </div>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
