import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Award,
  Users,
  Briefcase,
  Clock,
  Laptop,
  Check,
  ArrowRight,
  GraduationCap,
  Target,
  Zap,
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

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

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index,
  isActive,
  onClick 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 }
        }
      }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={cn(
        "relative p-8 rounded-2xl transition-all duration-500 cursor-pointer group",
        "before:absolute before:inset-0 before:rounded-2xl before:transition-all before:duration-500",
        isActive
          ? "bg-arena-blue text-white before:opacity-100 transform scale-105"
          : "bg-white hover:bg-arena-blue/5 before:opacity-0"
      )}
    >
      <div className="relative z-10">
        <div className={cn(
          "w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500",
          isActive ? "bg-white" : "bg-arena-orange/10"
        )}>
          <Icon 
            size={28} 
            className={cn(
              "transition-all duration-500",
              isActive ? "text-arena-blue" : "text-arena-orange"
            )} 
          />
        </div>
        <h3 className={cn(
          "text-xl font-bold mb-4 transition-all duration-500",
          isActive ? "text-white" : "text-arena-blue"
        )}>
          {title}
        </h3>
        <p className={cn(
          "transition-all duration-500",
          isActive ? "text-white/90" : "text-gray-600"
        )}>
          {description}
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <div className={cn(
              "mt-6 flex items-center font-medium transition-all duration-500 cursor-pointer",
              isActive ? "text-white opacity-100" : "opacity-0"
            )}>
              <span className="mr-2">Learn More</span>
              <ArrowRight size={16} />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] p-0">
            <ContactForm />
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
};

const StatCounter = ({ value, label, icon: Icon, delay }: {
  value: string;
  label: string;
  icon: React.ElementType;
  delay: number;
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef);
  
  useEffect(() => {
    if (isInView) {
      const finalValue = parseInt(value.replace(/\D/g, ""));
      const duration = 2000;
      const steps = 60;
      const stepValue = finalValue / steps;
      let currentStep = 0;
      
      const timer = setInterval(() => {
        if (currentStep < steps) {
          setCount(Math.min(Math.round(stepValue * currentStep), finalValue));
          currentStep++;
        } else {
          clearInterval(timer);
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-4">
        <Icon className="w-8 h-8 text-arena-orange" />
      </div>
      <div className="text-4xl font-bold text-arena-blue mb-2">
        {count}
        {value.includes("+") ? "+" : ""}
        {value.includes("%") ? "%" : ""}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const phoneNumber = "+919213404924";

  const features = [
    {
      icon: Award,
      title: "Industry Expert Faculty",
      description: "Learn from professionals with years of industry experience who bring real-world knowledge to the classroom."
    },
    {
      icon: Laptop,
      title: "State-of-the-Art Labs",
      description: "Work with the latest software and high-end workstations in our modern, well-equipped computer labs."
    },
    {
      icon: Target,
      title: "Focused Learning",
      description: "Small batch sizes ensure personalized attention and better learning outcomes for every student."
    },
    {
      icon: Briefcase,
      title: "100% Placement Support",
      description: "Our dedicated placement cell works tirelessly to connect students with the best industry opportunities."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Choose from multiple batch timings to balance your education with other commitments."
    },
    {
      icon: Zap,
      title: "Fast-Track Growth",
      description: "Accelerate your career with our industry-recognized certification and comprehensive training."
    }
  ];

  const stats = [
    {
      icon: GraduationCap,
      value: "24+",
      label: "YEARS OF EXCELLENCE"
    },
    {
      icon: Users,
      value: "48000+",
      label: "SUCCESSFUL STUDENTS"
    },
    {
      icon: Award,
      value: "99%",
      label: "PLACEMENT RATE"
    },
    {
      icon: Briefcase,
      value: "1000+",
      label: "HIRING PARTNERS"
    }
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView, features.length]);

  return (
    <section 
      id="whychooseus" 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-arena-gray"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h5 className="text-arena-orange font-bold uppercase tracking-wider mb-4">
            WHY CHOOSE US
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold text-arena-blue mb-6">
            What Makes Arena Animation Special
          </h2>
          <p className="text-gray-600 text-lg">
            Join the leading animation institute in Sector 7 Faridabad and experience 
            world-class education with industry-focused training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isActive={activeFeature === index}
              onClick={() => setActiveFeature(index)}
            />
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 relative">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCounter
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-arena-orange hover:bg-arena-blue text-white text-lg py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Start Your Creative Journey
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] p-0">
              <ContactInfo />
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
