import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Hero Dashboard with Parallax */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="IQVest AI Trading Dashboard"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
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
          <div className="flex flex-col items-center gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="btn-modern px-8 py-4 rounded-xl text-white font-semibold text-lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Early Access
            </Button>
            {/* Trustpilot Stars */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <svg className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">4.9/5 from 74 reviews</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
