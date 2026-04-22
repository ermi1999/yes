"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type ThemeId =
  | "wise-green"
  | "navy-gold"
  | "navy-teal"
  | "stripe"
  | "vercel"
  | "apple"
  | "cursor"
  | "revolut"

interface ThemeColors {
  accent: string
  accentText: string
  accentMuted: string
  accentHover: string
  hookColor: string
  separator: string
  textPrimary: string
  textSecondary: string
  textTertiary: string
  bg: string
  nearBlack: string
  surfaceTintMid: string
  surfaceTintDeep: string
  sectionTint: string
  /** Color shown in the theme switcher dot */
  swatch: string
}

const themes: Record<ThemeId, ThemeColors> = {
  // ── Original YES Themes ──
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
    surfaceTintMid: "#fafbf9",
    surfaceTintDeep: "#f5f7f3",
    sectionTint: "rgba(159, 232, 112, 0.03)",
    swatch: "#9fe870",
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
    surfaceTintMid: "#f7f8fa",
    surfaceTintDeep: "#f0f2f5",
    sectionTint: "rgba(212, 160, 23, 0.02)",
    swatch: "#D4A017",
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
    surfaceTintMid: "#fbf9f5",
    surfaceTintDeep: "#f7f3ec",
    sectionTint: "rgba(201, 169, 110, 0.03)",
    swatch: "#4DC5C1",
  },

  // ── Stripe — Deep purple, luxury fintech ──
  stripe: {
    accent: "#533afd",
    accentText: "#ffffff",
    accentMuted: "rgba(83, 58, 253, 0.08)",
    accentHover: "rgba(83, 58, 253, 0.06)",
    hookColor: "#ea2261",
    separator: "rgba(6, 27, 49, 0.08)",
    textPrimary: "#061b31",
    textSecondary: "#64748d",
    textTertiary: "#9ca3af",
    bg: "#ffffff",
    nearBlack: "#1c1e54",
    surfaceTintMid: "#f8f7ff",
    surfaceTintDeep: "#f2f0ff",
    sectionTint: "rgba(83, 58, 253, 0.015)",
    swatch: "#533afd",
  },

  // ── Vercel — Pure monochrome black ──
  vercel: {
    accent: "#171717",
    accentText: "#ffffff",
    accentMuted: "rgba(23, 23, 23, 0.06)",
    accentHover: "rgba(23, 23, 23, 0.04)",
    hookColor: "#ff5b4f",
    separator: "rgba(23, 23, 23, 0.08)",
    textPrimary: "#171717",
    textSecondary: "#4d4d4d",
    textTertiary: "#999999",
    bg: "#ffffff",
    nearBlack: "#171717",
    surfaceTintMid: "#fafafa",
    surfaceTintDeep: "#f2f2f2",
    sectionTint: "rgba(23, 23, 23, 0.015)",
    swatch: "#171717",
  },

  // ── Apple — Minimal gray + blue ──
  apple: {
    accent: "#0071e3",
    accentText: "#ffffff",
    accentMuted: "rgba(0, 113, 227, 0.08)",
    accentHover: "rgba(0, 113, 227, 0.06)",
    hookColor: "#0071e3",
    separator: "rgba(29, 29, 31, 0.08)",
    textPrimary: "#1d1d1f",
    textSecondary: "rgba(0, 0, 0, 0.56)",
    textTertiary: "rgba(0, 0, 0, 0.36)",
    bg: "#f5f5f7",
    nearBlack: "#000000",
    surfaceTintMid: "#ededf0",
    surfaceTintDeep: "#e8e8eb",
    sectionTint: "rgba(0, 113, 227, 0.015)",
    swatch: "#0071e3",
  },

  // ── Cursor — Warm cream + hot orange ──
  cursor: {
    accent: "#f54e00",
    accentText: "#ffffff",
    accentMuted: "rgba(245, 78, 0, 0.08)",
    accentHover: "rgba(245, 78, 0, 0.06)",
    hookColor: "#c08532",
    separator: "rgba(38, 37, 30, 0.1)",
    textPrimary: "#26251e",
    textSecondary: "#8d8c87",
    textTertiary: "#bab8b1",
    bg: "#f2f1ed",
    nearBlack: "#26251e",
    surfaceTintMid: "#eceae5",
    surfaceTintDeep: "#e6e4de",
    sectionTint: "rgba(245, 78, 0, 0.02)",
    swatch: "#f54e00",
  },

  // ── Revolut — Sharp indigo + pink hook ──
  revolut: {
    accent: "#494fdf",
    accentText: "#ffffff",
    accentMuted: "rgba(73, 79, 223, 0.08)",
    accentHover: "rgba(73, 79, 223, 0.06)",
    hookColor: "#e61e49",
    separator: "rgba(25, 28, 31, 0.08)",
    textPrimary: "#191c1f",
    textSecondary: "#505a63",
    textTertiary: "#8d969e",
    bg: "#ffffff",
    nearBlack: "#191c1f",
    surfaceTintMid: "#f8f8fa",
    surfaceTintDeep: "#f0f1f4",
    sectionTint: "rgba(73, 79, 223, 0.015)",
    swatch: "#494fdf",
  },
}

