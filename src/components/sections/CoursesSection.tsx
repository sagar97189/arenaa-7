import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import ContactForm from "@/components/ContactForm";

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
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-arena-orange hover:bg-arena-blue text-white text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105">
                Enroll Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-0">
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
