"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Heart, Ghost, Sparkles, Moon, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FloatingHearts } from "@/components/floating-hearts"
import { InteractiveGhost } from "@/components/interactive-ghost"
import { MessageReveal } from "@/components/message-reveal"

export default function HalloweenLovePage() {
  const [showMessage, setShowMessage] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([])

  const handleClick = (e: React.MouseEvent) => {
    const newSparkle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    }
    setSparkles((prev) => [...prev, newSparkle])
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id))
    }, 1500)
  }

  useEffect(() => {
    if (clickCount >= 3) {
      console.log("[v0] Showing secret message after", clickCount, "clicks")
      setShowMessage(true)
    }
  }, [clickCount])

  const handleGhostClick = () => {
    const newCount = clickCount + 1
    console.log("[v0] Ghost clicked! Count:", newCount)
    setClickCount(newCount)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden" onClick={handleClick}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-primary/20 animate-float">
          <Moon className="w-16 h-16" />
        </div>
        <div className="absolute top-20 right-20 text-secondary/20 animate-float" style={{ animationDelay: "1s" }}>
          <Star className="w-12 h-12" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-accent/20 animate-float" style={{ animationDelay: "2s" }}>
          <Star className="w-10 h-10" />
        </div>
      </div>

      {/* Sparkles on click */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none animate-sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
      ))}

      <FloatingHearts />

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 text-primary animate-pulse-glow">
              <Ghost className="w-12 h-12" />
              <Heart className="w-16 h-16" />
              <Ghost className="w-12 h-12" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Un Halloween
              <span className="text-primary"> Speciale</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
              Per una persona ancora più speciale 🎃
            </p>
          </div>

          {/* Interactive Ghost */}
          <InteractiveGhost onInteract={handleGhostClick} />

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4 hover:scale-105 transition-transform duration-300 bg-card border-2 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-primary/20">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">Dolcetto o Scherzetto?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Con te ogni giorno è un dolcetto. Sei la caramella più dolce che potessi trovare in questa notte di
                Halloween! 🍬
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:scale-105 transition-transform duration-300 bg-card border-2 border-secondary/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-secondary/20">
                  <Ghost className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">Stregata da Te</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Non serve nessuna pozione magica... mi hai già stregato con il tuo sorriso! ✨
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:scale-105 transition-transform duration-300 bg-card border-2 border-accent/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-accent/20">
                  <Moon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">Luna Piena</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Come la luna piena illumina la notte, tu illumini le mie giornate. Sei la mia luce! 🌕
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:scale-105 transition-transform duration-300 bg-card border-2 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-primary/20">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">Magia Pura</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Quello che proviamo è la magia più vera che esista. Più forte di qualsiasi incantesimo! 💫
              </p>
            </Card>
          </div>

          {/* Secret Message */}
          {showMessage && <MessageReveal />}

          {/* Call to Action */}
          <div className="text-center space-y-6 pt-8">
            <p className="text-lg text-muted-foreground">
              {clickCount < 3
                ? `Clicca sul fantasmino sopra per scoprire un messaggio speciale... (${clickCount}/3)`
                : "🎃 Hai scoperto il messaggio segreto! Clicca sul pulsante qui sotto! 🎃"}
            </p>

            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation()
                alert("Ti amo! 🎃❤️👻")
              }}
            >
              <Heart className="w-5 h-5 mr-2" />
              Clicca qui per un bacio virtuale
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-muted-foreground">
        <p className="text-sm">Fatto con ❤️ e un pizzico di magia di Halloween ✨</p>
      </footer>
    </div>
  )
}
