import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar.jsx";
import Hero from "./assets/components/Hero/Hero.jsx";
import Products from "./assets/components/Products/products.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./assets/components/TopProducts/TopProducts.jsx";
import Banner from "./assets/components/Banner/Banner.jsx";
import Subscribe from "./assets/components/Subscribe/Subscribe.jsx";
import Testimonial from "./assets/components/Testimonials/Testimonial.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";
import FramePage from "./assets/components/FramePage/FramePage.jsx";
import CupPage from "./assets/components/CupPage/CupPage.jsx";
import OrderDetails from "./assets/components/OrderDetails/OrderDetail.jsx";
import CupOrderDetails from "./assets/components/CupPage/CupOrderDetails.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                <TopProducts />
                <Banner />
                <Subscribe />
                <Testimonial />
              </>
            }
          />
          <Route path="/frames" element={<FramePage />} />
          <Route path="/cups/:type" element={<CupPage />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/order/:id" element={<CupOrderDetails />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
