import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Book, Code, ExternalLink, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Docs() {
  const docSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of using SCaaS for mathematical computation",
      icon: Book,
      articles: [
        "Quick Start Guide",
        "Understanding Expressions",
        "Variable Assignment",
        "Operation Types"
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation for developers",
      icon: Code,
      articles: [
        "Authentication",
        "REST Endpoints",
        "WebSocket API",
        "Rate Limiting"
      ]
    },
    {
      title: "Mathematical Functions",
      description: "Comprehensive guide to supported mathematical operations",
      icon: ExternalLink,
      articles: [
        "Algebraic Operations",
        "Calculus Functions",
        "Trigonometry",
        "Advanced Functions"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Documentation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Everything you need to know about using SCaaS for scientific computation
              </p>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8 italic">
                This documentation is maintained by <strong>Navjivan Kumar Mehta</strong>.
                The project is open-source and built for educational purposes.
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search documentation..." 
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Documentation Sections */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {docSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card key={index} className="glass hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {section.description}
                      </p>
                      <ul className="space-y-2">
                        {section.articles.map((article, articleIndex) => (
                          <li key={articleIndex}>
                            <a 
                              href="#" 
                              className="text-sm text-primary hover:text-primary-foreground hover:bg-primary px-2 py-1 rounded transition-colors inline-block"
                            >
                              {article}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Popular Articles */}
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <a href="#" className="block p-4 bg-muted/50 rounded-lg hover:bg-accent transition-colors">
                    <h3 className="font-semibold mb-2">Mathematical Expression Syntax</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn how to write mathematical expressions that SCaaS can understand and compute.
                    </p>
                  </a>
                  <a href="#" className="block p-4 bg-muted/50 rounded-lg hover:bg-accent transition-colors">
                    <h3 className="font-semibold mb-2">Symbolic vs Numerical Computation</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand the difference between symbolic and numerical computation methods.
                    </p>
                  </a>
                  <a href="#" className="block p-4 bg-muted/50 rounded-lg hover:bg-accent transition-colors">
                    <h3 className="font-semibold mb-2">Integration with Research Workflows</h3>
                    <p className="text-sm text-muted-foreground">
                      Best practices for integrating SCaaS into your research and development workflow.
                    </p>
                  </a>
                </div>
                <div className="space-y-4">
                  <a href="#" className="block p-4 bg-muted/50 rounded-lg hover:bg-accent transition-colors">
                    <h3 className="font-semibold mb-2">Advanced Calculus Operations</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed guide to performing complex calculus operations including multivariable calculus.
                    </p>
                  </a>
                  <a href="#" className="block p-4 bg-muted/50 rounded-lg hover:bg-accent transition-colors">
                    <h3 className="font-semibold mb-2">Error Handling and Debugging</h3>
                    <p className="text-sm text-muted-foreground">
                      Common errors and how to troubleshoot computation problems effectively.
                    </p>
                  </a>
                  <a href="#" className="block p-4 bg-muted/50 rounded-lg hover:bg-accent transition-colors">
                    <h3 className="font-semibold mb-2">Performance Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Tips and techniques for optimizing computation performance for large-scale problems.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
