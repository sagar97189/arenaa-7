import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  image: string;
  videoUrl?: string;
  rating: number;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

const Testimonial = ({ 
  quote, 
  name, 
  position, 
  image, 
  videoUrl, 
  rating, 
  className,
  isActive,
  onClick
}: TestimonialProps) => {
  return (
    <motion.div 
      className={cn(
        "p-6 rounded-lg cursor-pointer transition-all duration-300",
        isActive ? "bg-white shadow-lg scale-105" : "opacity-60 hover:opacity-80",
        className
      )}
      onClick={onClick}
      whileHover={!isActive ? { scale: 1.02 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        className="flex items-center space-x-4 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover" 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <div>
          <motion.h4 
            className="font-bold text-lg text-arena-blue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {name}
          </motion.h4>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {position}
          </motion.p>
        </div>
      </motion.div>
      
      <motion.div 
        className="flex mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <Star 
              size={16} 
              className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
            />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.p 
        className="text-gray-700 mb-4 italic line-clamp-4 hover:line-clamp-none transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Quote size={20} className="inline text-arena-orange mr-1 mb-1" />
        {quote}
      </motion.p>
      
      {videoUrl && isActive && (
        <motion.div 
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.p 
            className="text-arena-orange font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Watch Video Testimonial
          </motion.p>
          <motion.div 
            className="aspect-w-16 aspect-h-9"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <iframe 
              className="w-full h-56 rounded-lg"
              src={videoUrl}
              title={`${name} testimonial video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonials = [
    {
      quote: "My experience at Arena Animation Sector-7 Faridabad is great and memorable. The mentors at Arena Animation Sector-7 Faridabad helped us enhance my academic and interpersonal skills. I am thankful to Training & Placement cell for providing a platform to enhance my skills and an opportunity to showcase them. In the last I am saying that The World is here at Arena Animation Sector-7 Faridabad.",
      name: "Tushar Jain",
      position: "Former Student",
      image: "/images/testimonials/student1.jpg",
      rating: 5
    },
    {
      quote: "Great experience from Arena Animation Sector-7 Faridabad. You get a lot of opportunities. Work hard to get it. Be prepared for everything. Maintain your attendance.",
      name: "Gaurav",
      position: "Former Student",
      image: "/images/testimonials/student2.jpg",
      rating: 5
    },
    {
      quote: "Arena Animation Sector-7 Faridabad is a place where you can find an amalgamation of learning. I feel great studying at Arena Animation Sector-7 Faridabad as it gives great opportunity as well as support from faculties and placement officers. Getting placed in HCL is an achievement for me for which i would like to thank Arena Animation Sector-7 Faridabad.",
      name: "Praveen Sharma",
      position: "Placed at HCL",
      image: "/images/testimonials/student3.jpg",
      rating: 5
    },
    {
      quote: "Arena Animation Sector-7 Faridabad and faculties have put in all the efforts to groom us and make us corporate professionals. It was a wonderful experience at Arena Animation Sector-7 Faridabad.",
      name: "Abhilash",
      position: "Former Student",
      image: "/images/testimonials/student4.jpg",
      rating: 5
    },
    {
      quote: "Arena Animation Sector-7 Faridabad has always believed in helping and guiding its students and it was no different during the placement season. Regular classes held at our institute to help us with our aptitude and technical skills were of great help. Our placement administration staff also guided and encouraged us at each step thereby helping me secure my placement at such a reputed company.",
      name: "Neeraj",
      position: "Placed Student",
      image: "/images/testimonials/student5.jpg",
      rating: 5
    },
    {
      quote: "I definitely would recommend Arena Animation Sector-7 Faridabad and would encourage students to study hard and inform themselves as much as possible about the several academic opportunities the Institution offers. Our institute takes the educational mission to heart, here you will find people that will support you and guide you on the path to your career.",
      name: "Sunandini",
      position: "Former Student",
      image: "/images/testimonials/student6.jpg",
      rating: 5
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-sliding functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextTestimonial();
      }, 5000); // Change testimonial every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-sliding on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <motion.section 
      id="testimonials" 
      className="section-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h5 
            className="section-subtitle"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            STUDENT TESTIMONIALS
          </motion.h5>
          <motion.h2 
            className="section-title"
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            What Our Students Say
          </motion.h2>
          <motion.p 
            className="section-description"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            Hear directly from our alumni about their learning experience and how Arena Animation helped shape their careers.
          </motion.p>
        </motion.div>
        
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  <Testimonial
                    {...testimonials[activeIndex]}
                    isActive={true}
                    onClick={() => {}}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <motion.div 
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 hidden md:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button 
              onClick={() => {
                prevTestimonial();
                setIsAutoPlaying(false);
              }}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-arena-orange hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button 
              onClick={() => {
                nextTestimonial();
                setIsAutoPlaying(false);
              }}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-arena-orange hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-4 mt-8 md:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button 
              onClick={() => {
                prevTestimonial();
                setIsAutoPlaying(false);
              }}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-arena-orange hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button 
              onClick={() => {
                nextTestimonial();
                setIsAutoPlaying(false);
              }}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-arena-orange hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;

