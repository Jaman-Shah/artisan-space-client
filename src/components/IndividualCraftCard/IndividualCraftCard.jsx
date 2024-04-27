import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineStarRate } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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

  const handleCardDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you Want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm ",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });

        fetch(`http://localhost:5003/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remainingCrafts = loadedCrafts.filter(
              (filteredCraft) => filteredCraft._id !== _id
            );
            setLoadedCrafts(remainingCrafts);
          });
      }
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
        <Link
          to={`/updatecraft/${_id}`}
          className="bg-green-600 p-3 rounded-3xl text-white hover:bg-orange-400"
        >
          Update
        </Link>
        <button
          onClick={() => handleCardDelete(_id)}
          className="bg-red-600 p-3 rounded-3xl text-white hover:bg-orange-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default IndividualCraftCard;
