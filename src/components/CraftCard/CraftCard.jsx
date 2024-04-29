import React, { useContext } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { ThemeContext } from "../../providers/ThemeProvider";

const CraftCard = ({ craft }) => {
  const { darkValue } = useContext(ThemeContext);
  const {
    _id,
    image,
    item_name,
    price,
    rating,
    subcategory_name,
    short_description,
  } = craft;
  return (
    <Slide direction="up" triggerOnce>
      <div
        className={`pt-44  md:pt-36 px-6 pb-4 shadow-xl mt-28 md:mt-20 md:my-12 rounded-xl border-2 ${
          darkValue ? "border-orange-500" : "border-black"
        }  relative`}
      >
        <div className="absolute  w-4/5 top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={image} alt="" className="w-full  rounded-xl mb-4" />
        </div>
        <div className="text-center ">
          <h3 className="font-bold  text-3xl"> {item_name}</h3>
          <hr className="my-4 border border-red-600" />
          <h4 className="my-4 text-xl text-blue-400">
            Category : {subcategory_name}
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
          <Link
            to={`/craftdetails/${_id}`}
            className={`bg-transparent border-2 border-blue-600 ${
              darkValue ? "text-white" : ""
            } text-black p-3  hover:bg-blue-600 transition duration-700`}
          >
            View Details
          </Link>
        </div>
      </div>
    </Slide>
  );
};

export default CraftCard;
