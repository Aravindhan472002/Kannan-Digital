import React from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from '../Navbar/Frame1.jpg';
import Img2 from '../Navbar/Frame2.jpg';
import Img3 from '../Navbar/Frame3.jpg';
import Img4 from '../Navbar/Frame4.jpg';
import Img5 from '../Navbar/Frame5.jpg';
import { FaStar } from 'react-icons/fa';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "12*8 Frame",
    rating: 5.0,
    color: "White",
    aoDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "12*18 Frame",
    rating: 5.0,
    color: "Red",
    aoDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Normal Cup",
    rating: 5.0,
    color: "Green",
    aoDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Normal Cup",
    rating: 5.0,
    color: "Yellow",
    aoDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Normal Cup",
    rating: 5.0,
    color: "Pink",
    aoDelay: "800",
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm text-primary dark:text-primary-dark"
          >
            Discover our collection
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold text-black dark:text-white"
          >
            Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400 dark:text-gray-300"
          >
            Explore a variety of high-quality frames and cups.
          </p>
        </div>
        {/* Products Grid */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"
          >
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aoDelay}
                key={data.id}
                className="space-y-3 bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div key={data.id} className="space-y-3">
                  <h3 className="font-semibold text-black dark:text-white">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {data.color}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-black dark:text-white">
                      {data.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Frames Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/frames')}
              className="text-center mt-10 cursor-pointer bg-primary dark:bg-primary-dark text-white py-2 px-6 rounded-md hover:bg-primary-dark hover:dark:bg-primary transition-colors"
            >
              View All Frames
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
