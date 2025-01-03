import React from 'react';
import Logo from "../../components/krishna_logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/services" },
];

const DropdownLinks2 = [
  { id: 1, name: "Normal Printing Cup", link: "/#" },
  { id: 2, name: "Magic Cup", link: "/#" },
];

const DropdownLinks3 = [
  { id: 1, name: "Normal Flex", link: "/#" },
  { id: 2, name: "Quality Flex", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const DropdownLinks4 = [
  { id: 1, name: "12*8", link: "/#" },
  { id: 2, name: "12*15", link: "/#" },
  { id: 3, name: "10*6", link: "/#" },
  { id: 4, name: "12*18", link: "/#" },
  { id: 5, name: "24*18", link: "/#" },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-3 sm:py-0">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <a href="#" className="font-bold text-2xl sm:text-3xl flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            Kannan Graphics
          </a>
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="w-40 sm:w-60 transition-all duration-300 rounded-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
            />
            <IoMdSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 group-hover:text-primary" />
          </div>
          {/* Order Button */}
          <button
            onClick={() => alert("Ordering not available yet")}
            className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full flex items-center gap-2 hover:shadow-lg transition-all"
          >
            Order
            <FaCartShopping className="text-lg" />
          </button>
          {/* Dark Mode */}
          <DarkMode />
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-6 py-4">
            {/* Menu Links */}
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-all"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Dropdown Menus */}
            {[
              { name: "Cup Design", links: DropdownLinks2 },
              { name: "Frame Design", links: DropdownLinks4 },
              { name: "Flex Design", links: DropdownLinks3 },
              { name: "Trending", links: DropdownLinks },
            ].map((dropdown, idx) => (
              <li key={idx} className="relative group">
                <a href="#" className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-primary">
                  {dropdown.name}
                  <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded shadow-lg w-40">
                  <ul>
                    {dropdown.links.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="block px-4 py-2 hover:bg-primary/20 rounded"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
