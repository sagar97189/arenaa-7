import React from "react";
import { Briefcase, Award, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const StatCard = ({ icon: Icon, number, label, className }: {
  icon: React.ElementType;
  number: string;
  label: string;
  className?: string;
}) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow text-center", className)}>
      <div className="flex justify-center mb-3">
        <Icon className="text-arena-orange" size={32} />
      </div>
      <h3 className="text-3xl font-bold mb-1 text-arena-blue">{number}+</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const PlacementSection = () => {
  const companies = [
    { 
      name: "Wipro", 
      logo: "/images/WIpro.png"
    },
    { 
      name: "Myntra", 
      logo: "/images/Myntra.png"
    },
    { 
      name: "Netflix", 
      logo: "/images/netflix.png"
    },
    { 
      name: "Paytm", 
      logo: "/images/paytm.png"
    },
    { 
      name: "Cartoon Network Studios", 
      logo: "/images/cn-net.jpg"
    }
    ,
    { 
      name: "HCL", 
      logo: "/images/HCL.jpg"
    }
  ];

  const stats = [
    {
      icon: Briefcase,
      number: "500",
      label: "Successful Placements"
    },
    {
      icon: Award,
      number: "50",
      label: "Hiring Partners"
    },
    {
      icon: Users,
      number: "95",
      label: "Placement Rate (%)"
    }
  ];

  return (
    <section id="placements" className="section-container bg-arena-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="section-subtitle">PLACEMENT ASSISTANCE</h5>
          <h2 className="section-title">Launching Careers in Top Companies</h2>
          <p className="section-description">
            Our dedicated placement cell works tirelessly to connect students with industry opportunities. 
            We're proud of our track record in placing students at leading companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
        
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-12 text-center text-arena-blue">Our Recruiting Partners</h3>
          
          {/* Main wrapper with hidden overflow */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Marquee container */}
            <div className="flex w-full">
              {/* First track */}
              <div className="flex shrink-0 items-center animate-marquee py-8">
                {[...companies, ...companies].map((company, index) => (
                  <div 
                    key={`track1-${index}`} 
                    className="mx-12 w-[180px] flex items-center justify-center"
                  >
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="max-h-16 w-auto transition-all duration-300 transform hover:scale-105"
                    />
                  </div>
                ))}
              </div>
              
              {/* Second track (duplicate) */}
              <div className="flex shrink-0 items-center animate-marquee py-8">
                {[...companies, ...companies].map((company, index) => (
                  <div 
                    key={`track2-${index}`} 
                    className="mx-12 w-[180px] flex items-center justify-center"
                  >
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="max-h-16 w-auto transition-all duration-300 transform hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
