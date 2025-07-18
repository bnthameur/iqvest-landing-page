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
    <section className="relative min-h-screen flex items-center justify-center pt-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div ref={ref} className={`reveal ${isVisible ? 'active' : ''} text-center lg:text-left`}>
            <div className="text-primary font-semibold text-lg mb-4 tracking-wide">
              BE 2 STEPS AHEAD WITH
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">IQVEST AI</span><br />
              <span className="text-foreground">INDICATORS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              IQVest empowers you with exclusive indicators, risk metrics, and AI-driven insights to stay ahead of the crypto market.
            </p>
            <div className="flex flex-col items-center lg:items-start gap-6 mb-8">
              <Button
                size="lg"
                className="btn-modern px-8 py-4 rounded-xl text-white font-semibold text-lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Early Access
              </Button>
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

          {/* Right Column - Dashboard Image */}
          <div className="relative">
            <div className="glass-card p-4 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="IQVest AI Trading Dashboard"
                className="w-full h-auto rounded-xl"
                loading="eager"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
