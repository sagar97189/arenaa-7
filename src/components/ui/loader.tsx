
import React, { useEffect, useState } from "react";
import { CircleDashed } from "lucide-react";

interface LoaderProps {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => {
  const [opacity, setOpacity] = useState("opacity-100");

  useEffect(() => {
    if (!isLoading) {
      // Start fade out animation when loading is complete
      const timeout = setTimeout(() => {
        setOpacity("opacity-0");
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setOpacity("opacity-100");
    }
  }, [isLoading]);

  if (!isLoading && opacity === "opacity-0") return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-arena-blue ${opacity} transition-opacity duration-500`}
    >
      <div className="relative flex flex-col items-center">
        {/* Design-focused animation */}
        <div className="relative w-24 h-24">
          <CircleDashed className="w-24 h-24 text-arena-orange animate-spin" strokeWidth={1} />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-arena-orange border-l-transparent animate-spin"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 bg-arena-orange rounded-full animate-pulse"></div>
          </div>
        </div>
        <h2 className="mt-4 text-xl font-bold text-white animate-pulse">Arena Animation</h2>
        <p className="text-white/70">Loading creative experiences...</p>
      </div>
    </div>
  );
};
