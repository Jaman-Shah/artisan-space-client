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
    <div className="container mx-auto p-4 md:p-20">
      <div className="relative top-10 md:top-0 shadow-xl rounded-xl bg-white md:pl-72 border-2 pt-40 md:pt-8 p-8">
        <div className="flex flex-row md:flex-col items-center mb-2  gap-0 md:gap-4 md:items-start">
          <h1 className=" text-4xl font-extrabold ">{item_name}</h1>
          <p className="font-bold text-green-500 text-xl">{stock_status}</p>
          <p className="text-4xl md:text-[80px] text-yellow-400">{price} $</p>
        </div>
        <div className="flex flex-row md:flex-col justify-between">
          <p className="font-bold mb-2">Category:{subcategory_name}</p>
          <p className="font-bold mb-2">Descrpition:{short_description}</p>
        </div>
        <div className="flex flex-row md:flex-col justify-between">
          <p className="font-bold mb-2">Rating: {rating}</p>
          <p className="font-bold mb-2">Customization: {customization}</p>
        </div>
        <div className="flex flex-row md:flex-col justify-between">
          <p className="font-bold mb-2">processing time: {processing_time}</p>
          <button className="border hover:bg-green-400 p-2 rounded-2xl shadow-xl transition duration-500">
            Add to Cart
          </button>
        </div>
        <div className=" rounded-2xl  absolute top-10 md:top-1/2  left-1/2 md:left-10 p-4 bg-green-400 transform -translate-x-1/2 -translate-y-1/2 border border-green-500 h-1/2 md:h-2/3 w-1/2 md:w-1/3">
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
