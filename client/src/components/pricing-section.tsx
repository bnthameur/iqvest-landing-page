import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Check, X, Zap, Gift } from "lucide-react";

const pricingPlans = [
  {
    name: "Standard",
    price: "0",
    period: "month",
    description: "Perfect for getting started",
    features: [
      { name: "Telegram Public Channel", included: true },
      { name: "Weekly Newsletter", included: true },
      { name: "TradingView Indicators", included: true },
      { name: "Video Tutorials", included: true },
      { name: "Smartfolio Tool", included: false },
      { name: "AI-Powered Insights", included: false },
      { name: "On-Chain & Social Analytics", included: false },
      { name: "SnapTrade Opportunities", included: false },
      { name: "Telegram Alert Channel", included: false },
      { name: "Telegram Elite Group", included: false }
    ],
    buttonText: "Coming Soon",
    buttonVariant: "outline" as const,
    delay: "0s"
  },
  {
    name: "Business",
    price: "29",
    period: "month",
    quarterly: "87.00",
    description: "Best for active traders",
    features: [
      { name: "Telegram Public Channel", included: true },
      { name: "Weekly Newsletter", included: true },
      { name: "TradingView Indicators", included: true, highlight: true },
      { name: "Video Tutorials", included: true },
      { name: "Smartfolio Tool", included: true },
      { name: "AI-Powered Insights", included: true },
      { name: "On-Chain & Social Analytics", included: true },
      { name: "SnapTrade Opportunities", included: true },
      { name: "Telegram Alert Channel", included: true },
      { name: "Telegram Elite Group", included: false }
    ],
    buttonText: "Select Plan",
    buttonVariant: "default" as const,
    delay: "0.1s"
  },
  {
    name: "Premium",
    price: "19",
    originalPrice: "59",
    period: "month",
    quarterly: "57.00",
    description: "Everything you need to succeed",
    popular: true,
    features: [
      { name: "Everything in Business", included: true },
      { name: "Telegram Elite Group", included: true },
      { name: "20X Challenge", included: true, highlight: true },
      { name: "Huge Giveaways", included: true, highlight: true },
      { name: "Weekly Live Sessions", included: true },
      { name: "Email Support", included: true }
    ],
    buttonText: "Select Plan",
    buttonVariant: "default" as const,
    delay: "0.2s"
  }
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedPeriod, setSelectedPeriod] = useState("3 Months");

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            IQVest offers plans that scale with your needs. Subscribe to a plan that fits the size of your portfolio.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex justify-center mt-8">
            <div className="glass-card p-1 rounded-xl">
              <div className="flex space-x-1">
                {["3 Months", "6 Months", "12 Months"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      selectedPeriod === period
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <GlassmorphismCard
              key={index}
              className={`p-8 relative reveal ${isVisible ? 'active' : ''} ${
                plan.popular ? "border-primary/50" : ""
              }`}
              style={{ animationDelay: plan.delay }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full text-sm font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-5xl font-bold mb-2">
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through mr-2">
                      ${plan.originalPrice}
                    </span>
                  )}
                  <span className={`text-4xl ${plan.popular ? "gradient-text" : ""}`}>
                    ${plan.price}
                  </span>
                  <span className="text-lg text-muted-foreground">/{plan.period}</span>
                </div>
                {plan.quarterly && (
                  <div className="text-sm text-muted-foreground">
                    ${plan.quarterly} per 3 months
                  </div>
                )}
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    )}
                    <span className={`${
                      feature.included ? "text-muted-foreground" : "text-gray-500"
                    }`}>
                      {feature.name}
                      {feature.highlight && (
                        <>
                          {feature.name.includes("Challenge") && (
                            <Zap className="w-4 h-4 inline ml-1 text-yellow-400" />
                          )}
                          {feature.name.includes("Giveaways") && (
                            <Gift className="w-4 h-4 inline ml-1 text-pink-400" />
                          )}
                          {feature.name.includes("Indicators") && (
                            <span className="text-orange-400 ml-1">🔥</span>
                          )}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full py-3 rounded-xl font-semibold ${
                  plan.buttonVariant === "default"
                    ? "btn-modern"
                    : "glass-card hover:bg-white/10 border-white/20"
                }`}
                variant={plan.buttonVariant}
                disabled={plan.buttonText === "Coming Soon"}
              >
                {plan.buttonText}
              </Button>
            </GlassmorphismCard>
          ))}
        </div>
      </div>
    </section>
  );
}
