import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CoursesSection from "@/components/sections/CoursesSection";
import GetStartedSection from "@/components/sections/GetStartedSection";
import PlacementSection from "@/components/sections/PlacementSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StudentWorksSection from "@/components/sections/StudentWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FAQSection from "@/components/sections/FAQSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <AnimatedSection delay={0}>
          <HeroSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <WhyChooseUs />
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <CoursesSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <GetStartedSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.5}>
          <PlacementSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.6}>
          <TestimonialsSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.7}>
          <StudentWorksSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.8}>
          <BenefitsSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.9}>
          <FAQSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
