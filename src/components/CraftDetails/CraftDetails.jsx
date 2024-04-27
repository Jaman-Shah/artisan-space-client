import React from "react";
import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
  const loadedCraft = useLoaderData();

  const {
    customization,
    image,
    item_name,
    price,
    processing_time,
    rating,
    short_description,
    stock_status,
    subcategory_name,
    user_name,
  } = loadedCraft;

  console.log(loadedCraft);
  return (
    <div className="container mx-auto p-20">
      <div className="relative shadow-xl rounded-xl bg-white pl-72 border-2 p-8">
        <h1 className=" text-4xl font-extrabold  mb-4">{item_name}</h1>
        <p className="font-bold text-green-500 text-xl">{stock_status}</p>
        <p className="text-[80px] text-yellow-400">{price} $</p>
        <p className="font-bold mb-2">Category:{subcategory_name}</p>
        <p className="font-bold mb-2">Descrpition:{short_description}</p>
        <p className="font-bold mb-2">Rating: {rating}</p>
        <p className="font-bold mb-2">Customization: {customization}</p>
        <p className="font-bold mb-2">processing time: {processing_time}</p>
        <button className="border hover:bg-green-400 p-2 rounded-2xl shadow-xl transition duration-500">
          Add to Cart
        </button>
        <div className="rounded-2xl  absolute top-1/2 left-10 p-4 bg-green-400 transform -translate-x-1/2 -translate-y-1/2 border border-green-500 h-2/3 w-1/3">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-2xl"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
