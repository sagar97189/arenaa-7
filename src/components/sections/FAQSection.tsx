import React from "react";
import { Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What are the eligibility criteria for joining Arena Animation?",
      answer: "The minimum eligibility criteria for most courses is 10+2 (higher secondary) from any stream. However, specific courses might have additional requirements. We recommend contacting our admission counselors for course-specific eligibility details."
    },
    {
      question: "How long are the animation courses at Arena Animation?",
      answer: "Our courses range from 6 months to 24 months, depending on the program you choose. Short-term specialized courses can be 6-8 months, while comprehensive programs like Animation & VFX Prime can extend up to 24 months."
    },
    {
      question: "Do you provide placement assistance after course completion?",
      answer: "Yes, we have a dedicated placement cell that works to connect students with industry opportunities. We organize placement drives, portfolio reviews, and interview preparation sessions to help students kickstart their careers."
    },
    {
      question: "What software will I learn during the course?",
      answer: "Depending on your chosen program, you'll learn industry-standard software like Adobe Creative Suite (Photoshop, Illustrator, After Effects), Autodesk Maya, 3ds Max, Nuke, Unreal Engine, Unity, ZBrush, and more."
    },
    {
      question: "Are there any scholarships or financial aid options available?",
      answer: "Yes, we offer merit-based scholarships for deserving students. We also have flexible payment options and can assist with education loan procedures. Please speak with our admissions team for more details."
    },
    {
      question: "Do I need to have prior knowledge of animation or design?",
      answer: "No prior knowledge is required for most of our beginner-level courses. Our curriculum is designed to build your skills from the ground up. However, a basic understanding of computers and a passion for creativity are beneficial."
    },
    {
      question: "What is the batch size for classes?",
      answer: "We maintain small batch sizes, typically 15-20 students per batch, to ensure personalized attention and better learning outcomes for each student."
    },
    {
      question: "Can I see the work of previous students before enrolling?",
      answer: "Absolutely! We encourage prospective students to visit our center where we showcase student projects. You can also check our gallery section on the website or attend our open house events."
    }
  ];

  return (
    <section id="faq" className="section-container bg-arena-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="section-subtitle">FREQUENTLY ASKED QUESTIONS</h5>
          <h2 className="section-title">Get Your Doubts Cleared</h2>
          <p className="section-description">
            Find answers to commonly asked questions about our courses, admissions process, and career opportunities.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-arena-blue hover:text-arena-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Still have questions? Contact our admissions team for more information.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="tel:+919213404924" 
                className="flex items-center text-arena-blue hover:text-arena-orange"
              >
                <Phone size={18} className="mr-2" />
                +919213404924
              </a>
              <a 
                href="mailto:info@arenafaridabad.in" 
                className="flex items-center text-arena-blue hover:text-arena-orange"
              >
                <Mail size={18} className="mr-2" />
                info@arenafaridabad.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
