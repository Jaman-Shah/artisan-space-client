import React from "react";
import CraftCard from "../CraftCard/CraftCard";

const crafts = [
  {
    image: "pencil_sketch_portrait.jpg",
    item_name: "Pencil Sketch Portrait",
    subcategory_Name: "Portrait Drawing",
    short_description: "Capture lifelike portraits with pencil sketches.",
    price: 40,
    rating: 4.5,
    customization: true,
    processing_time: "1-2 weeks",
  },
  {
    image: "realistic_oil_portrait.jpg",
    item_name: "Realistic Oil Portrait",
    subcategory_Name: "Oil Painting",
    short_description: "Capture realism with oil on canvas.",
    price: 60,
    rating: 4.6,
    customization: true,
    processing_time: "2-3 weeks",
  },
  {
    image: "floral_watercolor_art.jpg",
    item_name: "Floral Watercolor Art",
    subcategory_Name: "Watercolour Painting",
    short_description: "Vibrant watercolor artwork featuring flowers.",
    price: 35,
    rating: 4.7,
    customization: false,
    processing_time: "1-2 weeks",
  },
  {
    image: "figure_charcoal_sketch.jpg",
    item_name: "Figure Charcoal Sketch",
    subcategory_Name: "Charcoal Sketching",
    short_description: "Expressive sketches using charcoal.",
    price: 30,
    rating: 4.4,
    customization: true,
    processing_time: "1-2 weeks",
  },
];

const CraftItemsSection = () => {
  return (
    <div className="relative -top-100">
      {crafts &&
        crafts.map((craft) => {
          return <CraftCard key={craft.image} craft={craft} />;
        })}
    </div>
  );
};

export default CraftItemsSection;
