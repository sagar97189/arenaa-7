import React from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-arena-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Arena */}
          <div>
            <h3 className="text-xl font-bold mb-6">About Arena Animation</h3>
            <p className="mb-6 text-white/80">
              Arena Animation Sector 7 Faridabad is a premier institute offering cutting-edge courses in Animation, VFX, Graphics and Web Design to prepare students for successful careers in the creative industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-arena-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-arena-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-arena-orange transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-arena-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="flex items-center hover:text-arena-orange transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#whychooseus" className="flex items-center hover:text-arena-orange transition-colors" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('whychooseus')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <ChevronRight size={16} className="mr-2" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#courses" className="flex items-center hover:text-arena-orange transition-colors" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <ChevronRight size={16} className="mr-2" />
                  <span>Courses</span>
                </a>
              </li>
              <li>
                <a href="#placements" className="flex items-center hover:text-arena-orange transition-colors" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('placements')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <ChevronRight size={16} className="mr-2" />
                  <span>Placements</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="flex items-center hover:text-arena-orange transition-colors" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <ChevronRight size={16} className="mr-2" />
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center hover:text-arena-orange transition-colors" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <ChevronRight size={16} className="mr-2" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-arena-orange" />
                <span>SCO 23, Sector 7 Market, Faridabad, Haryana - 121006</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-arena-orange" />
                <span>+919213404924</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-arena-orange" />
                <span>info@arenafaridabad.in</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-arena-orange" />
                <div>
                  <p>Monday - Saturday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-arena-lightblue border-none rounded focus:outline-none focus:ring-2 focus:ring-arena-orange text-white"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-arena-lightblue border-none rounded focus:outline-none focus:ring-2 focus:ring-arena-orange text-white"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 bg-arena-lightblue border-none rounded focus:outline-none focus:ring-2 focus:ring-arena-orange text-white"
                  rows={3}
                ></textarea>
              </div>
              <Button className="w-full bg-arena-orange hover:bg-white hover:text-arena-blue">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-arena-blue border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} Arena Animation Sector 7 Faridabad. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
