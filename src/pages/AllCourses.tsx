import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CourseCard } from "@/components/sections/CoursesSection";
import type { CourseCardProps } from "@/components/sections/CoursesSection";

const AllCourses = () => {
  const courses: CourseCardProps[] = [
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
      icon: "vfx"
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
      image: "images/digital-marketing.jpg",
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
      image: "images/vfx-compositing.jpg",
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
    },
    {
      title: "Motion Graphics & Animation",
      image: "images/motion-graphics.jpg",
      duration: "9 Months",
      students: "90+",
      rating: "4.7",
      description: "Create stunning motion graphics and animations for commercials, films, and digital media.",
      features: [
        "After Effects mastery",
        "2D & 3D animation",
        "Typography animation",
        "Visual storytelling",
        "Sound integration"
      ],
      icon: "animation"
    },
    {
      title: "UI/UX Design Professional",
      image: "images/ui-ux.jpg",
      duration: "8 Months",
      students: "70+",
      rating: "4.8",
      description: "Master the art of creating user-centered digital experiences and interfaces.",
      features: [
        "User research methods",
        "Wireframing & prototyping",
        "Interaction design",
        "Usability testing",
        "Design systems"
      ],
      icon: "design"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-arena-lightgray">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-arena-blue mb-4"
              >
                Our Courses
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 text-lg max-w-2xl mx-auto"
              >
                Explore our comprehensive range of courses designed to prepare you for a successful career in the creative industry.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllCourses; 