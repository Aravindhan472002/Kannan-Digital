import React from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Img1 from "../Navbar/Frame1.jpg";
import Img2 from "../Navbar/Frame2.jpg";
import Img3 from "../Navbar/Frame3.jpg";
import Img4 from "../Navbar/Frame4.jpg";
import Img5 from "../Navbar/Frame5.jpg";

const FrameData = [
  {
    id: 1,
    img: Img1,
    title: "12*8 Frame",
    rating: 5.0,
    color: "White",
    price: 20,
  },
  {
    id: 2,
    img: Img2,
    title: "12*18 Frame",
    rating: 5.0,
    color: "Red",
    price: 30,
  },
  {
    id: 3,
    img: Img3,
    title: "Normal Cup",
    rating: 5.0,
    color: "Green",
    price: 10,
  },
  {
    id: 4,
    img: Img4,
    title: "Normal Cup",
    rating: 5.0,
    color: "Yellow",
    price: 10,
  },
  {
    id: 5,
    img: Img5,
    title: "Normal Cup",
    rating: 5.0,
    color: "Pink",
    price: 10,
  },
];

const FramePage = () => {
  const navigate = useNavigate();

  const handleOrderClick = (frame) => {
    navigate("/order-details", { state: { frame } });
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">Our Frames</h1>
          <p className="text-xs text-gray-400">
            Browse through our collection of high-quality frames.
          </p>
        </div>

        {/* Frame Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center"
        >
          {FrameData.map((frame) => (
            <div
              key={frame.id}
              className="space-y-3 bg-white shadow-md p-4 rounded-lg
              hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={frame.img}
                alt={frame.title}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <h3 className="font-semibold text-lg">{frame.title}</h3>
              <p className="text-sm text-gray-600">Color: {frame.color}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{frame.rating}</span>
                </div>
                <p className="font-semibold">${frame.price}</p>
              </div>
              <button
                onClick={() => handleOrderClick(frame)}
                className="bg-primary text-white py-2 px-4 rounded-md
                hover:bg-primary-dark transition-colors duration-300"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FramePage;
