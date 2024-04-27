import { useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {
  const loadedCrafts = useLoaderData();

  console.log(loadedCrafts);
  return (
    <div className="bg-green-100 py-8">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-4xl font-bold mb-4 text-center">
          All <span className="text-orange-500">Art </span>& Craft{" "}
          <span className="text-blue-400">Items</span>
        </h1>
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
            {loadedCrafts &&
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
                  <td className=" px-4 py-2 text-end">
                    <button className="border-2 border-gray-500 text-black bg-transparent  hover:bg-green-400 hover:border-green-500 transition duration-500  px-4 py-2 rounded">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtAndCraft;
