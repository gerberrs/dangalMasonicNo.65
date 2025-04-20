import React, { useEffect, useState } from "react";

const SecRegistrationCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById("sec-registration-card");
      if (card) {
        const top = card.getBoundingClientRect().top;
        const isInView = top <= window.innerHeight * 0.85;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="sec-registration-card"
      className={`max-w-lg mx-auto bg-[#2C2C2C] text-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 ease-in-out 
        ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"
        }`}
    >
      <img
        src="/dangalCertification.jpg"
        alt="SEC Registration"
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6 flex flex-col justify-center items-center h-full">
        <h3 className="text-white text-base md:text-lg font-bold mb-3 text-center">
          🎉 We’re Officially Certified!
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed text-center">
          Dangal Lodge No. 62 is now officially registered with the Securities
          and Exchange Commission (SEC), marking a major step forward in
          transparency and legitimacy. This milestone boosts trust, opens new
          opportunities for growth, and strengthens the lodge’s commitment to
          service and community impact.
        </p>
      </div>
    </div>
  );
};

export default SecRegistrationCard;
