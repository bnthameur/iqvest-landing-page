import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star } from "lucide-react";

export default function TrustpilotSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center reveal ${isVisible ? 'active' : ''}`}>
          {/* Trustpilot Card */}
          <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              {/* Trustpilot Logo */}
              <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M12.7 2L16.4 10.2L25.4 10.2L18.2 15.2L21.9 23.4L12.7 18.4L3.5 23.4L7.2 15.2L0 10.2L9 10.2L12.7 2Z" fill="#00B67A"/>
                  <path d="M34.2 21.6V8.4H37.2V19.2H42V21.6H34.2Z" fill="#00B67A"/>
                  <path d="M44.4 21.6V8.4H51.6V10.8H47.4V13.8H51.3V16.2H47.4V19.2H51.6V21.6H44.4Z" fill="#00B67A"/>
                  <path d="M53.4 21.6V8.4H60.9C62.1 8.4 63 8.7 63.6 9.3C64.2 9.9 64.5 10.8 64.5 12C64.5 13.2 64.2 14.1 63.6 14.7C63 15.3 62.1 15.6 60.9 15.6H56.4V21.6H53.4ZM56.4 10.8V13.2H60.3C60.6 13.2 60.9 13.1 61.1 12.9C61.3 12.7 61.4 12.4 61.4 12C61.4 11.6 61.3 11.3 61.1 11.1C60.9 10.9 60.6 10.8 60.3 10.8H56.4Z" fill="#00B67A"/>
                  <path d="M67.8 21.6V8.4H70.8V21.6H67.8Z" fill="#00B67A"/>
                  <path d="M74.1 21.6V8.4H77.1V19.2H81.9V21.6H74.1Z" fill="#00B67A"/>
                  <path d="M84.3 21.6V8.4H91.5V10.8H87.3V13.8H91.2V16.2H87.3V19.2H91.5V21.6H84.3Z" fill="#00B67A"/>
                  <path d="M94.5 21.6V8.4H101.7V10.8H97.5V13.8H101.4V16.2H97.5V21.6H94.5Z" fill="#00B67A"/>
                  <path d="M104.7 21.6V8.4H107.7V21.6H104.7Z" fill="#00B67A"/>
                  <path d="M110.1 21.6V8.4H113.1V19.2H117.9V21.6H110.1Z" fill="#00B67A"/>
                </g>
              </svg>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">4.9</div>
              <div className="text-green-400 font-semibold text-lg mb-4">Excellent</div>
              
              {/* 5 Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-green-400 text-green-400 mx-1" />
                ))}
              </div>
              
              <div className="text-muted-foreground text-sm mb-6">74 reviews</div>
              
              {/* Rating Breakdown */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">5-star</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">4-star</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">3-star</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{ width: '1%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">2-star</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{ width: '1%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">1-star</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}