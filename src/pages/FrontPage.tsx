import { useEffect, useRef, useState } from "react";
import LogoAndDescription from "@/components/LogoAndDescription";
import ValuesSection from "@/components/ValuesSection";
import ThreeCardLayout from "@/components/ThreeCardLayout";
import SecRegistrationCard from "@/components/SecRegistrationCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FrontPage = () => {
  const [showValues, setShowValues] = useState(false);
  const valuesSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShowValues(true);
        }
      },
      { threshold: 0.5 }
    );

    if (valuesSectionRef.current) {
      observer.observe(valuesSectionRef.current);
    }

    return () => {
      if (valuesSectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] uppercase">
      <LogoAndDescription />
      <ThreeCardLayout />
      <SecRegistrationCard />
      <ValuesSection
        showValues={showValues}
        valuesSectionRef={valuesSectionRef}
      />

      {/* Contact Us Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center py-8 bg-[#2C2C2C] text-white mt-10">
        <div className="text-center mb-4 sm:mb-0">
          <p className="text-lg mb-4">Contact Us</p>
          <div className="flex justify-center gap-6">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/share/1AALKnXzYP/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f text-3xl hover:text-[#FFD93D] transition-all"></i>
            </a>

            {/* Email Icon */}
            <a href="mailto:Dangal.Lodge62@gmail.com">
              <i className="fas fa-envelope text-3xl hover:text-[#FFD93D] transition-all"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
