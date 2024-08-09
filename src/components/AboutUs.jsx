import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importing the icons and slider images
import p1 from "./processIcons/1.png";
import p2 from "./processIcons/2.png";
import p3 from "./processIcons/3.png";
import p4 from "./processIcons/4.png";

import s1 from "./Slider/1.png";
import s2 from "./Slider/2.png";
import s3 from "./Slider/3.png";
import s4 from "./Slider/4.png";

import c1 from "./Ceo/1.png";
import c2 from "./Ceo/2.png";

function AboutUs() {
  // Array of work process icons
  const AboutUsIcons = [
    { src: p1, alt: "Icon 1" },
    { src: p2, alt: "Icon 2" },
    { src: p3, alt: "Icon 3" },
    { src: p4, alt: "Icon 4" },
  ];

  // Array of slider images
  const sliderImages = [
    { src: s1, alt: "Slide 1" },
    { src: s2, alt: "Slide 2" },
    { src: s3, alt: "Slide 3" },
    { src: s4, alt: "Slide 4" },
  ];

  // Slider settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="about-us" className="bg-tech-bg bg-opacity-10 p-4 md:p-8 lg:p-12">
      
      {/* Work Process Section */}
      <div className="flex flex-col justify-center items-center" data-aos="fade-right">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">Work Process</h1>
        <p className="text-base sm:text-lg md:text-xl" data-aos="fade-left">Get in touch with us!</p>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-4 mt-8">
          {AboutUsIcons.map((icon, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full sm:w-[200px] md:w-[250px] lg:w-[285px] h-auto p-2 flex items-center justify-center">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-full mt-12 md:mt-16 flex flex-col justify-center items-center" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">Our Trusted Clients</h1>
        <Slider {...sliderSettings} className="w-full max-w-4xl">
          {sliderImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center h-auto">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* CEO & Founder Section */}
      <div className="bg-gradient-to-b from-blue-800 to-blue-400 text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg max-w-5xl mx-auto mt-12 md:mt-16" data-aos="fade-in">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img src={c1} alt="CEO Image" className="w-36 h-36 sm:w-48 sm:h-48 rounded-full shadow-lg mb-4 md:mb-0 md:mr-6" />
          <div className="text-base sm:text-lg md:text-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">CEO & FOUNDER</h2>
            <p className="mb-4">
              Welcome to Dev Lodges! We're a dynamic software house, driven by the motto "Together we can." Our aim is to empower businesses for remarkable growth and success. With custom software solutions, we tackle unique challenges while staying ahead in the fast-evolving tech landscape.
            </p>
            <p className="mb-4">
              At Dev Lodges, client success is our North Star. By partnering with businesses, we’re dedicated to realizing their goals and fullest potential. Our journey is one of growth and enduring partnerships.
            </p>
            <p>
              Thank you for choosing Dev Lodges as your growth ally.
            </p>
            <p className="mt-4 font-bold">Best Regards,<br />Raza Rana</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default AboutUs;
