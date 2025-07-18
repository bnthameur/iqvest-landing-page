import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { useToast } from "@/hooks/use-toast";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Success!",
      description: "You've been added to our early access list.",
    });

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to stay <span className="gradient-text">2 steps ahead</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are already using IQVest AI to maximize their crypto portfolio performance.
          </p>
          
          {/* Early Access Form */}
          <GlassmorphismCard className="p-8 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-primary/30 rounded-xl text-white placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient py-3 rounded-xl text-white font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Get Early Access"}
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </GlassmorphismCard>
        </div>
      </div>
    </section>
  );
}
