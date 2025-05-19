import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EnquiryModal from "@/components/EnquiryModal";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEnquiryClick = () => {
    setIsEnquiryModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-arena-blue text-white py-2.5 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+919213404924</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@arenafaridabad.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>Sector 7, Faridabad, Haryana</span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav
        className={cn(
          "py-4 w-full transition-all duration-300",
          isScrolled ? "bg-white shadow-md fixed top-0 z-50" : "bg-white"
        )}
      >
        <div className="container flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/arena-logo.jpg" 
              alt="Arena Animation Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-arena-blue hover:text-arena-orange transition-colors">Home</Link>
            <button onClick={() => scrollToSection("whychooseus")} className="font-medium text-arena-blue hover:text-arena-orange transition-colors">About Us</button>
            <div className="relative group">
              <button className="flex items-center space-x-1 font-medium text-arena-blue hover:text-arena-orange transition-colors">
                <span>Courses</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button onClick={() => scrollToSection("courses")} className="block w-full text-left px-4 py-2 text-arena-blue hover:bg-arena-orange hover:text-white">Animation Courses</button>
                <button onClick={() => scrollToSection("courses")} className="block w-full text-left px-4 py-2 text-arena-blue hover:bg-arena-orange hover:text-white">VFX Courses</button>
                <button onClick={() => scrollToSection("courses")} className="block w-full text-left px-4 py-2 text-arena-blue hover:bg-arena-orange hover:text-white">Web Design Courses</button>
              </div>
            </div>
            <button onClick={() => scrollToSection("placements")} className="font-medium text-arena-blue hover:text-arena-orange transition-colors">Placements</button>
            <button onClick={() => scrollToSection("gallery")} className="font-medium text-arena-blue hover:text-arena-orange transition-colors">Gallery</button>
            <button onClick={() => scrollToSection("contact")} className="font-medium text-arena-blue hover:text-arena-orange transition-colors">Contact</button>
            <Button 
              className="bg-arena-orange hover:bg-arena-blue text-white"
              onClick={handleEnquiryClick}
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-arena-blue">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute w-full z-50">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-arena-blue hover:text-arena-orange transition-colors">Home</Link>
              <button onClick={() => scrollToSection("whychooseus")} className="font-medium text-arena-blue hover:text-arena-orange transition-colors text-left">About Us</button>
              <button onClick={() => scrollToSection("courses")} className="font-medium text-arena-blue hover:text-arena-orange transition-colors text-left">Courses</button>
              <button onClick={() => scrollToSection("placements")} className="font-medium text-arena-blue hover:text-arena-orange transition-colors text-left">Placements</button>
              <button onClick={() => scrollToSection("gallery")} className="font-medium text-arena-blue hover:text-arena-orange transition-colors text-left">Gallery</button>
              <button onClick={() => scrollToSection("contact")} className="font-medium text-arena-blue hover:text-arena-orange transition-colors text-left">Contact</button>
              <Button 
                className="bg-arena-orange hover:bg-arena-blue text-white w-full"
                onClick={handleEnquiryClick}
              >
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </header>
  );
};

export default Header;
