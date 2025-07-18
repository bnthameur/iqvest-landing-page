import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Abbou Mokrane",
    role: "Crypto Trader",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
    content: "I am very satisfied with IQVest, it has helped me a lot in managing my portfolio, really regarding the charts I don't know them well at the moment, thank you very much Mr. Abdullah for this magnificent site",
    delay: "0s"
  },
  {
    name: "Malak",
    role: "Community Member",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
    content: "A wonderful site frankly, I have never been in a community where I feel at ease and find the answer to anything you want. Thanks to Mr Abdullah for his efforts with us.",
    delay: "0.1s"
  },
  {
    name: "Mohamed Moh",
    role: "Investor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
    content: "I find it highly useful and intuitive. The website boasts numerous advantages rarely found elsewhere. It offers exclusive charts that empower you to analyze and gain predictive insights into the crypto market.",
    delay: "0.2s"
  },
  {
    name: "Amin Lazaar",
    role: "Portfolio Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
    content: "The IQVest website, from the day I entered it, I abandoned many of the sites I used. It is easy to use and browse, and it has many distinctive indicators that are not found on other sites.",
    delay: "0.3s"
  },
  {
    name: "Hamiter Najib",
    role: "Trader",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
    content: "I couldn't ask for a better community honestly, the members are always respectful and helpful for each other and the leader is very professional and he knows what he is doing.",
    delay: "0.4s"
  },
  {
    name: "Rahim",
    role: "Long-term User",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
    content: "I've been using IQVest.io since October 2024, and it's been a game-changer. It combines AI with powerful indicators to help me track my investments in real time and manage risks effectively.",
    delay: "0.5s"
  }
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <div className="text-primary font-semibold text-lg mb-4">⭐ Real Customer Reviews</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Success stories from <span className="gradient-text">clients</span>
          </h2>
          <p className="text-xl text-muted-foreground">See what our customers have to say about their experience.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassmorphismCard
              key={index}
              className={`p-8 reveal ${isVisible ? 'active' : ''}`}
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4">"{testimonial.content}"</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </div>
    </section>
  );
}
