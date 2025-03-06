import React from 'react';
import Image1 from "../Navbar/HeroFrame.jpg";
import Image2 from "../Navbar/HeroCup.jpg";
import Image3 from "../Navbar/HeroFlex.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 10% off on All Frames",
    description: "Free Delivery upto 10km",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 10% off on All Cups",
    description: "Free Delivery upto 10km",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 10% off on All Flex",
    description: "Free Delivery upto 10km",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[550px] flex justify-center items-center transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      {/* Background Pattern */}
      <div
        className="h-[700px] w-[700px] absolute -top-1/2 right-0 rounded-3xl rotate-45 bg-primary/40 dark:bg-secondary/40"
      ></div>

      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text Content Section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary text-black dark:text-white py-2 px-6 rounded-full flex items-center gap-2 hover:shadow-lg transition-all">
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[450px] sm:h-[400px] sm:w-[300px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
