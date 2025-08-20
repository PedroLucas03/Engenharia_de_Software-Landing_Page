"use client"

import type React from "react"

import { X, GripVertical } from "lucide-react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function DesktopWindow({
  appKey = "about",
  title = "Window",
  children,
  zIndex = 100,
  onClose = () => {},
  onFocus = () => {},
}: {
  appKey?: string
  title?: string
  children?: React.ReactNode
  zIndex?: number
  onClose?: () => void
  onFocus?: () => void
}) {
  const winRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const pos = useRef<{ x: number; y: number }>({ x: 120, y: 100 })
  const grabbing = useRef(false)
  const start = useRef<{ x: number; y: number; sx: number; sy: number }>({ x: 0, y: 0, sx: 0, sy: 0 })
  const rafRef = useRef<number | null>(null)

  // initial offset based on appKey
  useEffect(() => {
    const updatePosition = () => {
      const isMobile = window.innerWidth < 768
      
      if (isMobile) {
        // Para mobile, centralize as janelas abaixo dos olhos com pequenos offsets
        const windowWidth = Math.min(window.innerWidth * 0.95, 1000) // largura da janela
        const centerX = (window.innerWidth - windowWidth) / 2
        const baseY = window.innerHeight * 0.17 // Posição base a 17% da altura da tela (mais para cima)
        
        // Pequenos offsets para evitar sobreposição total
        const mobileOffsets: Record<string, { x: number; y: number }> = {
          about: { x: centerX, y: baseY },
          art: { x: centerX + 10, y: baseY + 20 },
          philosophy: { x: centerX - 10, y: baseY + 40 },
          resume: { x: centerX + 5, y: baseY + 60 },
        }
        
        const offset = mobileOffsets[appKey] ?? { x: centerX, y: baseY }
        pos.current = { x: Math.max(10, offset.x), y: Math.max(50, offset.y) }
      } else {
        // Para desktop, use os offsets originais
        const offsets: Record<string, { x: number; y: number }> = {
          about: { x: 80, y: 80 },
          art: { x: 160, y: 120 },
          philosophy: { x: 260, y: 140 },
          resume: { x: 200, y: 160 },
        }
        const off = offsets[appKey] ?? { x: 120, y: 120 }
        pos.current = off
      }
      applyTransform()
    }

    updatePosition()
    
    // Listener para redimensionamento da janela
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [appKey])

  const applyTransform = () => {
    if (!winRef.current) return
    const { x, y } = pos.current
    winRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const onPointerDown = (e: PointerEvent) => {
      grabbing.current = true
      onFocus()
      start.current = { x: e.clientX, y: e.clientY, sx: pos.current.x, sy: pos.current.y }
      ;(e.target as Element).setPointerCapture(e.pointerId)
    }
    const onPointerMove = (e: PointerEvent) => {
      if (!grabbing.current) return
      const dx = e.clientX - start.current.x
      const dy = e.clientY - start.current.y
      pos.current.x = start.current.sx + dx
      pos.current.y = start.current.sy + dy
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(applyTransform)
    }
    const onPointerUp = (e: PointerEvent) => {
      grabbing.current = false
      try {
        ;(e.target as Element).releasePointerCapture(e.pointerId)
      } catch {}
    }

    el.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)

    return () => {
      el.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onFocus])

  return (
    <div
      ref={winRef}
      className="absolute top-0 left-0 w-[min(95vw,1000px)] md:w-[800px] max-w-[95vw]"
      style={{ zIndex }}
      onMouseDown={onFocus}
    >
      <div className="border-[3px] border-black bg-black shadow-[10px_10px_0_0_#000] rounded-md overflow-hidden">
        <header
          ref={headerRef}
          className={cn("h-12 px-4 flex items-center justify-between select-none touch-none bg-white", {
            "cursor-grab": !grabbing.current,
            "cursor-grabbing": grabbing.current,
          })}
        >
          <div className="flex items-center gap-2">
            <GripVertical className="w-5 h-5" aria-hidden="true" />
            <div className="font-black text-xl">{title}</div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 grid place-items-center border-[3px] border-black rounded-md bg-white hover:translate-y-[-1px] transition-transform"
            aria-label={`Close ${title}`}
          >
            <X className="w-4 h-4" />
          </button>
        </header>
        <div className="max-h-[70vh] md:max-h-[65vh] overflow-auto bg-black text-white">{children}</div>
      </div>
    </div>
  )
}
