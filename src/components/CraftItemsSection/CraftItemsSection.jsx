import React from "react";
import CraftCard from "../CraftCard/CraftCard";

const crafts = [
  {
    image:
      "https://img.freepik.com/free-vector/watercolor-oil-painting-background_23-2150133506.jpg",
    item_name: "Pencil Sketch Portrait",
    subcategory_Name: "Portrait Drawing",
    short_description: "Capture lifelike portraits with pencil sketches.",
    price: 40,
    rating: 4.5,
    customization: true,
    processing_time: "1-2 weeks",
  },
  {
    image:
      "https://img.freepik.com/free-vector/watercolor-oil-painting-background_23-2150133506.jpg",
    item_name: "Realistic Oil Portrait",
    subcategory_Name: "Oil Painting",
    short_description: "Capture realism with oil on canvas.",
    price: 60,
    rating: 4.6,
    customization: true,
    processing_time: "2-3 weeks",
  },
  {
    image:
      "https://img.freepik.com/free-vector/watercolor-oil-painting-background_23-2150133506.jpg",
    item_name: "Floral Watercolor Art",
    subcategory_Name: "Watercolour Painting",
    short_description: "Vibrant watercolor artwork featuring flowers.",
    price: 35,
    rating: 4.7,
    customization: false,
    processing_time: "1-2 weeks",
  },
  {
    image:
      "https://img.freepik.com/free-vector/watercolor-oil-painting-background_23-2150133506.jpg",
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
    <div>
      <div className="p-4 md:p-20">
        <div className="divider divider-primary">
          <h3 className="text-2xl md:text-4xl font-extrabold">
            Let's <span className="text-blue-500">See</span> Our{" "}
            <span className="text-orange-400">Items</span>
          </h3>
        </div>
        <p className="text-center font-bold">
          We are determined to provide you the attracting arts and crafts with
          cheap cost. But don't worry they are unique and looking good. We are
          determined to provide you the attracting arts and crafts with cheap
          cost. But don't worry they are unique and looking good. We are
          determined to provide you the attracting arts and crafts with cheap
          cost. But don't worry they are unique and looking good
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {crafts &&
          crafts.map((craft) => {
            return <CraftCard key={craft.image} craft={craft} />;
          })}
      </div>
    </div>
  );
};

export default CraftItemsSection;
