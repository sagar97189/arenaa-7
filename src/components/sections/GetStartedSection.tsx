import React, { useState } from "react";
import { Check, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";

const benefits = [
  "Expert faculty with industry experience",
  "Hands-on practical training",
  "Portfolio development",
  "Soft skills training",
  "100% placement assistance",
  "Internship opportunities"
];

const ContactInfo = () => {
  const phoneNumber = "+919213404924";
  const whatsappNumber = "919213404924";
  const email = "info@arenafaridabad.in";

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg">
      <h3 className="text-arena-blue text-xl font-bold mb-4">Contact Us</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-2">Get in Touch</h4>
          <p className="text-sm text-gray-600 mb-3">
            Reach out to us directly through call or WhatsApp for quick assistance and enrollment details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a 
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-2 bg-arena-orange hover:bg-arena-blue text-white py-2.5 px-4 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium text-sm">Call Now</span>
          </a>
          
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="font-medium text-sm">WhatsApp</span>
          </a>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-base font-semibold text-gray-800 mb-2">Contact Details</h4>
          <div className="space-y-1.5 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-arena-orange" />
              <span>{phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-arena-orange" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-arena-orange" />
              <span>WhatsApp: {phoneNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GetStartedSection = () => {
  const phoneNumber = "+919213404924";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);

    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  return (
    <section id="start-journey" className="bg-arena-blue py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h5 className="text-arena-orange font-medium uppercase mb-2">START YOUR JOURNEY</h5>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Get Started on Your Future Today
            </h2>
            <p className="text-white/80 mb-6 text-lg">
              Take the first step towards a successful career in the creative industry. 
              Our admissions team is ready to guide you through the enrollment process and answer all your questions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="bg-arena-orange rounded-full p-1 mt-1">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-arena-orange hover:bg-white hover:text-arena-blue text-white text-lg py-4 px-6">
                    Start Your Creative Journey
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px] p-0">
                  <ContactInfo />
                </DialogContent>
              </Dialog>
              <Button variant="outline" className="border-white text-arena-orange hover:bg-white hover:text-arena-blue text-lg py-4 px-6">
                Download Brochure
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-arena-blue text-2xl font-bold mb-6">Request Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-gray-700 mb-1">Course Interest*</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="Animation & VFX Prime">Animation & VFX Prime</option>
                    <option value="Game Art & Design">Game Art & Design</option>
                    <option value="Graphic & Web Design">Graphic & Web Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                  placeholder="Your Message"
                  rows={3}
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-arena-orange hover:bg-arena-blue text-white py-3 text-lg">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
