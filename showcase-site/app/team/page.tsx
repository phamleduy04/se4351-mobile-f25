import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const teamMembers = [
  {
    name: "Duy Pham",
    role: "PM/PO",
    image: "/placeholder-user.jpg",
    responsibilities: "Defines project vision, manages backlog, leads meetings, removes impediments.",
  },
  {
    name: "Victor Sim",
    role: "Vision & Nav Lead",
    image: "/placeholder-user.jpg",
    responsibilities: "Leads camera and LLM integration, oversees navigation algorithm.",
  },
  {
    name: "Chase Uherek",
    role: "Core Experience Lead",
    image: "/placeholder-user.jpg",
    responsibilities: "Leads UI/UX development, ensures accessibility standards are met.",
  },
  {
    name: "Nathan Boyle",
    role: "Developer",
    image: "/placeholder-user.jpg",
    responsibilities: "Core Experience Team - UI/UX implementation.",
  },
  {
    name: "Viet-Long Nguyen",
    role: "Developer",
    image: "/placeholder-user.jpg",
    responsibilities: "Core Experience Team - Voice processing.",
  },
  {
    name: "Alberto Escobar",
    role: "Developer",
    image: "/placeholder-user.jpg",
    responsibilities: "Core Experience Team - Audio feedback system.",
  },
  {
    name: "Kim Chau",
    role: "Developer",
    image: "/placeholder-user.jpg",
    responsibilities: "Vision & Nav Team - Camera API integration.",
  },
  {
    name: "Shreyaa Arun",
    role: "Developer",
    image: "/placeholder-user.jpg",
    responsibilities: "Vision & Nav Team - LLM API integration.",
  },
  {
    name: "Onkar Sandhu",
    role: "Developer",
    image: "/placeholder-user.jpg",
    responsibilities: "Vision & Nav Team - Navigation logic.",
  },
  {
    name: "Kutsal Aksu",
    role: "QA / Testing",
    image: "/placeholder-user.jpg",
    responsibilities: "Responsible for testing across both teams, manages bug reports.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Our Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Meet the People Behind the Product</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            We're a diverse team of passionate individuals dedicated to creating innovative solutions that make a
            difference in how teams work together.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-muted">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground font-medium">{member.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ProductName</h3>
              <p className="text-primary-foreground/80">
                Revolutionizing the way teams work together with innovative solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="/" className="hover:text-primary-foreground transition-colors">
                    Product
                  </a>
                </li>
                <li>
                  <a href="/team" className="hover:text-primary-foreground transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-primary-foreground/80">
                Email: test@test.com
                <br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Everywhere Locator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
