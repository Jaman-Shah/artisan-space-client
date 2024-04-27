import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineStarRate } from "react-icons/md";

const IndividualCraftCard = ({ craft, setLoadedCrafts, loadedCrafts }) => {
  const {
    _id,
    customization,
    image,
    item_name,
    price,
    rating,
    short_description,
    stock_status,
    subcategory_name,
  } = craft;

  const handleCardDelete = () => {
    fetch(`http://localhost:5003/crafts/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remainingCrafts = loadedCrafts.filter(
          (filteredCraft) => filteredCraft._id !== _id
        );
        setLoadedCrafts(remainingCrafts);
      });
  };
  return (
    <div className="p-4 shadow-xl rounded-3xl  ">
      <div>
        <img src={image} alt="" className="w-full  rounded-3xl mb-4" />
      </div>
      <div className="text-center ">
        <h3 className="font-bold  text-3xl"> {item_name}</h3>
        <hr className="my-4 border border-red-600" />
        <h4 className="my-4 text-2xl text-blue-400">
          Category:{subcategory_name}
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
      <div className="flex justify-between mt-2">
        <p>Customizable : {customization}</p>
        <p>Stoke Status : {stock_status}</p>
      </div>
      <div className="flex justify-center gap-5 my-4">
        <button className="bg-green-600 p-3 rounded-3xl text-white hover:bg-orange-400">
          Update
        </button>
        <button
          onClick={handleCardDelete}
          className="bg-red-600 p-3 rounded-3xl text-white hover:bg-orange-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default IndividualCraftCard;
