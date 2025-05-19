
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
  className?: string;
  onClick: () => void;
}

const GalleryItem = ({ image, title, category, className, onClick }: GalleryItemProps) => {
  return (
    <div 
      className={cn("relative group cursor-pointer overflow-hidden rounded-lg", className)}
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-arena-orange">{category}</p>
      </div>
    </div>
  );
};

const StudentWorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedWork, setSelectedWork] = useState<null | {
    image: string;
    title: string;
    category: string;
    description: string;
  }>(null);
  
  const categories = [
    { id: "all", name: "All Works" },
    { id: "3d", name: "3D Animation" },
    { id: "vfx", name: "VFX" },
    { id: "game", name: "Game Art" },
    { id: "graphics", name: "Graphic Design" }
  ];
  
  const works = [
    {
      image: "/images/forest.png",
      title: "Forest Adventure Game",
      category: "game",
      description: "A 3D game environment created by our students using Unreal Engine. This project demonstrates advanced lighting and texturing techniques."
    },
    {
      image: "/images/character.png",
      title: "Character Animation Reel",
      category: "3d",
      description: "Character animation showcase featuring a range of emotions and movements. Created using Maya and Blender by our advanced animation students."
    },
    {
      image: "/images/product.jpg",
      title: "Brand Identity Project",
      category: "graphics",
      description: "A comprehensive brand identity design including logo, color palette, typography, and marketing materials for a fictional company."
    },
    {
      image: "/images/space.png",
      title: "Space Station VFX",
      category: "vfx",
      description: "A sci-fi visual effects composition created with Adobe After Effects and Nuke, featuring particle systems and compositing techniques."
    },
    {
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Fantasy Character Design",
      category: "3d",
      description: "Original character design and 3D modeling for a fantasy game, showcasing texturing and rigging skills learned in our advanced courses."
    },
    {
      image: "/images/ui-ux.jpg",
      title: "Mobile UI/UX Design",
      category: "graphics",
      description: "User interface and experience design for a mobile application, demonstrating wireframing, prototyping, and visual design principles."
    }
  ];
  
  const filteredWorks = activeCategory === "all" 
    ? works 
    : works.filter(work => work.category === activeCategory);
    
  const openWorkDetail = (work: typeof works[0]) => {
    setSelectedWork(work);
  };
  
  const closeWorkDetail = () => {
    setSelectedWork(null);
  };

  return (
    <section id="gallery" className="section-container bg-arena-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="section-subtitle">STUDENT SHOWCASE</h5>
          <h2 className="section-title">Our Students' Creative Works</h2>
          <p className="section-description">
            Explore the impressive portfolio of projects created by our talented students across various disciplines.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full transition-all",
                  activeCategory === category.id 
                    ? "bg-arena-orange text-white" 
                    : "bg-white text-arena-blue hover:bg-arena-blue/10"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <GalleryItem
              key={index}
              image={work.image}
              title={work.title}
              category={work.category === "3d" ? "3D Animation" : 
                        work.category === "vfx" ? "VFX" : 
                        work.category === "game" ? "Game Art" : "Graphic Design"}
              onClick={() => openWorkDetail(work)}
            />
          ))}
        </div>
        
        {/* Modal for selected work */}
        {selectedWork && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeWorkDetail}>
            <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
              <img 
                src={selectedWork.image} 
                alt={selectedWork.title} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-arena-blue">{selectedWork.title}</h3>
                    <p className="text-arena-orange">{
                      selectedWork.category === "3d" ? "3D Animation" : 
                      selectedWork.category === "vfx" ? "VFX" : 
                      selectedWork.category === "game" ? "Game Art" : "Graphic Design"
                    }</p>
                  </div>
                  <button 
                    onClick={closeWorkDetail}
                    className="text-gray-500 hover:text-arena-orange"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="mt-4 text-gray-600">{selectedWork.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentWorksSection;
