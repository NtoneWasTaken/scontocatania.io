"use client"

import type React from "react"

import { useState } from "react"
import { Ghost } from "lucide-react"
import { Card } from "@/components/ui/card"

interface InteractiveGhostProps {
  onInteract: () => void
}

export function InteractiveGhost({ onInteract }: InteractiveGhostProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    setPosition({ x, y })
  }

  const handleClick = () => {
    onInteract()
  }

  return (
    <Card
      className="p-12 flex flex-col items-center justify-center gap-6 cursor-pointer hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setPosition({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered ? 1.2 : 1})`,
        }}
      >
        <Ghost className="w-24 h-24 text-primary animate-pulse-glow" />
      </div>

      <p className="text-center text-lg text-muted-foreground">
        {isHovered ? "👻 Cliccami! Ho un segreto per te..." : "🎃 Passa il mouse sul fantasmino!"}
      </p>
    </Card>
  )
}
