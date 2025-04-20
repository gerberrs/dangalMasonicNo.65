import React, { useEffect, useState } from "react";

const ThreeCardSection = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]);

  const handleScroll = () => {
    const cardStates = [0, 1, 2].map((index) => {
      const el = document.getElementById(`card-${index}`);
      return el && el.getBoundingClientRect().top <= window.innerHeight * 0.85;
    });
    setIsVisible(cardStates);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-8 text-white">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            id={`card-${index}`}
            className={`flex flex-col bg-[#2C2C2C] rounded-2xl overflow-hidden shadow-2xl h-full transform transition-all duration-700 ease-in-out
              ${
                isVisible[index]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-36" // Right to left translation
              }`}
          >
            {/* IMAGE */}
            <div className="w-full h-52 flex-shrink-0">
              <img
                src={
                  index === 0
                    ? "/firstPic.jpg"
                    : index === 1
                    ? "/secondPic.jpg"
                    : "/ThirdPic.jpg"
                }
                alt={
                  index === 0
                    ? "65th Anniversary"
                    : index === 1
                    ? "Centennial"
                    : "Creating Harmony"
                }
                className={`w-full h-52 object-cover ${
                  index === 2 ? "object-center" : "object-top"
                }`}
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col justify-between flex-grow p-5">
              <h3 className="text-sm md:text-base font-bold mb-2 text-center">
                {index === 0
                  ? "65th Anniversary of Dangal Masonic Lodge No. 62"
                  : index === 1
                  ? "Centennial of the Sovereign Grand Lodge"
                  : "Creating Harmony in Our Masonic Lodge"}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {index === 0
                  ? "As we approach 2024, we are filled with pride and excitement to celebrate the 65th anniversary of Dangal Masonic Lodge No. 62 of the Sovereign Grand Lodge of the Philippines Archipelago. Chartered in June 1959, our lodge has been a beacon of brotherhood, integrity, and service for over six decades."
                  : index === 1
                  ? "We celebrate the centennial of the Sovereign Grand Lodge of the Philippine Archipelago, a historic milestone that reminds us of the enduring legacy of Masonry in our country. May this occasion inspire us to rededicate ourselves to the principles of brotherhood and service, building a legacy of excellence, unity, and enlightenment for future generations."
                  : "Dangal Masonic Lodge believes that harmony is the cornerstone of our brotherhood. Harmony is not just about agreement; it's about understanding, respect, and working together towards a common goal. In our lodge, we strive to create an environment where every member feels valued and heard."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeCardSection;
