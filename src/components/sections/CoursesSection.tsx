import React, { useState } from "react";
import { Clock, Users, Star, BookOpen, Play, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Link } from "react-router-dom";

export interface CourseCardProps {
  title: string;
  image: string;
  duration: string;
  students: string;
  rating: string;
  description: string;
  features: string[];
  icon: "animation" | "game" | "design" | "marketing" | "3d" | "vfx";
  className?: string;
}

const CourseIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "animation":
      return <Play size={24} className="text-arena-orange" />;
    case "game":
      return <Video size={24} className="text-arena-orange" />;
    case "design":
      return <BookOpen size={24} className="text-arena-orange" />;
    case "marketing":
      return <Users size={24} className="text-arena-orange" />;
    case "3d":
      return <Video size={24} className="text-arena-orange" />;
    case "vfx":
      return <Video size={24} className="text-arena-orange" />;
    default:
      return <BookOpen size={24} className="text-arena-orange" />;
  }
};

export const CourseCard = ({ title, image, duration, students, rating, description, features, icon, className }: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Create a URL-friendly slug from the title
  const courseSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2",
        isHovered ? "shadow-2xl" : "shadow-lg", 
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-52 overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-sm line-clamp-2">{description}</p>
        </div>
        <div className="absolute top-4 right-4 bg-arena-orange text-white py-1 px-3 text-sm rounded-full">
          Popular
        </div>
        <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow-lg">
          <CourseIcon icon={icon} />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{students}</span>
          </div>
          <div className="flex items-center">
            <Star size={16} className="mr-1 text-yellow-500 fill-yellow-500" />
            <span>{rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-arena-blue hover:text-arena-orange transition-colors">
          {title}
        </h3>
        
        <div className="mb-4">
          <ul className="space-y-2">
            {features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-arena-orange rounded-full mt-1.5 mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" className="text-arena-blue hover:text-arena-orange p-0 h-auto">
              <span className="text-sm underline">View more details</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold text-arena-blue">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
              <div className="pt-2">
                <h5 className="text-sm font-medium mb-1">Key Features:</h5>
                <ul className="space-y-1">
                  {features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-arena-orange rounded-full mt-1.5 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <div className="mt-5 pt-4 border-t border-gray-100">
          <Link to={`/course/${courseSlug}`} state={{ 
            courseData: {
              title,
              image,
              duration,
              students,
              rating,
              description,
              features,
              icon
            }
          }}>
            <Button className="bg-arena-orange hover:bg-arena-blue text-white w-full transition-all duration-300 group">
              <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">View Course Details</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const courses = [
  {
    title: "Animation & VFX Prime",
    image: "images/vfx.jpg",
    duration: "24 Months",
    students: "120+",
    rating: "4.9",
    description: "Master the art of animation and visual effects with industry-standard tools like Maya, After Effects, and Nuke.",
    features: [
      "Industry-aligned curriculum",
      "Learn from working professionals",
      "Portfolio development",
      "Job-ready skills training",
      "Access to latest software"
    ],
    icon: "animation"
  },
  {
    title: "Game Art & Design",
    image: "images/game-design.jpg",
    duration: "18 Months",
    students: "85+",
    rating: "4.8",
    description: "Create immersive gaming experiences with cutting-edge game design techniques and 3D modeling skills.",
    features: [
      "Game concept development",
      "Character & environment design",
      "Unity & Unreal Engine training",
      "Interactive storytelling",
      "Mobile game development"
    ],
    icon: "game"
  },
  {
    title: "Graphic & Web Design",
    image: "images/web-graphic.jpg",
    duration: "12 Months",
    students: "150+",
    rating: "4.7",
    description: "Learn to create stunning visuals and user-friendly websites with the latest design principles and tools.",
    features: [
      "UI/UX fundamentals",
      "Adobe Creative Suite mastery",
      "Responsive web design",
      "Brand identity creation",
      "Interactive prototyping"
    ],
    icon: "design"
  },
  {
    title: "Digital Marketing",
    image: "images/digital-market.jpg",
    duration: "6 Months",
    students: "95+",
    rating: "4.8",
    description: "Master the skills of digital marketing including SEO, SEM, social media marketing and content strategy.",
    features: [
      "Social media campaign management",
      "SEO & SEM strategies",
      "Content marketing",
      "Analytics & performance tracking",
      "Email marketing automation"
    ],
    icon: "marketing"
  },
  {
    title: "3D Animation Mastery",
    image: "images/animation.jpg",
    duration: "15 Months",
    students: "75+",
    rating: "4.9",
    description: "Become an expert in 3D animation with advanced modeling, rigging, and character animation techniques.",
    features: [
      "Character rigging & animation",
      "3D modeling & texturing",
      "Lighting & rendering",
      "Motion capture integration",
      "Advanced animation principles"
    ],
    icon: "3d"
  },
  {
    title: "Visual Effects & Compositing",
    image: "images/visual-effect.png",
    duration: "12 Months",
    students: "65+",
    rating: "4.8",
    description: "Learn advanced visual effects and compositing techniques used in film and television production.",
    features: [
      "Green screen compositing",
      "Particle effects creation",
      "Color grading & matching",
      "Rotoscoping & tracking",
      "3D integration with live action"
    ],
    icon: "vfx"
  }
];

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
          {courses.slice(0, 6).map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              image={course.image}
              duration={course.duration}
              students={course.students}
              rating={course.rating}
              description={course.description}
              features={course.features}
              icon={course.icon as any}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/courses">
            <Button className="bg-arena-orange hover:bg-arena-blue text-white text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
