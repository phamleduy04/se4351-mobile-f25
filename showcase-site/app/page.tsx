import { Navigation } from "@/components/navigation"
import { PDFViewer } from "@/components/pdf-viewer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Volume2, Smartphone, Presentation, FileText, Layers, HelpCircle, BookMarked, ExternalLink } from "lucide-react"
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

      {/* Additional Documentation Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Additional Documentation</h2>
            <p className="text-xl text-muted-foreground">
              Access our comprehensive project specifications and reports on GitHub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Interim Report */}
            <a
              href="https://github.com/phamleduy04/se4351-mobile-f25/blob/main/docs/Project%202/Interim%20Report.md"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:shadow-lg"
            >
              <Card className="h-full hover:border-accent/50 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    Interim Report
                    <ExternalLink className="h-4 w-4 opacity-60" />
                  </CardTitle>
                  <CardDescription>
                    Phase II progress report with team achievements, metrics, and timeline projections
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>

            {/* Process Specification */}
            <a
              href="https://github.com/phamleduy04/se4351-mobile-f25/blob/main/docs/Project%202/Process%20Specification.md"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:shadow-lg"
            >
              <Card className="h-full hover:border-accent/50 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    Process Specification
                    <ExternalLink className="h-4 w-4 opacity-60" />
                  </CardTitle>
                  <CardDescription>
                    IDEF0 models and detailed process specifications for system implementation
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>

            {/* Questionnaire 2 */}
            <a
              href="https://github.com/phamleduy04/se4351-mobile-f25/blob/main/docs/Project%202/Questionnaire%202.md"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:shadow-lg"
            >
              <Card className="h-full hover:border-accent/50 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <HelpCircle className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    Questionnaire II
                    <ExternalLink className="h-4 w-4 opacity-60" />
                  </CardTitle>
                  <CardDescription>
                    User feedback survey and validation results for system requirements
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>

            {/* WRS Project 2 */}
            <a
              href="https://github.com/phamleduy04/se4351-mobile-f25/blob/main/docs/Project%202/WRS%20Project%202.md"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:shadow-lg"
            >
              <Card className="h-full hover:border-accent/50 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <BookMarked className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    WRS Project 2
                    <ExternalLink className="h-4 w-4 opacity-60" />
                  </CardTitle>
                  <CardDescription>
                    World, Requirements, and Specification document with formal requirement definitions
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
          </div>
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

          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Everywhere Locator Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
