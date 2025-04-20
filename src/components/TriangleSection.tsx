import React, { useEffect, useState } from "react";

const TriangleSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="py-4 text-center text-white">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <img
          src="/Peace.png"
          alt="Triangle Symbol"
          className="mx-auto w-60 sm:w-60 md:w-72 lg:w-80"
        />
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white tracking-wide">
          Respeto. Pag Mamahal. Kapayapaan.
        </p>
      </div>
    </div>
  );
};

export default TriangleSection;
