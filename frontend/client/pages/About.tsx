import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">SCaaS</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A personal project exploring the intersection of cloud computing, mathematics,
                and modern web technologies. Built by <span className="text-primary font-semibold">Navjivan Kumar Mehta</span> as
                a learning initiative and technical showcase.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Learning Goal</h3>
                <p className="text-muted-foreground">
                  To explore full-stack development by building a real mathematical
                  computation platform from scratch using modern technologies.
                </p>
              </div>

              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Technical Stack</h3>
                <p className="text-muted-foreground">
                  React + TypeScript frontend, Express.js proxy, Google Cloud Run backend
                  with Python SymPy for mathematical computation.
                </p>
              </div>

              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Open Source</h3>
                <p className="text-muted-foreground">
                  Built for learning and sharing. Explore the code, contribute ideas,
                  or use it as inspiration for your own projects.
                </p>
              </div>
            </div>

            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">The Story Behind This Project</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground mb-4">
                  <strong>This project, <em>Scientific Computation as a Service (SCaaS)</em>, was developed by
                  Navjivan Kumar Mehta</strong> as a personal initiative to combine cloud computing, mathematics,
                  and modern web technologies. Built out of curiosity and a drive to solve real-world problems,
                  SCaaS is a personal initiative to explore symbolic mathematics and computation via modern APIs.
                </p>
                <p className="text-muted-foreground mb-4">
                  The goal was to create a fully functional mathematical computation platform that demonstrates
                  full-stack development skills — from responsive React frontends to cloud-deployed Python backends.
                  This project showcases API design, cloud deployment, mathematical computing, and modern UI/UX principles.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Technical Highlights:</strong> The platform features a React + TypeScript frontend with
                  TailwindCSS, an Express.js proxy server, and a Python SymPy backend deployed on Google Cloud Run.
                  It handles mathematical operations including evaluation, simplification, factoring, differentiation,
                  and integration.
                </p>
                <p className="text-muted-foreground">
                  This is an educational project built to explore, learn, and demonstrate technical capabilities.
                  Feel free to explore the code, test the functionality, or use it as inspiration for your own projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
