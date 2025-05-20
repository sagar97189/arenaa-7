import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

const HeroSection = () => {
  const phoneNumber = "+919213404924";
  const whatsappNumber = "919213404924";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
        ></div>
        <div 
          className="absolute inset-0 bg-black/30"
          style={{
            backdropFilter: 'brightness(0.9)'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h5 className="text-arena-orange font-bold text-xl mb-3">WELCOME TO ARENA ANIMATION</h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Shape Your Creative Future With Arena Animation
          </h1>
          <p className="text-lg text-white/90 mb-8">
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
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-white text-arena-orange hover:bg-white hover:text-arena-blue text-lg py-6 px-8"
                >
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] p-0">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Mobile Call and WhatsApp Buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden">
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 bg-arena-orange text-white py-3 items-center justify-center flex border-r border-white/20"
        >
          <span className="font-medium text-sm uppercase">Call Now</span>
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-3 items-center justify-center flex"
        >
          <span className="font-medium text-sm uppercase">WhatsApp Now</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