const themeLabels: Record<ThemeId, string> = {
  "wise-green": "Wise Green",
  "navy-gold": "Navy Gold",
  "navy-teal": "Navy Teal",
  stripe: "Stripe",
  vercel: "Vercel",
  apple: "Apple",
  cursor: "Cursor",
  revolut: "Revolut",
}

interface ThemeContextType {
  themeId: ThemeId
  setTheme: (id: ThemeId) => void
  themes: typeof themes
  labels: typeof themeLabels
  hooksEnabled: boolean
  toggleHooks: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  themeId: "wise-green",
  setTheme: () => {},
  themes,
  labels: themeLabels,
  hooksEnabled: true,
  toggleHooks: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function applyTheme(id: ThemeId) {
  const t = themes[id]
  const root = document.documentElement.style

  root.setProperty("--color-wise-green", t.accent)
  root.setProperty("--color-dark-green", t.accentText)
  root.setProperty("--color-green-nav-hover", t.accentHover)
  root.setProperty("--color-light-mint", t.accentMuted)
  root.setProperty("--color-hook", t.hookColor)
  root.setProperty("--color-separator", t.separator)
  root.setProperty("--color-near-black", t.textPrimary)
  root.setProperty("--color-warm-dark", t.textSecondary)
  root.setProperty("--color-gray", t.textTertiary)
  root.setProperty("--color-surface-tint-mid", t.surfaceTintMid)
  root.setProperty("--color-surface-tint-deep", t.surfaceTintDeep)
  root.setProperty("--color-section-tint", t.sectionTint)
  document.body.style.backgroundColor = t.bg
  document.body.style.color = t.textPrimary
  document.documentElement.dataset.theme = id
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    if (typeof window === "undefined") return "navy-teal"
    const saved = localStorage.getItem("yes-theme") as ThemeId | null
    return saved && themes[saved] ? saved : "navy-teal"
  })

  const [hooksEnabled, setHooksEnabled] = useState(true)

  // Read saved preference after hydration
  useEffect(() => {
    const saved = localStorage.getItem("yes-hooks")
    if (saved === "off") setHooksEnabled(false)
  }, [])

  useEffect(() => {
    applyTheme(themeId)
    localStorage.setItem("yes-theme", themeId)
  }, [themeId])

  useEffect(() => {
    document.documentElement.classList.toggle("hooks-off", !hooksEnabled)
    localStorage.setItem("yes-hooks", hooksEnabled ? "on" : "off")
  }, [hooksEnabled])

  const toggleHooks = () => setHooksEnabled((v) => !v)

  return (
    <ThemeContext.Provider value={{ themeId, setTheme: setThemeId, themes, labels: themeLabels, hooksEnabled, toggleHooks }}>
      {children}
    </ThemeContext.Provider>
  )
}
