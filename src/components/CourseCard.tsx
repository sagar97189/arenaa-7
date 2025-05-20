import React from "react";
import { Clock, Users, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

export interface CourseCardProps {
  title: string;
  image: string;
  duration: string;
  students: string;
  rating: string;
  description: string;
  features: string[];
  icon: React.ElementType;
}

export const CourseCard = ({ 
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