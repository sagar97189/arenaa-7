import React, { useState, useEffect } from 'react';
import { ChevronUp, ArrowUp } from 'lucide-react';
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Calculate scroll progress and visibility
  const toggleVisibility = () => {
    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    setScrollProgress(scrolled);
    setIsVisible(winScroll > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Animated scroll to top
  const scrollToTop = () => {
    setIsScrolling(true);
    
    // Get current scroll position
    const start = window.pageYOffset;
    const duration = 1000; // ms
    const startTime = performance.now();

    // Easing function for smooth acceleration and deceleration
    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // Animation function
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const eased = easeInOutCubic(progress);
      const currentPosition = start - (start * eased);
      
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div 
      className={cn(
        "fixed bottom-8 right-8 z-50",
        "transition-all duration-500 ease-in-out transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      {/* Progress circle */}
      <div className="relative">
        {/* Background circle */}
        <svg 
          className="w-16 h-16 transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <circle
            className="text-arena-orange transition-all duration-300"
            strokeWidth="8"
            strokeDasharray={251.2}
            strokeDashoffset={251.2 - (scrollProgress / 100) * 251.2}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
        </svg>

        {/* Button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "rounded-full bg-white shadow-lg",
            "transform transition-all duration-300",
            "hover:scale-110 group",
            "focus:outline-none focus:ring-2 focus:ring-arena-orange focus:ring-offset-2",
            isScrolling && "animate-bounce"
          )}
          style={{ margin: '0.5rem' }}
        >
          <div className="relative">
            {/* Main arrow */}
            <ArrowUp 
              size={24} 
              className={cn(
                "transform transition-all duration-300",
                "text-arena-orange group-hover:text-arena-blue",
                isHovered ? "-translate-y-1" : "translate-y-0",
                isScrolling && "animate-bounce"
              )}
            />
            
            {/* Animated elements */}
            {isHovered && (
              <>
                {/* Ripple effect */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 animate-ping-slow opacity-30 bg-arena-orange rounded-full" />
                  <div className="absolute inset-0 animate-ping-slower opacity-20 bg-arena-orange rounded-full scale-110" />
                </div>
                
                {/* Particle effects */}
                <div className="absolute -top-1 left-1/2 w-px h-4 bg-arena-orange/20 animate-particle-up" />
                <div className="absolute -top-1 left-1/2 -ml-2 w-px h-3 bg-arena-orange/20 animate-particle-up-left" />
                <div className="absolute -top-1 left-1/2 ml-2 w-px h-3 bg-arena-orange/20 animate-particle-up-right" />
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop; 