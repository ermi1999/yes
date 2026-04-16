import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type ThemeId = "wise-green" | "navy-gold" | "navy-teal"

interface ThemeColors {
  accent: string
  accentText: string       // text on accent bg (buttons)
  accentMuted: string      // lighter tint
  accentHover: string      // nav hover bg
  hookColor: string        // .hook text color (italic title accents)
  separator: string        // separator lines, rule colors
  textPrimary: string      // primary body/heading text
  textSecondary: string    // muted text
  textTertiary: string     // very muted text
  bg: string               // page background
  nearBlack: string        // used for dark sections (footer, CTA banners)
}

const themes: Record<ThemeId, ThemeColors> = {
  "wise-green": {
    accent: "#9fe870",
    accentText: "#163300",
    accentMuted: "rgba(159, 232, 112, 0.12)",
    accentHover: "rgba(211, 242, 192, 0.4)",
    hookColor: "#9fe870",
    separator: "rgba(14, 15, 12, 0.08)",
    textPrimary: "#0e0f0c",
    textSecondary: "#454745",
    textTertiary: "#868685",
    bg: "#ffffff",
    nearBlack: "#0e0f0c",
  },
  "navy-gold": {
    accent: "#D4A017",
    accentText: "#ffffff",
    accentMuted: "rgba(212, 160, 23, 0.12)",
    accentHover: "rgba(212, 160, 23, 0.1)",
    hookColor: "#D4A017",
    separator: "rgba(15, 43, 74, 0.1)",
    textPrimary: "#0F2B4A",
    textSecondary: "rgba(15, 43, 74, 0.55)",
    textTertiary: "rgba(15, 43, 74, 0.35)",
    bg: "#F8FAFC",
    nearBlack: "#0F2B4A",
  },
  "navy-teal": {
    accent: "#4DC5C1",
    accentText: "#071525",
    accentMuted: "rgba(77, 197, 193, 0.12)",
    accentHover: "rgba(77, 197, 193, 0.1)",
    hookColor: "#C9A96E",
    separator: "#1C3045",
    textPrimary: "#0C1E35",
    textSecondary: "#506B7E",
    textTertiary: "#7E90A2",
    bg: "#FFFFFF",
    nearBlack: "#071525",
  },
}

const themeLabels: Record<ThemeId, string> = {
  "wise-green": "Green",
  "navy-gold": "Gold",
  "navy-teal": "Teal",
}

interface ThemeContextType {
  themeId: ThemeId
  setTheme: (id: ThemeId) => void
  themes: typeof themes
  labels: typeof themeLabels
}

const ThemeContext = createContext<ThemeContextType>({
  themeId: "wise-green",
  setTheme: () => {},
  themes,
  labels: themeLabels,
})

export function useTheme() {
  return useContext(ThemeContext)
}

function applyTheme(id: ThemeId) {
  const t = themes[id]
  const root = document.documentElement.style

  // Accent colors
  root.setProperty("--color-wise-green", t.accent)
  root.setProperty("--color-dark-green", t.accentText)
  root.setProperty("--color-green-nav-hover", t.accentHover)
  root.setProperty("--color-light-mint", t.accentMuted)
  root.setProperty("--color-hook", t.hookColor)
  root.setProperty("--color-separator", t.separator)

  // Text colors
  root.setProperty("--color-near-black", t.textPrimary)
  root.setProperty("--color-warm-dark", t.textSecondary)
  root.setProperty("--color-gray", t.textTertiary)

  // Background
  document.body.style.backgroundColor = t.bg

  document.body.style.color = t.textPrimary

  // data attribute for CSS overrides
  document.documentElement.dataset.theme = id
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    const saved = localStorage.getItem("yes-theme") as ThemeId | null
    return saved && themes[saved] ? saved : "wise-green"
  })

  useEffect(() => {
    applyTheme(themeId)
    localStorage.setItem("yes-theme", themeId)
  }, [themeId])

  return (
    <ThemeContext.Provider value={{ themeId, setTheme: setThemeId, themes, labels: themeLabels }}>
      {children}
    </ThemeContext.Provider>
  )
}
