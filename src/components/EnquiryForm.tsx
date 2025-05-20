import React, { useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EnquiryFormProps {
  courseName?: string;
  buttonType?: 'both' | 'single';
  buttonText?: string;
  className?: string;
}

export const EnquiryForm = ({ courseName, buttonType = 'both', buttonText = 'Submit Request', className = '' }: EnquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: courseName || '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent, type: 'call' | 'message' = 'message') => {
    e.preventDefault();

    // TODO: Implement form submission logic
    console.log('Form submitted:', { ...formData, type });

    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: courseName || '',
      message: ''
    });
  };

  return (
    <div className={cn("p-6 md:p-8 rounded-lg", className)}>
      <h3 className="text-arena-blue text-2xl font-bold mb-6">
        {courseName ? `Enquire about ${courseName}` : 'Contact Us'}
      </h3>
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-arena-orange focus:border-arena-orange"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-arena-orange focus:border-arena-orange"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-arena-orange focus:border-arena-orange"
            required
          />
        </div>

        {!courseName && (
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
              Course Interest*
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-arena-orange focus:border-arena-orange"
              required
            >
              <option value="">Select Course</option>
              <option value="Animation & VFX Prime">Animation & VFX Prime</option>
              <option value="Game Art & Design">Game Art & Design</option>
              <option value="Graphic & Web Design">Graphic & Web Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="3D Animation Mastery">3D Animation Mastery</option>
              <option value="Visual Effects & Compositing">Visual Effects & Compositing</option>
              <option value="Motion Graphics & Animation">Motion Graphics & Animation</option>
              <option value="UI/UX Design Professional">UI/UX Design Professional</option>
            </select>
          </div>
        )}
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-arena-orange focus:border-arena-orange"
          ></textarea>
        </div>
        
        {buttonType === 'both' ? (
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              type="button" 
              onClick={(e) => handleSubmit(e, 'call')}
              className="flex-1 bg-arena-orange hover:bg-arena-blue text-white gap-2"
            >
              <Phone size={18} />
              Request Callback
            </Button>
            <Button 
              type="button"
              onClick={(e) => handleSubmit(e, 'message')}
              className="flex-1 bg-arena-blue hover:bg-arena-orange text-white gap-2"
            >
              <MessageSquare size={18} />
              Send Message
            </Button>
          </div>
        ) : (
          <Button type="submit" className="w-full bg-arena-orange hover:bg-arena-blue text-white">
            {buttonText}
          </Button>
        )}
      </form>
    </div>
  );
};

export default EnquiryForm; 