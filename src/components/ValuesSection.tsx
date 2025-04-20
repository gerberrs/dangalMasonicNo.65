import React, { useEffect, useState } from "react";

type ValuesSectionProps = {
  showValues: boolean;
  valuesSectionRef: React.RefObject<HTMLDivElement>;
};

const ValuesSection: React.FC<ValuesSectionProps> = ({
  showValues,
  valuesSectionRef,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = valuesSectionRef.current;
      if (section) {
        const top = section.getBoundingClientRect().top;
        const isInView = top <= window.innerHeight * 0.85;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [valuesSectionRef]);

  return (
    <div ref={valuesSectionRef} className="text-white py-12 w-full">
      <h2 className="text-4xl font-bold text-center text-shadow tracking-wide mb-10">
        Values Aligned with Freemasonry
      </h2>

      <div
        className={`w-full flex flex-col sm:flex-row gap-8 justify-center transition-all duration-1000 ease-out ${
          // Updated to ease-out and adjusted duration
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"
        }`}
      >
        <div className="flex w-full sm:w-[30%]  justify-center">
          <div className="bg-[#2C2C2C] p-8 text-center shadow-md hover:scale-[1.02] transition-transform w-full rounded-lg">
            <h3 className="text-lg font-semibold text-white mt-4">Liberty</h3>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              We believe in freedom of thought, speech, and action. Our lodge
              supports knowledge and personal growth without oppression.
            </p>
          </div>
        </div>
        <div className="flex w-full sm:w-[30%]  justify-center">
          <div className="bg-[#2C2C2C] p-8 text-center shadow-md hover:scale-[1.02] transition-transform w-full rounded-lg">
            <h3 className="text-lg font-semibold text-white mt-4">Equality</h3>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Every man is created equal. We foster respect and dignity,
              regardless of background or status.
            </p>
          </div>
        </div>
        <div className="flex w-full sm:w-[30%]  justify-center">
          <div className="bg-[#2C2C2C] p-8 text-center shadow-md hover:scale-[1.02] transition-transform w-full rounded-lg">
            <h3 className="text-lg font-semibold text-white mt-4">
              Fraternity
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Brotherhood and support. We build trust, respect, and shared
              values in a strong community. Our lodge emphasizes unity and
              collaboration that goes beyond simple fellowship — it's about
              lifting one another, creating a legacy of integrity, and standing
              together through challenges and triumphs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
