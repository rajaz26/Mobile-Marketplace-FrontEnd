import React from "react";
import Brands from "../../components/brands/Brands";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Brands />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
