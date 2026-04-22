"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import { AnimatedNavLink } from "@/components/ui/AnimatedLink"
import { useTheme, type ThemeId } from "@/lib/theme"

const solutions = [
  {
    label: "Employer of Record",
    href: "/solutions/eor",
    desc: "Your legal shield in Ethiopia",
  },
  {
    label: "Talent Acquisition",
    href: "/solutions/talent-acquisition",
    desc: "Ethiopia's top professionals, matched",
  },
  {
    label: "Integrity & Vetting",
    href: "/solutions/integrity",
    desc: "Forensic proof of veracity",
  },
  {
    label: "Payroll & Tax",
    href: "/solutions/payroll",
    desc: "Zero-error, zero-penalty",
  },
  {
    label: "Training Academy",
    href: "/solutions/training-academy",
    desc: "CISI certification & upskilling",
  },
  {
    label: "Enterprise Solutions",
    href: "/solutions/enterprise",
    desc: "The Syntropy platform suite",
  },
]

const navLinks = [
  { label: "About", href: "/the-standard" },
  { label: "For Talent", href: "/for-talent" },
  { label: "Intelligence", href: "/intelligence" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const themeConfig = useTheme()
  const pillRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const separatorRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const drawerRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const animatingRef = useRef(false)
  const pathname = usePathname() ?? "/"

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")
  const isSolutionsActive = pathname.startsWith("/solutions")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSolutionsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileOpen) setMobileOpen(false)
        if (solutionsOpen) setSolutionsOpen(false)
      }
    },
    [mobileOpen, solutionsOpen]
  )
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Focus trap for mobile drawer
  useEffect(() => {
    if (!mobileOpen || !drawerRef.current) return
    const drawer = drawerRef.current
    const focusableEls = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    const firstEl = focusableEls[0]
    const lastEl = focusableEls[focusableEls.length - 1]
    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault()
          lastEl?.focus()
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault()
          firstEl?.focus()
        }
      }
    }
    drawer.addEventListener("keydown", trapFocus)
    return () => drawer.removeEventListener("keydown", trapFocus)
  }, [mobileOpen])

  // ── GSAP orchestrated expand / collapse ──
  useEffect(() => {
    const pill = pillRef.current
    const panel = panelRef.current
    const separator = separatorRef.current
    const cards = cardsRef.current.filter(Boolean) as HTMLAnchorElement[]

    if (!pill || !panel || !separator || cards.length === 0) return

    if (animatingRef.current) {
      gsap.killTweensOf([pill, panel, separator, ...cards])
    }
    animatingRef.current = true

    if (solutionsOpen) {
      // Make panel visible but 0 height so we can measure
      gsap.set(panel, { display: "block", height: "auto" })
      const fullHeight = panel.offsetHeight
      gsap.set(panel, { height: 0, overflow: "hidden" })

      // Set initial states for children
      gsap.set(separator, { scaleX: 0, transformOrigin: "left center" })
      gsap.set(cards, { opacity: 0, y: 12, scale: 0.97 })

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: () => {
          animatingRef.current = false
        },
      })

      // 1. Pill expands — panel height grows
      tl.to(panel, {
        height: fullHeight,
        duration: 0.3,
        ease: "power4.out",
        onComplete: () => {
          gsap.set(panel, { height: "auto", overflow: "visible" })
        },
      })

      // 2. Separator line draws across (overlaps with expand)
      tl.to(
        separator,
        {
          scaleX: 1,
          duration: 0.25,
          ease: "power3.out",
        },
        0.05
      )

      // 3. Cards stagger in — left to right, top to bottom
      tl.to(
        cards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.2,
          stagger: {
            amount: 0.12,
            grid: [2, 3],
            from: "start",
          },
          ease: "power3.out",
        },
        0.1
      )
    } else {
      const tl = gsap.timeline({
        defaults: { ease: "power3.in" },
        onComplete: () => {
          gsap.set(panel, { display: "none" })
          animatingRef.current = false
        },
      })

      // 1. Cards fade out quickly (reverse stagger)
      tl.to(cards, {
        opacity: 0,
        y: -4,
        scale: 0.98,
        duration: 0.12,
        stagger: {
          amount: 0.06,
          from: "end",
        },
      })

      // 2. Separator retracts
      tl.to(
        separator,
        {
          scaleX: 0,
          duration: 0.15,
          transformOrigin: "right center",
        },
        0.04
      )

      // 3. Panel collapses
      tl.to(
        panel,
        {
          height: 0,
          overflow: "hidden",
          duration: 0.2,
          ease: "power4.inOut",
        },
        0.08
      )
    }

    return () => {
      gsap.killTweensOf([pill, panel, separator, ...cards])
    }
  }, [solutionsOpen])

  // Hover handlers
  const handleNavEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setSolutionsOpen(true)
  }
  const handleNavLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setSolutionsOpen(false), 200)
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-[100] flex justify-center px-4 pt-3 md:px-6 md:pt-4">
      {/* The pill navbar — expands to reveal solutions */}
      <div
        ref={pillRef}
        className="w-full max-w-[1120px] overflow-hidden rounded-[var(--radius-large)] transition-[background,box-shadow]"
        style={{
          background: solutionsOpen
            ? "rgba(255, 255, 255, 0.82)"
            : scrolled
              ? "rgba(255, 255, 255, 0.65)"
              : "rgba(255, 255, 255, 0.45)",
          backdropFilter: "blur(24px) saturate(1.8)",
          WebkitBackdropFilter: "blur(24px) saturate(1.8)",
          boxShadow:
            "rgba(14, 15, 12, 0.04) 0px 0px 0px 1px, rgba(14, 15, 12, 0.03) 0px 2px 8px",
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
        }}
        onMouseLeave={handleNavLeave}
      >
        {/* Top bar */}
        <nav
          className="flex h-[56px] items-center justify-between px-2 md:px-3"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="relative z-50 flex items-center"
            aria-label="YES | Your Employment Solutions — Home"
          >
            <img
              src="/logo.svg"
              alt="YES | Your Employment Solutions"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            <button
              className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                isSolutionsActive || solutionsOpen
                  ? "text-near-black"
                  : "text-near-black/55 hover:text-near-black"
              }`}
              style={{ fontFeatureSettings: '"calt"' }}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              onMouseEnter={handleNavEnter}
            >
              Solutions
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                className="opacity-40 transition-transform duration-300"
                style={{
                  transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              >
                <path
                  d="M2 4L5 7L8 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {navLinks.map((link) => (
              <AnimatedNavLink
                key={link.href}
                href={link.href}
                active={isActive(link.href)}
              >
                {link.label}
              </AnimatedNavLink>
            ))}
          </div>

          {/* CTA + Theme Switcher */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* Theme switcher */}
            <div
              className="flex items-center gap-1 rounded-full px-1.5 py-1.5"
              style={{ background: "rgba(14, 15, 12, 0.04)" }}
            >
              {(Object.keys(themeConfig.themes) as ThemeId[]).map((id) => (
                <button
                  key={id}
                  onClick={() => themeConfig.setTheme(id)}
                  className="relative h-5 w-5 rounded-full transition-all duration-200"
                  style={{
                    background: themeConfig.themes[id].swatch,
                    boxShadow:
                      themeConfig.themeId === id
                        ? "0 0 0 2px #fff, 0 0 0 3.5px rgba(14,15,12,0.3)"
                        : "none",
                    transform:
                      themeConfig.themeId === id ? "scale(1.1)" : "scale(0.85)",
                    opacity: themeConfig.themeId === id ? 1 : 0.5,
                  }}
                  aria-label={`Switch to ${themeConfig.labels[id]} theme`}
                  title={themeConfig.labels[id]}
                />
              ))}
            </div>

            {/* Hook color toggle */}
            <button
              onClick={themeConfig.toggleHooks}
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-200"
              style={{
                background: themeConfig.hooksEnabled ? "rgba(14, 15, 12, 0.04)" : "rgba(14, 15, 12, 0.08)",
                fontFeatureSettings: '"calt"',
                color: themeConfig.hooksEnabled ? "var(--color-hook)" : "var(--color-near-black)",
                fontStyle: "italic",
                fontFamily: themeConfig.hooksEnabled ? "var(--font-serif)" : "var(--font-display)",
              }}
              aria-label={themeConfig.hooksEnabled ? "Turn off accent hook colors" : "Turn on accent hook colors"}
              title={themeConfig.hooksEnabled ? "Hooks: On" : "Hooks: Off"}
            >
              <span>Aa</span>
              <span
                className="w-[26px] h-[14px] rounded-full relative transition-colors duration-200"
                style={{
                  background: themeConfig.hooksEnabled ? "var(--color-wise-green)" : "rgba(14, 15, 12, 0.15)",
                }}
              >
                <span
                  className="absolute top-[2px] w-[10px] h-[10px] rounded-full bg-white transition-all duration-200"
                  style={{
                    left: themeConfig.hooksEnabled ? "14px" : "2px",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
                  }}
                />
              </span>
            </button>

            <Link
              href="/initialize"
              className="wise-btn rounded-[var(--radius-pill)] bg-wise-green px-4 py-2 text-[13px] font-semibold text-dark-green"
              style={{ fontFeatureSettings: '"calt"' }}
            >
              Talk to Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="relative z-[102] flex h-12 w-12 items-center justify-center lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span
                className="block h-0.5 origin-center rounded-sm bg-near-black transition-all"
                style={{
                  transitionDuration: "var(--duration-fast)",
                  transform: mobileOpen
                    ? "translateY(7px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                className="block h-0.5 rounded-sm bg-near-black transition-all"
                style={{
                  transitionDuration: "var(--duration-fast)",
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block h-0.5 origin-center rounded-sm bg-near-black transition-all"
                style={{
                  transitionDuration: "var(--duration-fast)",
                  transform: mobileOpen
                    ? "translateY(-7px) rotate(-45deg)"
                    : "none",
                }}
              />
            </div>
          </button>
        </nav>

        {/* Solutions panel — GSAP animated expand */}
        <div
          ref={panelRef}
          className="hidden lg:hidden"
          onMouseEnter={handleNavEnter}
        >
          <div className="px-5 pt-1 pb-5 md:px-6">
            {/* Animated separator */}
            <div
              ref={separatorRef}
              className="mb-4 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-wise-green) 30%, transparent) 20%, color-mix(in srgb, var(--color-wise-green) 15%, transparent) 80%, transparent)",
                transform: "scaleX(0)",
              }}
            />

            {/* Solution cards */}
            <div className="grid grid-cols-3 gap-x-1 gap-y-0.5">
              {solutions.map((item, i) => (
                <Link
                  key={item.href}
                  ref={(el) => {
                    cardsRef.current[i] = el
                  }}
                  href={item.href}
                  className={`group relative flex flex-col gap-1 rounded-[var(--radius-card)] px-4 py-3.5 transition-all duration-150 hover:bg-green-nav-hover ${
                    isActive(item.href) ? "bg-green-nav-hover" : ""
                  }`}
                  style={{ opacity: 0 }}
                >
                  <span
                    className="text-[13px] leading-tight font-semibold text-near-black transition-colors duration-150"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {item.label}
                    <svg
                      className="ml-1.5 inline-block -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-40"
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className="text-[11px] leading-snug text-gray"
                    style={{ fontFeatureSettings: '"calt"' }}
                  >
                    {item.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-near-black/30 backdrop-blur-sm transition-opacity duration-[var(--duration-normal)] lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 z-[101] w-full max-w-[360px] overflow-y-auto bg-white transition-transform lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          transitionDuration: "var(--duration-normal)",
          transitionTimingFunction: "var(--ease-out)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="px-6 pt-24 pb-8">
          <div
            className="mb-3 text-[11px] font-bold tracking-[0.12em] text-wise-green uppercase"
            style={{ fontFeatureSettings: '"calt"' }}
          >
            Solutions
          </div>
          {solutions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col gap-0.5 rounded-[var(--radius-standard)] px-3 py-2.5 transition-colors hover:bg-green-nav-hover"
              onClick={() => setMobileOpen(false)}
            >
              <span
                className="text-[14px] font-semibold text-near-black"
                style={{ fontFeatureSettings: '"calt"' }}
              >
                {item.label}
              </span>
              <span className="text-[11px] text-gray">{item.desc}</span>
            </Link>
          ))}
          <div className="my-4 h-px bg-near-black/6" />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-[var(--radius-standard)] px-3 py-2.5 text-[15px] font-medium text-near-black/70 transition-colors hover:bg-green-nav-hover"
              style={{ fontFeatureSettings: '"calt"' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6">
            <Link
              href="/initialize"
              className="wise-btn block w-full rounded-[var(--radius-pill)] bg-wise-green px-6 py-3.5 text-center text-[14px] font-semibold text-dark-green"
              onClick={() => setMobileOpen(false)}
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
