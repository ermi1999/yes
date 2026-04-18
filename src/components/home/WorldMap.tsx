import { useEffect, useRef, useMemo } from "react"
import DottedMap from "dotted-map/without-countries"
import mapJson from "@/data/world-map.json"

// Ethiopia hub
const HUB = { lat: 9.0, lng: 38.7 }

// Destinations across all continents
const DESTINATIONS = [
  { lat: 40.71, lng: -74.01 },   // New York
  { lat: 34.05, lng: -118.24 },  // Los Angeles
  { lat: 19.43, lng: -99.13 },   // Mexico City
  { lat: -23.55, lng: -46.63 },  // São Paulo
  { lat: -34.6, lng: -58.38 },   // Buenos Aires
  { lat: 51.51, lng: -0.13 },    // London
  { lat: 48.86, lng: 2.35 },     // Paris
  { lat: 52.52, lng: 13.4 },     // Berlin
  { lat: 55.75, lng: 37.62 },    // Moscow
  { lat: 28.61, lng: 77.23 },    // New Delhi
  { lat: 39.9, lng: 116.4 },     // Beijing
  { lat: 35.68, lng: 139.69 },   // Tokyo
  { lat: 1.35, lng: 103.82 },    // Singapore
  { lat: 25.2, lng: 55.27 },     // Dubai
  { lat: -1.29, lng: 36.82 },    // Nairobi
  { lat: -33.92, lng: 18.42 },   // Cape Town
  { lat: 6.52, lng: 3.38 },      // Lagos
  { lat: 30.04, lng: 31.24 },    // Cairo
  { lat: -33.87, lng: 151.21 },  // Sydney
]

function pinToXY(lat: number, lng: number) {
  const map = new DottedMap({ map: JSON.parse(JSON.stringify(mapJson)) })
  map.addPin({ lat, lng, svgOptions: { color: "#fff", radius: 0.01 } })
  const points = map.getPoints() as { x: number; y: number }[]
  return points[points.length - 1]
}

