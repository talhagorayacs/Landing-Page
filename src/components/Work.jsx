import React from 'react';
import icon1 from "./workIcons/1.png";
import icon2 from "./workIcons/2.png";
import icon3 from "./workIcons/3.png";
import icon4 from "./workIcons/4.png";
import icon5 from "./workIcons/5.png";
import icon6 from "./workIcons/6.png";

import tech1 from "./techIcons/1.png";
import tech2 from "./techIcons/2.png";
import tech3 from "./techIcons/3.png";
import tech4 from "./techIcons/4.png";
import tech5 from "./techIcons/5.png";
import tech6 from "./techIcons/6.png";
import tech7 from "./techIcons/7.png";
import tech8 from "./techIcons/8.png";
import tech9 from "./techIcons/9.png";
import tech10 from "./techIcons/10.png";

const Work = () => {
  const icons = [
    { src: icon1, alt: "Icon 1" },
    { src: icon2, alt: "Icon 2" },
    { src: icon3, alt: "Icon 3" },
    { src: icon4, alt: "Icon 4" },
    { src: icon5, alt: "Icon 5" },
    { src: icon6, alt: "Icon 6" },
  ];

  const icons2 = [
    { src: tech1, alt: "Icon 1" },
    { src: tech2, alt: "Icon 2" },
    { src: tech3, alt: "Icon 3" },
    { src: tech4, alt: "Icon 4" },
    { src: tech5, alt: "Icon 5" },
    { src: tech6, alt: "Icon 6" },
    { src: tech7, alt: "Icon 7" },
    { src: tech8, alt: "Icon 8" },
    { src: tech9, alt: "Icon 9" },
    { src: tech10, alt: "Icon 10" },
  ];

  return (
    <section id="Work" className="h-auto bg-tech-bg bg-opacity-10 py-8 sm:py-12 lg:py-16 flex flex-col justify-center items-center p-4" data-aos="fade-right">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">Our Working Partners</h1>

      {/* Icon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 p-4">
        {icons.map((icon, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full max-w-[285px] h-auto p-4 flex items-center justify-center">
              <img
                src={icon.src}
                className="object-contain w-32 h-32"
                alt={icon.alt}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Technologies Section */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">Technologies We Use</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
        {icons2.map((icon, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full max-w-[285px] h-auto p-4 flex items-center justify-center">
              <img
                src={icon.src}
                className="object-contain w-32 h-32"
                alt={icon.alt}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
