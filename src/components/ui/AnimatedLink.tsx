"use client"

import { useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"

interface AnimatedNavLinkProps {
  href: string
  active: boolean
  children: React.ReactNode
  className?: string
}

export function AnimatedNavLink({ href, active, children, className = "" }: AnimatedNavLinkProps) {
  const lineRef = useRef<HTMLDivElement>(null)

  const handleEnter = () => {
    if (!lineRef.current) return
    gsap.killTweensOf(lineRef.current)
    gsap.set(lineRef.current, { x: "-101%" })
    gsap.to(lineRef.current, { x: "0%", duration: 0.8, ease: "power3.out" })
  }

  const handleLeave = () => {
    if (!lineRef.current) return
    gsap.killTweensOf(lineRef.current)
    gsap.to(lineRef.current, { x: "101%", duration: 0.5, ease: "power3.out" })
  }

  return (
    <Link
      href={href}
      className={`relative px-3.5 py-2 text-[13px] font-medium transition-colors ${
        active ? "text-near-black" : "text-near-black/55 hover:text-near-black"
      } ${className}`}
      style={{ fontFeatureSettings: '"calt"' }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
      <div className="absolute bottom-1 left-3.5 right-3.5 h-px overflow-hidden">
        <div
          ref={lineRef}
          className="w-full h-full bg-wise-green"
          style={{ transform: active ? "translateX(0%)" : "translateX(-101%)" }}
        />
      </div>
    </Link>
  )
}

interface FooterLinkProps {
  to?: string
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
}

export function AnimatedFooterLink({ to, href, external, children, className = "" }: FooterLinkProps) {
  const lineRef = useRef<HTMLSpanElement>(null)

  const handleEnter = () => {
    if (!lineRef.current) return
    gsap.killTweensOf(lineRef.current)
    gsap.set(lineRef.current, { x: "-101%" })
    gsap.to(lineRef.current, { x: "0%", duration: 0.8, ease: "power3.out" })
  }

  const handleLeave = () => {
    if (!lineRef.current) return
    gsap.killTweensOf(lineRef.current)
    gsap.to(lineRef.current, { x: "101%", duration: 0.5, ease: "power3.out" })
  }

  const inner = (
    <>
      {children}
      <span className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <span ref={lineRef} className="block w-full h-full bg-wise-green" style={{ transform: "translateX(-101%)" }} />
      </span>
    </>
  )

  const cls = `relative inline-block text-[13px] text-white/45 hover:text-white/70 transition-colors ${className}`

  if (to) {
    return <Link href={to} className={cls} onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{ fontFeatureSettings: '"calt"' }}>{inner}</Link>
  }

  return (
    <a href={href} className={cls} onMouseEnter={handleEnter} onMouseLeave={handleLeave}
      style={{ fontFeatureSettings: '"calt"' }}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >{inner}</a>
  )
}
