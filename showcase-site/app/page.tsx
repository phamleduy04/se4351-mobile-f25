import { Navigation } from "@/components/navigation"
import { PDFViewer } from "@/components/pdf-viewer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Camera, Volume2, Smartphone, Presentation, Shield } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Mobile Application
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">Everywhere Locator</h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  A mobile application designed to assist visually impaired individuals with indoor navigation. Identify
                  and locate common indoor objects using your smartphone's camera with voice commands and audio
                  feedback.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Download App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Learn More
                </Button>
              </div> */}
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 border border-border overflow-hidden">
                <Image
                  src="/modern-product-showcase-dashboard-interface.png"
                  alt="Everywhere Locator App Interface"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering visually impaired individuals with innovative technology for safer indoor navigation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Voice Commands</CardTitle>
                <CardDescription>
                  Simply state your desired object via voice command and let the app guide you
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Object Recognition</CardTitle>
                <CardDescription>
                  Advanced camera integration with LLM technology for accurate object identification
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Cross-Platform</CardTitle>
                <CardDescription>Built with React Native for both iOS and Android devices</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button disabled size="lg" className="opacity-50 cursor-not-allowed">
              <Presentation className="mr-2 h-5 w-5" />
              View Project Presentation (Coming Soon)
            </Button>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Project Documentation</h2>
            <p className="text-xl text-muted-foreground">
              View our comprehensive Software Project Management Plan and technical specifications
            </p>
          </div>

          <PDFViewer />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Everywhere Locator</h3>
              <p className="text-primary-foreground/80">
                Empowering visually impaired individuals with innovative indoor navigation technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    About Project
                  </a>
                </li>
                <li>
                  <a href="/team" className="hover:text-primary-foreground transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Everywhere Locator Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
