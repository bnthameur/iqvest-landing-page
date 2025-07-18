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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16">
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''} mb-16`}>
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
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="relative">
              <Button
                size="lg"
                className="btn-modern px-8 py-4 rounded-xl text-white font-semibold text-lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Early Access
              </Button>
              {/* Light effect under button */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"></div>
            </div>
            {/* Trustpilot Stars */}
            <div className="flex items-center space-x-2" role="img" aria-label="4 out of 5 stars rating">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <svg className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">4.9/5 from 74 reviews</span>
            </div>
          </div>
        </div>

        {/* Centered Platform Image - Full Width */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Enhanced bright glow effect behind the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-pink-500/50 blur-3xl transform scale-110 -z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-2xl transform scale-105 -z-10"></div>
          {/* Additional glow under the image */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 rounded-full blur-2xl -z-10"></div>
          
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=1000"
            alt="IQVest AI Trading Dashboard"
            className="w-full h-auto rounded-2xl"
            loading="eager"
            width="1600"
            height="1000"
          />
        </div>
      </div>
    </section>
  );
}
