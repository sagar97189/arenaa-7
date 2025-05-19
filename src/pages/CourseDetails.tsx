import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const courses = [
  "Animation & VFX Prime",
  "Game Art & Design",
  "Graphic & Web Design",
  "Digital Marketing",
  "3D Animation Mastery",
  "Visual Effects & Compositing",
  "Motion Graphics & Animation",
  "UI/UX Design Professional"
];

const ContactInfo = ({ courseName }: { courseName: string }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg">
      <h3 className="text-arena-blue text-2xl font-bold mb-6">Contact Us for {courseName}</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Get in Touch</h4>
          <p className="text-gray-600 mb-4">
            Reach out to us directly through call or WhatsApp for quick assistance and enrollment details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a 
            href="tel:+919213404924"
            className="flex items-center justify-center gap-3 bg-arena-orange hover:bg-arena-blue text-white py-4 px-6 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">Call Now</span>
          </a>
          
          <a 
            href="https://wa.me/919213404924"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Contact Details</h4>
          <div className="space-y-2 text-gray-600">
            <p>Phone: +91 92134 04924</p>
            <p>Email: info@arenafaridabad.in</p>
            <p>Address: Arena Animation Sector 7, Faridabad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const location = useLocation();
  
  // Get course data from location state
  const courseData = location.state?.courseData || {
    title: "Animation & VFX Prime",
    image: "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    duration: "24 Months",
    students: "120+",
    rating: "4.9",
    description: "Master the art of animation and visual effects with industry-standard tools like Maya, After Effects, and Nuke.",
    fullDescription: "Our Animation & VFX Prime program is designed to prepare you for a successful career in the animation and visual effects industry. You'll learn from industry professionals and get hands-on experience with the latest software and techniques. By the end of the program, you'll have a professional portfolio showcasing your skills to potential employers.",
    features: [
      "Industry-aligned curriculum",
      "Learn from working professionals",
      "Portfolio development",
      "Job-ready skills training",
      "Access to latest software",
      "Professional networking opportunities",
      "Placement assistance"
    ],
    outcomes: [
      "Create professional-quality animations",
      "Develop visual effects for film and TV",
      "Design 3D models and characters",
      "Composite and edit video sequences",
      "Work effectively in production pipelines"
    ],
    syllabus: [
      {
        semester: "Semester 1",
        subjects: [
          "Introduction to Animation Principles",
          "Digital Art Fundamentals",
          "Color Theory and Composition",
          "Storyboarding Basics"
        ]
      },
      {
        semester: "Semester 2",
        subjects: [
          "2D Animation",
          "Introduction to 3D Modeling",
          "Texturing Fundamentals",
          "Basic Rigging"
        ]
      },
      {
        semester: "Semester 3",
        subjects: [
          "Character Animation",
          "Advanced Modeling Techniques",
          "Visual Effects Fundamentals",
          "Lighting and Rendering"
        ]
      },
      {
        semester: "Semester 4",
        subjects: [
          "Compositing",
          "Post-production Workflows",
          "Portfolio Development",
          "Industry Integration Project"
        ]
      }
    ]
  };

  // If courseId doesn't match the course title slug, redirect to 404
  const expectedSlug = courseData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  if (courseId !== expectedSlug) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-arena-blue text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-arena-blue/95 to-arena-blue/70"></div>
            <div
              style={{ backgroundImage: `url('${courseData.image}')` }}
              className="absolute inset-0 bg-cover bg-center"
            ></div>
          </div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-3xl">
              <h5 className="text-arena-orange font-bold text-xl mb-3">COURSE DETAILS</h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {courseData.title}
              </h1>
              <p className="text-lg opacity-90 mb-8">
                {courseData.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-sm">Duration</p>
                  <p className="font-bold">{courseData.duration}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-sm">Students Enrolled</p>
                  <p className="font-bold">{courseData.students}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-sm">Rating</p>
                  <p className="font-bold">{courseData.rating}/5.0</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-arena-orange hover:bg-white hover:text-arena-blue text-white text-lg py-6 px-8">
                      Enroll Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] p-0">
                    <ContactInfo courseName={courseData.title} />
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="border-arena-blue text-arena-blue hover:bg-white hover:text-arena-orange text-lg py-6 px-8">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-arena-blue mb-6">About This Course</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">{courseData.fullDescription || courseData.description}</p>
                  
                  <h3 className="text-2xl font-bold text-arena-blue mt-10 mb-5">Key Features</h3>
                  <ul className="space-y-3">
                    {courseData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-arena-orange rounded-full mt-2 mr-3"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {courseData.outcomes && (
                    <>
                      <h3 className="text-2xl font-bold text-arena-blue mt-10 mb-5">Learning Outcomes</h3>
                      <ul className="space-y-3">
                        {courseData.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-arena-orange rounded-full mt-2 mr-3"></span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-arena-lightgray p-6 rounded-lg shadow-lg sticky top-24">
                  <h3 className="text-xl font-bold text-arena-blue mb-4">Course Curriculum</h3>
                  
                  <div className="space-y-4">
                    {courseData.syllabus?.map((sem, index) => (
                      <div key={index} className="bg-white p-4 rounded-md shadow">
                        <h4 className="font-bold text-arena-orange mb-2">{sem.semester}</h4>
                        <ul className="space-y-2">
                          {sem.subjects.map((subject, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start">
                              <span className="inline-block w-1.5 h-1.5 bg-arena-orange rounded-full mt-1.5 mr-2"></span>
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-arena-orange hover:bg-arena-blue text-white w-full mt-6">
                        Apply Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] p-0">
                      <ContactInfo courseName={courseData.title} />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetails;
