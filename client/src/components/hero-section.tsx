import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play } from "lucide-react";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
          <div className="text-primary font-semibold text-lg mb-4 tracking-wide">
            BE 2 STEPS AHEAD WITH
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">IQVEST AI</span><br />
            <span className="text-foreground">INDICATORS</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            IQVest empowers you with exclusive indicators, risk metrics, and AI-driven insights to stay ahead of the crypto market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Early Access
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card px-8 py-4 rounded-xl text-white font-semibold text-lg hover:bg-white/10 border-white/20"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Hero Dashboard Mockup */}
        <div className={`reveal ${isVisible ? 'active' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="IQVest AI Trading Dashboard"
              className="rounded-2xl shadow-2xl mx-auto animate-glow max-w-full h-auto"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
