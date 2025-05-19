import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const GetStartedSection = () => {
  const phoneNumber = "+919213404924";
  
  const benefits = [
    "Expert faculty with industry experience",
    "Hands-on practical training",
    "Portfolio development",
    "Soft skills training",
    "100% placement assistance",
    "Internship opportunities"
  ];

  return (
    <section className="bg-arena-blue py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h5 className="text-arena-orange font-medium uppercase mb-2">START YOUR JOURNEY</h5>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Get Started on Your Future Today
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Take the first step towards a successful career in the creative industry. 
              Our admissions team is ready to guide you through the enrollment process and answer all your questions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
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
                  <Button className="bg-arena-orange hover:bg-white hover:text-arena-blue text-white text-lg py-6 px-8">
                    Start Your Creative Journey
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] p-6 bg-white rounded-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-arena-blue text-center">
                      Start Your Creative Journey
                    </DialogTitle>
                    <p className="text-center text-gray-600 mt-2">
                      Fill out the form below or contact us directly
                    </p>
                  </DialogHeader>

                  <div className="mt-6">
                    <div className="mb-6 p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3 text-green-700">
                        <Phone className="w-5 h-5" />
                        <div>
                          <p className="font-medium">Contact us directly:</p>
                          <a href={`tel:${phoneNumber}`} className="hover:underline">{phoneNumber}</a>
                        </div>
                      </div>
                    </div>

                    <form>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="modal-name" className="block text-gray-700 mb-1">Full Name*</label>
                          <input
                            type="text"
                            id="modal-name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="modal-email" className="block text-gray-700 mb-1">Email Address*</label>
                          <input
                            type="email"
                            id="modal-email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="modal-phone" className="block text-gray-700 mb-1">Phone Number*</label>
                          <input
                            type="tel"
                            id="modal-phone"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                            placeholder="Your Phone"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="modal-course" className="block text-gray-700 mb-1">Course Interest*</label>
                          <select
                            id="modal-course"
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
                        <div>
                          <label htmlFor="modal-message" className="block text-gray-700 mb-1">Message</label>
                          <textarea
                            id="modal-message"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                            placeholder="Your Message"
                            rows={3}
                          ></textarea>
                        </div>
                      </div>

                      <Button className="w-full bg-arena-orange hover:bg-arena-blue text-white py-3 text-lg mt-6">
                        Submit Enquiry
                      </Button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" className="border-white text-arena-blue hover:bg-white hover:text-arena-orange text-lg py-6 px-8">
                Download Brochure
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
            <h3 className="text-arena-blue text-2xl font-bold mb-6">Request Information</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Full Name*</label>
                  <input
                    type="text"
                    id="name"
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
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-gray-700 mb-1">Course Interest*</label>
                  <select
                    id="course"
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
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
                  placeholder="Your Message"
                  rows={3}
                ></textarea>
              </div>
              <Button className="w-full bg-arena-orange hover:bg-arena-blue text-white py-3 text-lg">
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
