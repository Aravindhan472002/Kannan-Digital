import React from 'react';
import footerLogo from '../Navbar/dark1.png';
import Banner from '../Navbar/Frame1.jpg';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaWhatsapp,
    FaLocationArrow,
} from 'react-icons/fa';
import { BiMobileAlt } from 'react-icons/bi';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div style={BannerImg} className="text-white mb-20">
            <div className="container">
                <div 
                data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 pv-44 pt-5">
                    {/* Company details */}
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3">
                            <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
                            Kannan Digitals
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, corporis!</p>
                    </div>

                    {/* Footer details */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="sm:text-xl text-xl font-bold mb-3"> 
                                    Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((link) => (
                                        <li
                                            key={link.title}
                                            className="cursor-pointer hover:text-primary translate-x-1 duration-300 text-gray-200"
                                        >
                                            <a href={link.link}>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaWhatsapp className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaYoutube className="text-3xl" />
                                </a>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Karur, Tamil Nadu</p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center gap-3">
                                        <BiMobileAlt />
                                        <p>+91 9626751139</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
