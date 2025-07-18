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
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">IQVest</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
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
            <Button className="btn-gradient px-6 py-2 rounded-xl text-white font-semibold">
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
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
