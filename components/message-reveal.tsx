"use client"

import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MessageReveal() {
  return (
    <Card className="p-8 bg-primary/10 border-2 border-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-primary animate-sparkle" />
          <h2 className="text-3xl font-bold text-primary">Messaggio Segreto Sbloccato!</h2>
          <Sparkles className="w-8 h-8 text-primary animate-sparkle" style={{ animationDelay: "0.5s" }} />
        </div>

        <div className="space-y-4 max-w-2xl">
          <p className="text-xl leading-relaxed text-foreground">
            In questa notte di Halloween, voglio dirti che sei la persona più speciale della mia vita.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Non servono fantasmi o streghe per farmi paura... l'unica cosa che mi spaventa è l'idea di non averti
            accanto. Sei la mia zucca preferita, il mio dolcetto più dolce, e la magia più bella che potessi desiderare!
          </p>
          <div className="pt-4">
            <Link href="/sorpresa">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Sparkles className="w-5 h-5 mr-2" />
                Cliccami, ho una sorpresa!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}
