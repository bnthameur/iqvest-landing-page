import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="glass-card rounded-2xl border border-white/10 backdrop-blur-lg">
        <div className="flex justify-between items-center h-16 px-6">
          <div className="flex items-center space-x-3">
            <img
              src="/attached_assets/0x0_1752875573881.png"
              alt="IQVest Logo"
              className="w-8 h-8"
              width="32"
              height="32"
            />
            <div className="text-2xl font-bold gradient-text">IQVest</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8" role="navigation" aria-label="Main navigation">
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
                aria-label="Navigate to Features section"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
                aria-label="Navigate to Reviews section"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
                aria-label="Navigate to Pricing section"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
                aria-label="Navigate to FAQ section"
              >
                FAQ
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Login
            </Button>
            <Button className="btn-modern px-6 py-2 rounded-xl text-white font-semibold">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/10 mt-2 rounded-2xl">
          <div className="px-4 pt-4 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("features")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              FAQ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
