import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

const HeroSection = () => {
  const phoneNumber = "+919213404924";
  const whatsappNumber = "919213404924";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="relative bg-arena-blue text-white min-h-[600px] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-arena-blue/95 to-arena-blue/70"></div>
        <div
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
          className="absolute inset-0 bg-cover bg-center"
        ></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h5 className="text-arena-orange font-bold text-xl mb-3">WELCOME TO ARENA ANIMATION</h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Shape Your Creative Future With Arena Animation
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Transform your creative passion into a professional career with industry-relevant courses. 
            Join Sector 7 Faridabad's leading animation institute.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => scrollToSection('courses')}
              className="bg-arena-orange hover:bg-white hover:text-arena-blue text-white text-lg py-6 px-8"
            >
              Discover Courses
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-white text-arena-blue hover:bg-white hover:text-arena-orange text-lg py-6 px-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Call and WhatsApp Buttons */}
      <div className="fixed bottom-4 left-0 right-0 z-50 px-4 flex justify-center space-x-4 md:hidden">
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 bg-arena-orange text-white py-3 px-6 rounded-full font-medium text-center flex items-center justify-center space-x-2 shadow-lg hover:bg-arena-orange/90 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>CALL NOW</span>
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-3 px-6 rounded-full font-medium text-center flex items-center justify-center space-x-2 shadow-lg hover:bg-[#25D366]/90 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          <span>WHATSAPP NOW</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
