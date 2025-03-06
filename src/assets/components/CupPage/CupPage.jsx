import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Img1 from "../Navbar/normalcup1.jpg";
import Img2 from "../Navbar/normalcup3.jpg";
import Img3 from "../Navbar/normalcup2.jpg";
import Img4 from "../Navbar/magiccup1.jpeg";
import Img5 from "../Navbar/magiccup2.jpeg";
import Img6 from "../Navbar/magiccup3.jpg";

const CupData = [
  {
    id: 1,
    img: Img1,
    title: "Normal Cup - Style 1",
    description: "Durable and stylish normal cup - Style 1.",
    type: "normal",
    rating: 4.8,
    price: 180,
  },
  {
    id: 2,
    img: Img2,
    title: "Normal Cup - Style 2",
    description: "Durable and stylish normal cup - Style 2.",
    type: "normal",
    rating: 4.9,
    price: 120,
  },
  {
    id: 3,
    img: Img3,
    title: "Normal Cup - Style 3",
    description: "Durable and stylish normal cup - Style 3.",
    type: "normal",
    rating: 5.0,
    price: 150,
  },
  {
    id: 4,
    img: Img4,
    title: "Magic Cup - Style 1",
    description: "Special cup that changes with heat - Style 1.",
    type: "magic",
    rating: 4.7,
    price: 270,
  },
  {
    id: 5,
    img: Img5,
    title: "Magic Cup - Style 2",
    description: "Special cup that changes with heat - Style 2.",
    type: "magic",
    rating: 4.8,
    price: 220,
  },
  {
    id: 6,
    img: Img6,
    title: "Magic Cup - Style 3",
    description: "Special cup that changes with heat - Style 3.",
    type: "magic",
    rating: 5.0,
    price: 250,
  },
];

const CupPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const filteredCups = CupData.filter((cup) => cup.type === type);

  const handleOrderClick = (cup) => {
    navigate(`/order/${cup.id}`, { state: { cup } });
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">
            {type === "normal" ? "Normal Cups" : "Magic Cups"}
          </h1>
          <p className="text-xs text-gray-400">
            Browse through our collection of high-quality {type} cups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
          {filteredCups.map((cup) => (
            <div key={cup.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={cup.img}
                alt={cup.title}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <h3 className="font-semibold text-lg text-black dark:text-black">
                {cup.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-700">
                {cup.description}
              </p>
              <div className="flex justify-between items-center my-2">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="dark:text-black text-black">{cup.rating}</span>
                </div>
                <p className="font-semibold dark:text-black text-black">
                  ₹{cup.price}
                </p>
              </div>
              <button
                onClick={() => handleOrderClick(cup)}
                className="bg-primary text-white py-2 px-4 rounded-full hover:bg-secondary transition-all"
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

export default CupPage;
