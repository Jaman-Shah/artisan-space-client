import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { Slide } from "react-awesome-reveal";
import { ThemeContext } from "../../providers/ThemeProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const { darkValue } = useContext(ThemeContext);

  // initializing form input values state with empty values
  const [formData, setFormData] = useState({
    image: "",
    item_name: "",
    subcategory_name: "",
    short_description: "",
    price: "",
    rating: "",
    customization: "",
    processing_time: "",
    stock_status: "",
    user_email: user.email,
    user_name: user.displayName,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch url for storing data to database
    fetch("https://artisan-space-server.vercel.app/createcrafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Craft Added");
        }
      });
  };

  // making form basic structure for decreasing code duplication

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
    { name: "user_email", label: "User Email", type: "email", disabled: true },
    { name: "user_name", label: "User Name", type: "text", disabled: true },
  ];

  return (
    <Slide direction="right" className="px-4 mx-auto">
      <div className="mt-6">
        <h1 className="text-2xl md:text-4xl font-extrabold  text-center">
          <span className="text-blue-500"> Add Craft</span>
          <span className="text-red-500"> Item</span>
        </h1>
      </div>
      <div className="divider"></div>
      <form
        onSubmit={handleSubmit}
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
        <button
          type="submit"
          className=" bg-blue-500 hover:bg-red-400 transition duration-500 text-black  md:h-1/2 mt-0 md:mt-7 px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    </Slide>
  );
};

export default AddCraft;
