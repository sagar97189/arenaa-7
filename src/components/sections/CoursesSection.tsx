import React, { useState } from "react";
import { Clock, Users, Star, BookOpen, Play, Video, Phone, MessageSquare, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-scroll";
import ContactForm from "@/components/ContactForm";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement form submission logic
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-arena-blue text-xl font-bold mb-4">Enroll Now</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name*"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-arena-orange text-sm"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address*"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-arena-orange text-sm"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number*"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-arena-orange text-sm"
            required
          />
        </div>
        <div>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-arena-orange text-sm"
            required
          >
            <option value="">Select Course*</option>
            <option value="Animation & VFX Prime">Animation & VFX Prime</option>
            <option value="Game Art & Design">Game Art & Design</option>
            <option value="Graphic & Web Design">Graphic & Web Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>
        </div>
        <Button type="submit" className="w-full bg-arena-orange hover:bg-arena-blue text-white">
          Submit
        </Button>
      </form>
    </div>
  );
};

const ContactInfo = ({ courseName }: { courseName: string }) => {
  const phoneNumber = "+919213404924";
  const whatsappNumber = "919213404924";
  const email = "info@arenafaridabad.in";

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg">
      <h3 className="text-arena-blue text-xl font-bold mb-4">Contact Us for {courseName}</h3>
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

interface CourseCardProps {
  title: string;
  image: string;
  duration: string;
  students: string;
  rating: string;
  description: string;
  features: string[];
  icon: React.ElementType;
}

const CourseCard = ({ 
  title, 
  image, 
  duration, 
  students, 
  rating, 
  description, 
  features, 
  icon: Icon 
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
          <Icon className="w-6 h-6 text-arena-orange" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-arena-blue mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{students}+ Students</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-arena-orange mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col space-y-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-arena-orange hover:bg-arena-blue text-white">
                Tap for more info
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-0">
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  return (
    <section id="courses" className="section-container bg-arena-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="section-subtitle">EXPLORE COURSES</h5>
          <h2 className="section-title">Our Popular Courses</h2>
          <p className="section-description">
            Discover our industry-aligned courses designed to prepare you for a successful career in animation, VFX, gaming and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-arena-orange hover:bg-arena-blue text-white text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105">
                Enroll Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] p-0">
              <EnrollForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export { courses };
export default CoursesSection;
