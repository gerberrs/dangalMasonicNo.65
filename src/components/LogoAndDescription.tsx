import { useEffect, useState } from "react";

const LogoAndDescription = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-12 text-white font-poppins bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A]">
      <div className="flex flex-col items-center md:flex-row space-y-8 md:space-y-0 md:space-x-12 max-w-screen-lg mx-auto">
        {/* Logo with Slide-in Animation */}
        <div
          className={`flex-shrink-0 transition-all duration-1000 transform ${
            hasMounted
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        >
          <img
            src="/masonicLogo.png"
            alt="Masonic Logo"
            className="w-96 h-auto shadow-2xl transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Description with Fade-in Animation */}
        <div
          className={`flex flex-col justify-center items-center md:items-start text-center md:text-left transition-all duration-1000 ${
            hasMounted
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4 text-shadow">
            DANGAL MASONIC LODGE NO. 62
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed tracking-wide uppercase">
            In Tagalog, <span className="italic">"Dangal"</span> means Honor.
            This word encapsulates the essence of our lodge and the values we
            hold dear. Honor in Freemasonry is about living with integrity,
            respecting others, and striving for excellence in all our endeavors.
            It is about being true to our word, upholding justice, and serving
            our community with humility and dedication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoAndDescription;
