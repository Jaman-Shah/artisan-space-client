import React from "react";
import Slider from "../Slider/Slider";
import CraftItemsSection from "../CraftItemsSection/CraftItemsSection";
import Footer from "../Footer/Footer";
import ContactSection from "../ContactSection/ContactSection";

const Home = () => {
  return (
    <div>
      <Slider />
      <CraftItemsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
