"use client"

import { Card } from "@/components/ui/card"
import { Heart, Sparkles, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SorpresaPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-primary/10 animate-float">
          <Heart className="w-20 h-20" />
        </div>
        <div className="absolute top-40 right-20 text-secondary/10 animate-float" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-accent/10 animate-float" style={{ animationDelay: "2s" }}>
          <Heart className="w-24 h-24" />
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Torna indietro
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-top duration-700">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-10 h-10 text-primary animate-sparkle" />
              <h1 className="text-4xl md:text-6xl font-bold text-primary">La Tua Sorpresa!</h1>
              <Sparkles className="w-10 h-10 text-primary animate-sparkle" style={{ animationDelay: "0.5s" }} />
            </div>
            <p className="text-xl text-muted-foreground">Qualcosa di speciale solo per te</p>
          </div>

          {/* Information Cards - Qui puoi inserire le tue informazioni */}
          <div className="space-y-6">
            {/* Card 1 - Modifica il contenuto qui */}
            <Card className="p-8 bg-card border-2 border-primary/20 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Titolo 1</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Inserisci qui la tua prima informazione speciale. Può essere un ricordo, una dedica, o qualsiasi cosa
                  tu voglia condividere con lei.
                </p>
              </div>
            </Card>

            {/* Card 2 - Modifica il contenuto qui */}
            <Card className="p-8 bg-card border-2 border-secondary/20 animate-in fade-in slide-in-from-right duration-700 delay-150">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Titolo 2</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Inserisci qui la tua seconda informazione. Potrebbe essere un momento speciale che avete vissuto
                  insieme, o qualcosa che ami di lei.
                </p>
              </div>
            </Card>

            {/* Card 3 - Modifica il contenuto qui */}
            <Card className="p-8 bg-card border-2 border-accent/20 animate-in fade-in slide-in-from-left duration-700 delay-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Titolo 3</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Inserisci qui la tua terza informazione. Può essere una promessa, un sogno per il futuro, o un
                  messaggio d'amore.
                </p>
              </div>
            </Card>

            {/* Card 4 - Modifica il contenuto qui */}
            <Card className="p-8 bg-card border-2 border-primary/20 animate-in fade-in slide-in-from-right duration-700 delay-500">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Titolo 4</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Inserisci qui la tua quarta informazione. Aggiungi tutto ciò che vuoi farle sapere in questo momento
                  speciale.
                </p>
              </div>
            </Card>

            {/* Final Message Card */}
            <Card className="p-10 bg-primary/10 border-2 border-primary text-center animate-in fade-in zoom-in duration-700 delay-700">
              <div className="space-y-4">
                <Heart className="w-16 h-16 text-primary mx-auto animate-pulse-glow" />
                <h2 className="text-3xl font-bold text-primary">Messaggio Finale</h2>
                <p className="text-xl leading-relaxed text-foreground max-w-2xl mx-auto">
                  Inserisci qui il tuo messaggio finale. Qualcosa di speciale che vuoi dirle per concludere questa
                  sorpresa di Halloween.
                </p>
                <p className="text-2xl font-bold text-primary pt-4">Ti amo!</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
