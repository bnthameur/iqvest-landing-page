import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept payments through Stripe for credit/debit cards and cryptocurrency. Subscriptions are billed according to the duration you choose, and they automatically renew unless canceled.",
    delay: "0s"
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time through your account settings. Upon cancellation, your access to the platform will remain active until the end of the current billing cycle.",
    delay: "0.1s"
  },
  {
    question: "Do you offer refunds?",
    answer: "As stated in our terms of service, we do not offer refunds once a payment has been processed. Please make sure you review the subscription terms before committing to a plan.",
    delay: "0.2s"
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. Any changes to your plan will take effect in the next billing cycle.",
    delay: "0.3s"
  },
  {
    question: "Payment Failures: What happens if a payment fails?",
    answer: "If a payment fails, your account access may be suspended until payment is successfully processed. We'll send you email notifications to help resolve any payment issues quickly.",
    delay: "0.4s"
  }
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <div className="text-primary font-semibold text-lg mb-4">❓ FAQ</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Browse through these FAQs to find answers to commonly asked questions.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassmorphismCard
              key={index}
              className={`reveal ${isVisible ? 'active' : ''}`}
              style={{ animationDelay: faq.delay }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </div>
    </section>
  );
}
