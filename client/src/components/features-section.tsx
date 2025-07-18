import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import GlassmorphismCard from "@/components/glassmorphism-card";
import SmartfolioScroll from "@/components/smartfolio-scroll";
import { Brain, TrendingUp, BarChart3, Link, Users, MessageCircle, Wallet } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Insights",
    description: "Stay ahead with actionable insights powered by cutting-edge AI technology.",
    delay: "0s"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Risk Metrics",
    description: "Make informed decisions with up-to-date risk assessments for various crypto assets.",
    delay: "0.1s"
  },
  {
    icon: BarChart3,
    title: "Comprehensive Analytics",
    description: "Access on-chain and social analytics to anticipate market trends and opportunities.",
    delay: "0.2s"
  },
  {
    icon: Link,
    title: "On-Chain Analytics",
    description: "Gain a deeper understanding of blockchain activity with comprehensive on-chain analytics that help you anticipate market trends.",
    delay: "0.3s"
  },
  {
    icon: Users,
    title: "Social Analytics",
    description: "Monitor social sentiment and engagement across major platforms to gauge market mood and spot early opportunities.",
    delay: "0.4s"
  },
  {
    icon: MessageCircle,
    title: "IQVest Community",
    description: "Collaborate and chat with the community to discuss trading/investing strategies.",
    delay: "0.5s"
  },
  {
    icon: Wallet,
    title: "Smartfolio Multi-Chain",
    description: "Advanced portfolio management supporting 100+ blockchains and thousands of cryptocurrencies across all major networks.",
    delay: "0.6s"
  }
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <div className="text-primary font-semibold text-lg mb-4">🚀 Useful Features</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            IQVest provides <span className="gradient-text">AI-driven insights</span><br />
            tailored to your crypto portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Offering real-time risk assessment, exclusive market entry indicators, and comprehensive on-chain and social analytics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <GlassmorphismCard
              key={index}
              className={`p-8 hover:scale-105 transition-all duration-300 reveal ${isVisible ? 'active' : ''}`}
              style={{ animationDelay: feature.delay }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </GlassmorphismCard>
          ))}
        </div>

        {/* Smartfolio Multi-Chain Support Showcase */}
        <div className={`reveal ${isVisible ? 'active' : ''}`} style={{ animationDelay: "0.7s" }}>
          <SmartfolioScroll />
        </div>
      </div>
    </section>
  );
}
