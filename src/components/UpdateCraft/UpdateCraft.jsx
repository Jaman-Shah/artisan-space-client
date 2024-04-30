import { useContext, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ThemeContext } from "../../providers/ThemeProvider";

const UpdateCraft = () => {
  const { darkValue } = useContext(ThemeContext);
  // importing navigate function
  const navigate = useNavigate();
  // loading information which should be updated
  const loadedCraft = useLoaderData();
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
  } = loadedCraft;

  // initializing form input values state with empty values
  const [formData, setFormData] = useState({
    image: image,
    item_name: item_name,
    subcategory_name: subcategory_name,
    short_description: short_description,
    price: price,
    rating: rating,
    customization: customization,
    processing_time: processing_time,
    stock_status: stock_status,
  });

  const handleChange = (e) => {
    // keeping the previous data and updating the states
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`https://artisan-space-server.vercel.app/updatecraft/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Updated Successfully");
          navigate("/myartandcraft");
        }
      });
  };

  // structure of the input fields for decreasing code duplication
  const formInputs = [
    { name: "image", label: "Image URL", type: "text" },
    { name: "item_name", label: "Item Name", type: "text" },
    {
      name: "subcategory_name",
      label: "Subcategory Name",
      type: "dropdown",
      options: [
        "Landscape Painting",
        "Portrait Drawing",
        "Watercolour Painting",
        "Oil Painting",
        "Charcoal Sketching",
        "Cartoon Drawing",
      ],
    },
    { name: "short_description", label: "Short Description", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "rating", label: "Rating", type: "number" },
    {
      name: "customization",
      label: "Customization",
      type: "dropdown",
      options: ["Yes", "No"],
    },
    { name: "processing_time", label: "Processing Time", type: "text" },
    {
      name: "stock_status",
      label: "Stock Status",
      type: "dropdown",
      options: ["In Stock", "Made to Order"],
    },
  ];

  return (
    <div className="p-4 mx-auto  ">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-4 text-center">
        <span className="text-blue-500"> Update</span> Craft{" "}
        <span className="text-red-500">Item</span>
      </h1>
      <Slide direction="left">
        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {formInputs.map((input) => (
            <div key={input.name} className="mb-4">
              <label
                className={`block ${
                  darkValue ? "text-white" : ""
                } text-black mb-1 font-bold`}
              >
                {input.label}:
              </label>
              {input.type === "dropdown" ? (
                <select
                  name={input.name}
                  value={formData[input.name]}
                  onChange={handleChange}
                  className="w-full text-black px-3 py-2 border-2 border-black rounded"
                  required
                >
                  <option value="">Select {input.label}</option>
                  {input.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={input.type}
                  name={input.name}
                  value={formData[input.name]}
                  onChange={handleChange}
                  className="w-full text-black px-3 py-2 border-2 border-black rounded"
                  disabled={input.disabled}
                  required
                />
              )}
            </div>
          ))}
          <div className="flex md:col-span-3 justify-center">
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-red-400 transition duration-500 text-black  w-1/2 mt-0 md:mt-7 px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </Slide>
    </div>
  );
};

export default UpdateCraft;
