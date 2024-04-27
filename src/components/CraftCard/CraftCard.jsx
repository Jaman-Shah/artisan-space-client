import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineStarRate } from "react-icons/md";

const CraftCard = ({ craft }) => {
  const {
    image,
    item_name,
    price,
    rating,
    subcategory_Name,
    short_description,
  } = craft;
  return (
    <div className="p-4 shadow-xl rounded-3xl  ">
      <div>
        <img src={image} alt="" className="w-full  rounded-3xl mb-4" />
      </div>
      <div className="text-center ">
        <h3 className="font-bold  text-3xl"> {item_name}</h3>
        <hr className="my-4 border border-red-600" />
        <h4 className="my-4 text-2xl text-blue-400">
          Category:{subcategory_Name}
        </h4>
        <p className="my-4 font-bold">{short_description}</p>
      </div>
      <div className="flex justify-between px-4">
        <h4 className="font-bold flex items-center">
          <p> Price : {price}</p>
          <RiMoneyDollarCircleLine className="text-yellow-400" />
        </h4>
        <h4 className="font-bold flex items-center">
          <p> Rating : {rating}</p>
          <MdOutlineStarRate className="text-yellow-400" />
        </h4>
      </div>
      <div className="text-center my-4">
        <button className="bg-blue-600 p-3 rounded-3xl text-white hover:bg-orange-400">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CraftCard;
