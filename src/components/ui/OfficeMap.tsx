import { useEffect, useRef, useMemo } from "react"
import DottedMap from "dotted-map/without-countries"
import mapJson from "@/data/world-map.json"

// Bethlehem Plaza, Addis Ababa
const HUB = { lat: 9.0, lng: 38.7 }

function pinToXY(lat: number, lng: number) {
  const map = new DottedMap({ map: JSON.parse(JSON.stringify(mapJson)) })
  map.addPin({ lat, lng, svgOptions: { color: "#fff", radius: 0.01 } })
  const points = map.getPoints() as { x: number; y: number }[]
  return points[points.length - 1]
}

export function OfficeMap() {
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

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container || dots.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let cw = 0, ch = 0

    // Zoom into Africa/Middle East region
    const zoomCenterX = (hubXY.x - bounds.minX) / bounds.w
    const zoomCenterY = (hubXY.y - bounds.minY) / bounds.h
    const zoomLevel = 1.8

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
      const normX = (pt.x - bounds.minX) / bounds.w
      const normY = (pt.y - bounds.minY) / bounds.h
      const zoomedX = (normX - zoomCenterX) * zoomLevel + 0.5
      const zoomedY = (normY - zoomCenterY) * zoomLevel + 0.5
      return { x: zoomedX * cw, y: zoomedY * ch }
    }

    function getAccentHex(): string {
      return getComputedStyle(document.documentElement).getPropertyValue("--color-wise-green").trim() || "#9fe870"
    }

    function hexToRgb(hex: string) {
      if (hex.startsWith("#") && hex.length >= 7) {
        return { r: parseInt(hex.slice(1, 3), 16), g: parseInt(hex.slice(3, 5), 16), b: parseInt(hex.slice(5, 7), 16) }
      }
      return { r: 159, g: 232, b: 112 }
    }

    let accentHex = getAccentHex()
    let accent = hexToRgb(accentHex)
    const themeCheck = setInterval(() => {
      accentHex = getAccentHex()
      accent = hexToRgb(accentHex)
    }, 500)

    const rgba = (a: number) => `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${a})`

    function animate() {
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.clearRect(0, 0, cw, ch)

      const hubC = toCanvas(hubXY)

      // Draw dots
      for (let d = 0; d < dots.length; d++) {
        const p = toCanvas(dots[d])
        if (p.x < -10 || p.x > cw + 10 || p.y < -10 || p.y > ch + 10) continue
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx!.fillStyle = "rgba(14, 15, 12, 0.15)"
        ctx!.fill()
      }

      // Hub — larger with glow
      ctx!.beginPath(); ctx!.arc(hubC.x, hubC.y, 18, 0, Math.PI * 2)
      ctx!.fillStyle = rgba(0.08); ctx!.fill()

      ctx!.beginPath(); ctx!.arc(hubC.x, hubC.y, 7, 0, Math.PI * 2)
      ctx!.fillStyle = accentHex; ctx!.fill()

      // Pulse rings
      const t1 = (Date.now() % 2500) / 2500
      ctx!.beginPath(); ctx!.arc(hubC.x, hubC.y, 7 + t1 * 30, 0, Math.PI * 2)
      ctx!.strokeStyle = rgba(0.35 * (1 - t1))
      ctx!.lineWidth = 2; ctx!.stroke()

      const t2 = ((Date.now() + 1200) % 2500) / 2500
      ctx!.beginPath(); ctx!.arc(hubC.x, hubC.y, 7 + t2 * 25, 0, Math.PI * 2)
      ctx!.strokeStyle = rgba(0.2 * (1 - t2))
      ctx!.lineWidth = 1.5; ctx!.stroke()

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(themeCheck)
      window.removeEventListener("resize", resize)
    }
  }, [dots, bounds, hubXY])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
