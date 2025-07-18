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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">IQVest</div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-3 py-2"
                aria-label="Navigate to Features section"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-3 py-2"
                aria-label="Navigate to Reviews section"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-3 py-2"
                aria-label="Navigate to Pricing section"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-3 py-2"
                aria-label="Navigate to FAQ section"
              >
                FAQ
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
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
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 pt-4 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("features")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
            >
              FAQ
            </button>
            <div className="pt-4 border-t border-white/10">
              <Button
                variant="ghost"
                className="w-full justify-start text-muted-foreground hover:text-foreground mb-2"
              >
                Login
              </Button>
              <Button className="btn-modern w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
