"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

function splitIntoChars(el: HTMLElement): HTMLSpanElement[] {
  const chars: HTMLSpanElement[] = []

  if (!el.dataset.originalHtml) {
    el.dataset.originalHtml = el.innerHTML
  } else {
    el.innerHTML = el.dataset.originalHtml
  }

  function processTextNode(text: string, parent: Node) {
    const words = text.split(/(\s+)/)
    for (const segment of words) {
      if (!segment) continue
      if (/^\s+$/.test(segment)) {
        parent.appendChild(document.createTextNode(" "))
      } else {
        const wordWrap = document.createElement("span")
        wordWrap.style.display = "inline-block"
        wordWrap.style.overflow = "hidden"
        wordWrap.style.verticalAlign = "top"
        wordWrap.style.paddingTop = "0.15em"
        wordWrap.style.paddingBottom = "0.15em"
        wordWrap.style.marginTop = "-0.15em"
        wordWrap.style.marginBottom = "-0.15em"

        for (const char of segment) {
          const charSpan = document.createElement("span")
          charSpan.textContent = char
          charSpan.style.display = "inline-block"
          charSpan.style.willChange = "transform"
          charSpan.style.transform = "translateY(120%)"
          wordWrap.appendChild(charSpan)
          chars.push(charSpan)
        }
        parent.appendChild(wordWrap)
      }
    }
  }

  const fragment = document.createDocumentFragment()
  const childNodes = Array.from(el.childNodes)

  for (const node of childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      processTextNode(node.textContent || "", fragment)
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const origEl = node as HTMLElement
      if (origEl.tagName === "BR") {
        fragment.appendChild(origEl.cloneNode(false))
      } else {
        const innerText = origEl.textContent || ""
        const words = innerText.split(/(\s+)/)

        for (const seg of words) {
          if (!seg) continue
          if (/^\s+$/.test(seg)) {
            fragment.appendChild(document.createTextNode(" "))
          } else {
            const wrapper = origEl.cloneNode(false) as HTMLElement
            wrapper.style.display = "inline-block"
            wrapper.style.overflow = "hidden"
            wrapper.style.verticalAlign = "top"
            wrapper.style.paddingTop = "0.15em"
            wrapper.style.paddingBottom = "0.15em"
            wrapper.style.paddingRight = "0.08em"
            wrapper.style.paddingLeft = "0.03em"
            wrapper.style.marginTop = "-0.15em"
            wrapper.style.marginBottom = "-0.15em"
            wrapper.style.marginRight = "-0.08em"
            wrapper.style.marginLeft = "-0.03em"
            wrapper.style.whiteSpace = "normal"

            for (const char of seg) {
              const charSpan = document.createElement("span")
              charSpan.textContent = char
              charSpan.style.display = "inline-block"
              charSpan.style.willChange = "transform"
              charSpan.style.transform = "translateY(120%)"
              wrapper.appendChild(charSpan)
              chars.push(charSpan)
            }
            fragment.appendChild(wrapper)
          }
        }
      }
    }
  }

  el.innerHTML = ""
  el.appendChild(fragment)
  return chars
}

/**
 * Hook that animates text character-by-character on mount.
 * Returns a ref to attach to the heading element.
 * The element should have className="invisible" initially.
 */
export function useTextReveal(delay = 0.15) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const chars = splitIntoChars(ref.current)
    ref.current.classList.remove("invisible")
    const tl = gsap.timeline({ delay })
    tl.to(chars, { y: "0%", duration: 0.5, ease: "power3.out", stagger: 0.014 })
    return () => { tl.kill() }
  }, [delay])

  return ref
}
