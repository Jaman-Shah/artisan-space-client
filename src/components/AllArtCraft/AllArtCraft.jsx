import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {
  const loadedCrafts = useLoaderData();

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto ">
        <Fade>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            All <span className="text-orange-500">Art </span>& Craft{" "}
            <span className="text-blue-400">Items</span>
          </h1>
        </Fade>
        <div className="divider px-4 md:p-0"></div>
        <Slide direction="up">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#607D8B] ">
                <th className="border-r-2 border-black px-4 py-2 text-white">
                  Item Name
                </th>
                <th className="border-r-2 border-black px-4 py-2 text-white">
                  Price
                </th>
                <th className="border-r-2 border-black px-4 py-2 text-white">
                  Rating
                </th>
                <th className=" px-4 py-2 text-white">Details</th>
              </tr>
            </thead>
            <tbody>
              {loadedCrafts && loadedCrafts.length > 0 ? (
                loadedCrafts.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-green-200" : "bg-green-50"}
                  >
                    <td className="border-r-2 border-black px-4 py-2 text-center">
                      {item.item_name}
                    </td>
                    <td className="border-r-2 border-black px-4 py-2 text-center">
                      {item.price}
                    </td>
                    <td className="border-r-2 border-black px-4 py-2 text-center">
                      {item.rating}
                    </td>
                    <td className=" text-center">
                      <Link
                        to={`/craftdetails/${item._id}`}
                        className="border-2 border-gray-500 md:p-2  text-black bg-transparent  hover:bg-green-400 hover:border-green-500 transition duration-500  rounded"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Slide>
      </div>
    </div>
  );
};

export default AllArtAndCraft;
