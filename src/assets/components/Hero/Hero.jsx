import React from 'react'
import Image1 from "../Navbar/Darkmode.jpg"
import Image2 from "../Navbar/light mode.png"
import Image3 from "../Navbar/light mode.png"
import Slider from "react-slick"

const ImageList =[
{
  id: 1,
  img: Image1,
  title: "upto 10% off on all Frames",
  description: "dhdhdhdhdhhdhh",
},
{
  id: 1,
  img: Image2,
  title: "upto 10% off on all Cup",
  description: "dhdhdhdhdhhdhh",
},
{
  id: 1,
  img: Image3,
  title: "upto 10% off on all Flex",
  description: "dhdhdhdhdhhdhh",
},

]
const Hero = () => {
  var settings = {
    dots: false,
    arrows: false, 
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false, 
    pauseOnFocus:true,

  };
  return (
    <div className="relative overflow-hidden min-h-[550px]
    sm:min-h-[550px] bg-gray-100 flex justify-center
    items-center dark:bg-gra-950 dark:text-white
    duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40
      absolute -top-1/2 right-0 rounded-3xl rotate-45">
       { /*background pattern */}
      </div>
        { /*hero section */}
        <div className="container pb-8 sm:pb-0">
          <Slider{...settings}>
            {ImageList.map((data) => (
              <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>

              {/*text content section */}
              <div className='flex flex-col justify-center gap-4
              pt-12 sm:pt-0 text-center sm:text-left
              oeder-2 sm:order-1 relative z-10'>
                <h1 
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true" 
                className='text-5xl sm:text-6xl
                lg:text-7xl font-bold'>
                  {data.title}</h1>
                <p 
                 data-aos="fade-up"
                 data-aos-duration="500"
                 data-aos-delay="100" 
                 className='text-sm'>{data.description}
                </p>
                <div
                 data-aos="fade-up"
                 data-aos-duration="500"
                 data-aos-delay="300" 
                >
                  <button className='bg-gradient-to-r
                  from-primary to bg-secondary hover:scale-105
                  duration-200 text-white py-2 px-4rounded full'>
                    Order Now
                  </button>
                </div>
              </div>
               {/*Image section */}
               <div className='order-1 sm:order-2'>
                <div
                data-aos="zoom-in"
                data-aos-once="true" 
                className='relative z-10'>
                  <img src={data.img} alt="" 
                  className='w-[300px] h-[450px] sm:h-[400px]
                  sm:w-[300px] sm:scale-105 lg:scale-120 object-contain mx-auto'/>
                </div>
               </div>
            </div>
          </div>
            ))}        
          </Slider>     
        </div>
      </div> 
  )
}

export default Hero
