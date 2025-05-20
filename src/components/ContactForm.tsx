import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    courseCategory: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement form submission logic
    setFormData({
      name: "",
      phone: "",
      courseCategory: "",
      message: ""
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-xl font-bold text-arena-blue mb-4">Contact Us</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
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
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
            required
          />
        </div>

        <div>
          <label htmlFor="courseCategory" className="block text-sm font-medium text-gray-700 mb-1">
            Course Category*
          </label>
          <select
            id="courseCategory"
            name="courseCategory"
            value={formData.courseCategory}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange"
            required
          >
            <option value="">Select Category</option>
            <option value="Animation & VFX">Animation & VFX</option>
            <option value="Game Design">Game Design</option>
            <option value="Web Design">Web Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arena-orange resize-none"
            placeholder="Tell us about your interests..."
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-arena-orange hover:bg-arena-blue text-white py-2"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm; 