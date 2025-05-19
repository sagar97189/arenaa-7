import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseContactFormProps {
  courseName: string;
}

const CourseContactForm = ({ courseName }: CourseContactFormProps) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg">
      <h3 className="text-arena-blue text-2xl font-bold mb-6">Contact Us for {courseName}</h3>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-arena-orange focus:border-arena-orange"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-arena-orange focus:border-arena-orange"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-arena-orange focus:border-arena-orange"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-arena-orange focus:border-arena-orange"
          ></textarea>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex-1 bg-arena-orange hover:bg-arena-blue text-white gap-2">
            <Phone size={18} />
            Request Callback
          </Button>
          <Button className="flex-1 bg-arena-blue hover:bg-arena-orange text-white gap-2">
            <MessageSquare size={18} />
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CourseContactForm; 