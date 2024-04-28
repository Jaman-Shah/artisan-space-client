import React from "react";
import Slider from "../Slider/Slider";
import CraftItemsSection from "../CraftItemsSection/CraftItemsSection";
import Footer from "../Footer/Footer";
import ContactSection from "../ContactSection/ContactSection";
import PaymentMethodSection from "../PaymentMethodSection/PaymentMethodSection";

const Home = () => {
  return (
    <div>
      <Slider />
      <CraftItemsSection />
      <ContactSection />
      <PaymentMethodSection />
    </div>
  );
};

export default Home;
