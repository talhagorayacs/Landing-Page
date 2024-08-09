import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // whether animation should happen only once
    });
  }, []);

  return (
    <section
      id="Services"
      className="flex flex-col justify-center items-center border-b border-gray-300 pt-24 pb-12"
    >
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Web Development */}
        <div data-aos="fade-right">
          <div className="w-96 h-72 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-center bg-w-d bg-no-repeat bg-cover backface-hidden">
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                  <h2 className="text-white text-2xl font-bold opacity-70">Web Development</h2>
                </div>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-800 text-white text-center p-6 rotate-y-180 backface-hidden">
                <h3 className="text-xl font-semibold">More Information</h3>
                <p className="mt-4">
                  Learn about the latest technologies and tools used in web development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* App Development */}
        <div data-aos="fade-down">
          <div className="w-96 h-72 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-center bg-m-d bg-no-repeat bg-cover backface-hidden">
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                  <h2 className="text-white text-2xl font-bold opacity-70">App Development</h2>
                </div>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-800 text-white text-center p-6 rotate-y-180 backface-hidden">
                <h3 className="text-xl font-semibold">More Information</h3>
                <p className="mt-4">
                  Learn about the latest technologies and tools used in app development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ecommerce Development */}
        <div data-aos="fade-left">
          <div className="w-96 h-72 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-center bg-e-c bg-no-repeat bg-cover backface-hidden">
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                  <h2 className="text-white text-2xl font-bold opacity-70">Ecommerce Development</h2>
                </div>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-800 text-white text-center p-6 rotate-y-180 backface-hidden">
                <h3 className="text-xl font-semibold">More Information</h3>
                <p className="mt-4">
                  Learn about the latest technologies and tools used in ecommerce development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* iOS Development */}
        <div data-aos="fade-right">
          <div className="w-96 h-72 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-center bg-i-d bg-no-repeat bg-cover backface-hidden">
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                  <h2 className="text-white text-2xl font-bold opacity-70">iOS Development</h2>
                </div>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-800 text-white text-center p-6 rotate-y-180 backface-hidden">
                <h3 className="text-xl font-semibold">More Information</h3>
                <p className="mt-4">
                  Learn about the latest technologies and tools used in iOS development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* UI/UX Designing */}
        <div data-aos="fade-up">
          <div className="w-96 h-72 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-center bg-u-i bg-no-repeat bg-cover backface-hidden">
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                  <h2 className="text-white text-2xl font-bold opacity-70">UI/UX Designing</h2>
                </div>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-800 text-white text-center p-6 rotate-y-180 backface-hidden">
                <h3 className="text-xl font-semibold">More Information</h3>
                <p className="mt-4">
                  Learn about the latest technologies and tools used in UI/UX design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div data-aos="fade-left">
          <div className="w-96 h-72 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-center bg-s-t bg-no-repeat bg-cover backface-hidden">
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                  <h2 className="text-white text-2xl font-bold opacity-70">Quality Assurance</h2>
                </div>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-800 text-white text-center p-6 rotate-y-180 backface-hidden">
                <h3 className="text-xl font-semibold">More Information</h3>
                <p className="mt-4">
                  Learn about the latest technologies and tools used in quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
