import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Code2, Brain, Layers, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Api() {
  const capabilities = [
    {
      title: "Mathematical Operations",
      description:
        "Evaluate, simplify, factor, expand mathematical expressions",
      features: [
        "Symbolic computation",
        "Numerical evaluation",
        "Variable substitution",
      ],
    },
    {
      title: "Calculus Functions",
      description: "Differentiation and integration operations",
      features: [
        "Derivative calculation",
        "Integral computation",
        "Step-by-step solutions",
      ],
    },
    {
      title: "Expression Parsing",
      description: "Advanced mathematical expression understanding",
      features: [
        "Python syntax support",
        "Error validation",
        "Multiple variable handling",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Technical Overview</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Behind-the-scenes look at the mathematical computation engine.
                Built with Python SymPy and deployed on Google Cloud Run.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-accent/50 rounded-lg text-sm">
                <span className="text-muted-foreground">
                  🔒 API access is available exclusively through this website
                  interface
                </span>
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">
                  React + TypeScript with responsive TailwindCSS design
                </p>
              </div>

              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Proxy Layer</h3>
                <p className="text-sm text-muted-foreground">
                  Express.js server handling routing and CORS protection
                </p>
              </div>

              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Computation</h3>
                <p className="text-sm text-muted-foreground">
                  Python SymPy engine for symbolic mathematics
                </p>
              </div>

              <div className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Cloud Deploy</h3>
                <p className="text-sm text-muted-foreground">
                  Google Cloud Run with automatic scaling
                </p>
              </div>
            </div>

            {/* Capabilities */}
            <Card className="glass mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Computation Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-lg font-semibold">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {capability.description}
                      </p>
                      <ul className="space-y-1">
                        {capability.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="glass mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Expression Input</h3>
                      <p className="text-muted-foreground text-sm">
                        Users enter mathematical expressions using Python syntax
                        (e.g., x**2 + 2*x + 1) through the web interface
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Processing Pipeline
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        The Express.js proxy validates input and forwards
                        requests to the cloud-deployed Python backend for
                        computation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">SymPy Computation</h3>
                      <p className="text-muted-foreground text-sm">
                        The backend uses SymPy library to perform symbolic
                        mathematics, returning both symbolic and numerical
                        results
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Result Display</h3>
                      <p className="text-muted-foreground text-sm">
                        Results are formatted and displayed with step-by-step
                        solutions, execution time, and copy functionality
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Stack */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Frontend Technologies
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">React 18 + TypeScript</span>
                        <Badge variant="outline">Framework</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">TailwindCSS + Radix UI</span>
                        <Badge variant="outline">Styling</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Vite + SWC</span>
                        <Badge variant="outline">Build Tool</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">React Router 6</span>
                        <Badge variant="outline">Routing</Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Backend Technologies
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Python + SymPy</span>
                        <Badge variant="outline">Computation</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Express.js Proxy</span>
                        <Badge variant="outline">API Layer</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Google Cloud Run</span>
                        <Badge variant="outline">Deployment</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">RESTful Architecture</span>
                        <Badge variant="outline">Design</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage Note */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-sm text-muted-foreground">
                  💡 <strong>Want to try it?</strong> Use the computation form
                  on the homepage to experience the API in action
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
