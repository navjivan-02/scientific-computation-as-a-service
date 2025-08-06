import { Heart, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">SCaaS</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A personal project by <strong>Navjivan Kumar Mehta</strong>{" "}
              exploring mathematical computation through modern web
              technologies. Built for learning and demonstration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/navjivan-02"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <div
                className="p-2 rounded-lg opacity-50 cursor-not-allowed"
                aria-label="Twitter (Coming Soon)"
              >
                <Twitter className="h-4 w-4 text-muted-foreground" />
              </div>
              <a
                href="https://www.linkedin.com/in/navjivan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              Technical Stack
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="hover:text-primary transition-colors">
                  React + TypeScript
                </span>
              </li>
              <li>
                <span className="hover:text-primary transition-colors">
                  Express.js Proxy
                </span>
              </li>
              <li>
                <span className="hover:text-primary transition-colors">
                  Python + SymPy
                </span>
              </li>
              <li>
                <span className="hover:text-primary transition-colors">
                  Google Cloud Run
                </span>
              </li>
            </ul>
          </div>

          {/* Project Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Project</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="/docs"
                  className="hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a href="/api" className="hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/navjivan-02/scientific-computation-as-a-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  View Source Code
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About This Project
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="https://navjivan-mehta.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/navjivan-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:navjivan2005@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>
                Built by{" "}
                <strong className="text-primary">Navjivan Kumar Mehta</strong>{" "}
                for learning and exploration
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a
                href="https://github.com/navjivan-02/scientific-computation-as-a-service"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                View Source Code
              </a>
              <span>© {currentYear} Personal Project</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