export function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const dots = useMemo(() => {
    const map = new DottedMap({ map: JSON.parse(JSON.stringify(mapJson)) })
    return map.getPoints() as { x: number; y: number }[]
  }, [])

  const bounds = useMemo(() => {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
    dots.forEach(p => {
      if (p.x < minX) minX = p.x
      if (p.x > maxX) maxX = p.x
      if (p.y < minY) minY = p.y
      if (p.y > maxY) maxY = p.y
    })
    return { minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY }
  }, [dots])

  const hubXY = useMemo(() => pinToXY(HUB.lat, HUB.lng), [])
  const destXYs = useMemo(() => DESTINATIONS.map(d => pinToXY(d.lat, d.lng)), [])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container || dots.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let cw = 0, ch = 0

    function resize() {
      const rect = container!.getBoundingClientRect()
      cw = rect.width
      ch = rect.height
      canvas!.width = cw * dpr
      canvas!.height = ch * dpr
      canvas!.style.width = cw + "px"
      canvas!.style.height = ch + "px"
    }
    resize()
    window.addEventListener("resize", resize)

    function toCanvas(pt: { x: number; y: number }) {
      return {
        x: ((pt.x - bounds.minX) / bounds.w) * cw,
        y: ((pt.y - bounds.minY) / bounds.h) * ch,
      }
    }

    interface Projectile {
      originX: number; originY: number
      progress: number; speed: number; landed: boolean
    }
    interface Ripple {
      cx: number; cy: number
      radius: number; maxRadius: number; speed: number
    }

    const projectiles: Projectile[] = []
    const ripples: Ripple[] = []

    let shuffled = [...Array(destXYs.length).keys()]
    let destIdx = 0

    function shuffleArray() {
      shuffled = [...Array(destXYs.length).keys()]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      destIdx = 0
    }
    shuffleArray()

    function spawnProjectile() {
      if (destIdx >= shuffled.length) shuffleArray()
      const origin = destXYs[shuffled[destIdx]]
      destIdx++
      const oc = toCanvas(origin)
      projectiles.push({
        originX: oc.x, originY: oc.y,
        progress: 0,
        speed: 0.01 + Math.random() * 0.004,
        landed: false,
      })
    }

    spawnProjectile()
    const spawnInterval = setInterval(spawnProjectile, 2200)

    // Read accent color from CSS variable so it follows the theme
    function getAccentRgb() {
      const hex = getComputedStyle(document.documentElement).getPropertyValue("--color-wise-green").trim()
      if (hex.startsWith("#") && hex.length >= 7) {
        return {
          r: parseInt(hex.slice(1, 3), 16),
          g: parseInt(hex.slice(3, 5), 16),
          b: parseInt(hex.slice(5, 7), 16),
          hex,
        }
      }
      return { r: 159, g: 232, b: 112, hex: "#9fe870" }
    }
    let accent = getAccentRgb()
    const accentRgba = (a: number) => `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${a})`

    // Re-read accent color periodically to catch theme changes
    const themeCheck = setInterval(() => { accent = getAccentRgb() }, 500)

    function animate() {
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.clearRect(0, 0, cw, ch)

      const hubC = toCanvas(hubXY)
      const glowMap = new Map<number, number>()

      // Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i]
        rip.radius += rip.speed
        if (rip.radius > rip.maxRadius) { ripples.splice(i, 1); continue }

        const ringWidth = 20
        for (let d = 0; d < dots.length; d++) {
          const p = toCanvas(dots[d])
          const dx = p.x - rip.cx, dy = p.y - rip.cy
          const dist = Math.sqrt(dx * dx + dy * dy)
          const distFromRing = Math.abs(dist - rip.radius)
          if (distFromRing < ringWidth) {
            const intensity = (1 - distFromRing / ringWidth) * (1 - rip.radius / rip.maxRadius)
            const existing = glowMap.get(d) || 0
            glowMap.set(d, Math.max(existing, intensity))
          }
        }

        const ripAlpha = 0.10 * (1 - rip.radius / rip.maxRadius)
        ctx!.beginPath()
        ctx!.arc(rip.cx, rip.cy, rip.radius, 0, Math.PI * 2)
        ctx!.strokeStyle = accentRgba(ripAlpha)
        ctx!.lineWidth = 1 * (1 - rip.radius / rip.maxRadius) + 0.5
        ctx!.stroke()
      }

      // Projectiles — fly FROM cities TO hub (Ethiopia)
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const proj = projectiles[i]
        proj.progress += proj.speed

        if (proj.progress >= 1 && !proj.landed) {
          proj.landed = true
          // Ripple at hub (arrival point)
          ripples.push({ cx: hubC.x, cy: hubC.y, radius: 0, maxRadius: 70 + Math.random() * 30, speed: 0.8 })
          ripples.push({ cx: hubC.x, cy: hubC.y, radius: 0, maxRadius: 45 + Math.random() * 20, speed: 0.5 })
        }
        if (proj.progress > 1.1) { projectiles.splice(i, 1); continue }

        if (proj.progress <= 1) {
          const t = proj.progress
          const arcHeight = -80 * Math.sin(t * Math.PI)
          // Start from origin city, end at hub
          const fx = proj.originX + (hubC.x - proj.originX) * t
          const fy = proj.originY + (hubC.y - proj.originY) * t + arcHeight

          // Trailing line from origin to current position
          const segments = 80
          ctx!.beginPath()
          for (let s = 0; s <= Math.floor(t * segments); s++) {
            const st = s / segments
            const sx = proj.originX + (hubC.x - proj.originX) * st
            const sy = proj.originY + (hubC.y - proj.originY) * st + (-80 * Math.sin(st * Math.PI))
            if (s === 0) ctx!.moveTo(sx, sy)
            else ctx!.lineTo(sx, sy)
          }
          ctx!.lineTo(fx, fy)
          const lineGrad = ctx!.createLinearGradient(proj.originX, proj.originY, fx, fy)
          lineGrad.addColorStop(0, accentRgba(0.06))
          lineGrad.addColorStop(0.3, accentRgba(0.20))
          lineGrad.addColorStop(0.7, accentRgba(0.35))
          lineGrad.addColorStop(1, accentRgba(0.55))
          ctx!.strokeStyle = lineGrad
          ctx!.lineWidth = 2.5
          ctx!.stroke()

          // Dot trail
          for (let s = 0; s < 12; s++) {
            const tt = Math.max(0, t - s * 0.008)
            const tx = proj.originX + (hubC.x - proj.originX) * tt
            const ty = proj.originY + (hubC.y - proj.originY) * tt + (-80 * Math.sin(tt * Math.PI))
            const trailR = Math.max(0.5, 3.5 - s * 0.25)
            ctx!.beginPath()
            ctx!.arc(tx, ty, trailR, 0, Math.PI * 2)
            ctx!.fillStyle = accentRgba((1 - s / 12) * 0.5)
            ctx!.fill()
          }

          // Bright head — bolder
          ctx!.beginPath(); ctx!.arc(fx, fy, 5, 0, Math.PI * 2)
          ctx!.fillStyle = accent.hex; ctx!.fill()
          ctx!.beginPath(); ctx!.arc(fx, fy, 14, 0, Math.PI * 2)
          ctx!.fillStyle = accentRgba(0.15); ctx!.fill()
        }
      }

      // Draw dots — bigger and more visible for the tilted globe
      for (let d = 0; d < dots.length; d++) {
        const p = toCanvas(dots[d])
        const glow = glowMap.get(d)

        if (glow && glow > 0.05) {
          const r = 1.8 + glow * 1.4
          ctx!.beginPath(); ctx!.arc(p.x, p.y, r + 2.5 * glow, 0, Math.PI * 2)
          ctx!.fillStyle = accentRgba(glow * 0.18); ctx!.fill()
          ctx!.beginPath(); ctx!.arc(p.x, p.y, r, 0, Math.PI * 2)
          ctx!.fillStyle = accentRgba(0.35 + glow * 0.5); ctx!.fill()
        } else {
          ctx!.beginPath(); ctx!.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
          ctx!.fillStyle = "rgba(14, 15, 12, 0.22)"; ctx!.fill()
        }
      }

      // Hub pulse — larger and more prominent
      ctx!.beginPath(); ctx!.arc(hubC.x, hubC.y, 5, 0, Math.PI * 2)
      ctx!.fillStyle = accent.hex; ctx!.fill()
      // Outer glow ring
      ctx!.beginPath(); ctx!.arc(hubC.x, hubC.y, 10, 0, Math.PI * 2)
      ctx!.fillStyle = accentRgba(0.15); ctx!.fill()
      const pulse = (Date.now() % 2500) / 2500
      ctx!.beginPath(); ctx!.arc(hubC.x, hubC.y, 5 + pulse * 20, 0, Math.PI * 2)
      ctx!.strokeStyle = accentRgba(0.40 * (1 - pulse))
      ctx!.lineWidth = 2; ctx!.stroke()

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(spawnInterval)
      clearInterval(themeCheck)
      window.removeEventListener("resize", resize)
    }
  }, [dots, bounds, hubXY, destXYs])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
