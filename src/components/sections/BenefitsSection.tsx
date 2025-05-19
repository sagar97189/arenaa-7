import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Laptop, 
  Target, 
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BenefitCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  benefits: {
    title: string;
    description: string;
  }[];
}

const benefitCategories: BenefitCategory[] = [
  {
    id: "academic",
    title: "Academic Excellence",
    icon: GraduationCap,
    benefits: [
      {
        title: "Industry-Aligned Curriculum",
        description: "Our curriculum is regularly updated with input from industry experts to ensure relevance."
      },
      {
        title: "Expert Faculty",
        description: "Learn from professionals with years of industry experience and proven expertise."
      },
      {
        title: "Practical Training",
        description: "Hands-on experience with real projects and industry-standard tools."
      }
    ]
  },
  {
    id: "career",
    title: "Career Support",
    icon: Briefcase,
    benefits: [
      {
        title: "Placement Assistance",
        description: "Dedicated placement cell to help you land your dream job in the creative industry."
      },
      {
        title: "Industry Network",
        description: "Access to our vast network of industry partners and alumni connections."
      },
      {
        title: "Interview Preparation",
        description: "Comprehensive interview training and portfolio development guidance."
      }
    ]
  },
  {
    id: "facilities",
    title: "Modern Facilities",
    icon: Laptop,
    benefits: [
      {
        title: "High-End Labs",
        description: "State-of-the-art computer labs equipped with the latest software and hardware."
      },
      {
        title: "Small Batch Size",
        description: "Limited students per batch ensuring personalized attention and better learning."
      },
      {
        title: "Project Studio",
        description: "Dedicated workspace for practical projects and portfolio development."
      }
    ]
  },
  {
    id: "growth",
    title: "Personal Growth",
    icon: Target,
    benefits: [
      {
        title: "Skill Development",
        description: "Comprehensive training in technical and soft skills for holistic growth."
      },
      {
        title: "Industry Exposure",
        description: "Regular workshops, seminars, and industry visits for real-world insights."
      },
      {
        title: "Creative Environment",
        description: "Collaborative atmosphere that nurtures creativity and innovation."
      }
    ]
  }
];

const BenefitCard = ({ 
  benefit, 
  isVisible,
  index
}: { 
  benefit: { title: string; description: string }; 
  isVisible: boolean;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
    transition={{ 
      duration: 0.6,
      delay: index * 0.2,
      ease: [0.22, 1, 0.36, 1]
    }}
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start space-x-3">
      <CheckCircle2 className="w-5 h-5 text-arena-orange mt-1 flex-shrink-0" />
      <div>
        <h4 className="text-lg font-semibold text-arena-blue mb-2">{benefit.title}</h4>
        <p className="text-gray-600">{benefit.description}</p>
      </div>
    </div>
  </motion.div>
);

const BenefitsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("academic");
  const phoneNumber = "+919213404924";
  const whatsappNumber = "+919213404924";
  const emailAddress = "info@arena-faridabad.com";

  return (
    <AnimatedSection className="py-20 bg-arena-lightgray relative overflow-hidden" delay={0.2}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-arena-blue/5 to-transparent"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h5 className="text-arena-orange font-bold uppercase tracking-wider mb-4">
            BENEFITS YOU GET
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold text-arena-blue mb-6">
            Why Students Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the advantages that set us apart and help our students succeed in the creative industry
          </p>
        </motion.div>

        {/* Benefits Categories Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {benefitCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.8 + idx * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-arena-blue text-white shadow-lg"
                    : "bg-white text-arena-blue hover:bg-arena-blue/5"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.title}</span>
                {activeCategory === category.id && (
                  <ChevronRight className="w-4 h-4 ml-1" />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {benefitCategories.find(c => c.id === activeCategory)?.benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              isVisible={true}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-arena-orange hover:bg-arena-blue text-white text-lg py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey Today
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] p-6 bg-white rounded-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-arena-blue text-center mb-6">
                  Contact Us
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <MessageSquare className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <p className="font-medium text-green-700">WhatsApp</p>
                    <p className="text-green-600">{whatsappNumber}</p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href={`tel:${phoneNumber}`}
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-blue-700">Phone</p>
                    <p className="text-blue-600">{phoneNumber}</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${emailAddress}`}
                  className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <Mail className="w-6 h-6 text-orange-600 mr-4" />
                  <div>
                    <p className="font-medium text-orange-700">Email</p>
                    <p className="text-orange-600">{emailAddress}</p>
                  </div>
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default BenefitsSection;
