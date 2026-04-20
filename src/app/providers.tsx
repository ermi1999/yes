"use client"

import { useState, useCallback, useEffect } from "react"
import { ThemeProvider } from "@/lib/theme"
import { LogoLoader } from "@/components/LogoLoader"

export function Providers({ children }: { children: React.ReactNode }) {
  // Start with null (unknown) to avoid hydration mismatch
  // useEffect determines client-side whether to show loader
  const [loading, setLoading] = useState<boolean | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem("yes-loaded")) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [])

  const handleComplete = useCallback(() => {
    sessionStorage.setItem("yes-loaded", "1")
    setLoading(false)
  }, [])

  // During SSR and initial hydration, render children (matches server output)
  if (loading === null) {
    return <ThemeProvider>{children}</ThemeProvider>
  }

  if (loading) {
    return <LogoLoader onComplete={handleComplete} />
  }

  return <ThemeProvider>{children}</ThemeProvider>
}
