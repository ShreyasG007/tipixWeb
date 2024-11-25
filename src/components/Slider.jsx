import React, { useState } from "react";

export default function ImageSlider() {
  // Slider data with two images per slide
  const slides = [
    {
      images: ["images/devloping.png", "images/ops.png"], // Two images per slide
      titles: ["Software Development", "Software Operation"],
      descriptions: [
        "We - Tipic ConsulTech, specialize in crafting customized software solutions for small and medium enterprises, catering to both retail clients and enterprise businesses alike. Our software applications are cost-effective.",
        "At Tipic ConsulTech, we specialize in delivering comprehensive software operational services tailored to the specific needs of small and medium enterprises. Our commitment lies in establishing a sturdy foundation of stability.",
      ],
    },
    {
      images: ["images/testing.png", "images/another_image.png"], // Two images per slide
      titles: ["Software Testing Solutions", "Another Service"],
      descriptions: [
        "Welcome to Quality World of Tipic ConsulTech, where we are passionately committed to ensuring the flawless performance and dependability of software products through meticulous testing services.",
        "Another service description goes here.",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 overflow-hidden relative">
      {/* "Our Services" Text on Top of Slider */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center text-white font-bold text-3xl z-10">
        <h1>Our Services</h1>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4 box-border"
            >
              {/* Container for Two Images */}
              <div className="flex space-x-4">
                {slide.images.map((image, idx) => (
                  <div key={idx} className="w-1/2">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={image}
                        alt={slide.titles[idx]}
                        className="w-full h-72 md:h-80 object-cover"
                      />
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg mt-4 text-center">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {slide.titles[idx]}
                      </h2>
                      <p className="mt-2 text-gray-600">
                        {slide.descriptions[idx]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
