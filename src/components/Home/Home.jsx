import React from "react";
import Slider from "../Slider/Slider";
import CraftItemsSection from "../CraftItemsSection/CraftItemsSection";
import ContactSection from "../ContactSection/ContactSection";
import PaymentMethodSection from "../PaymentMethodSection/PaymentMethodSection";
import CraftCategories from "../CraftCategories/CraftCategories";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="px-2">
        <CraftItemsSection />
        <CraftCategories />
        <ContactSection />
        <PaymentMethodSection />
      </div>
    </div>
  );
};

export default Home;
