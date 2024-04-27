import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

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

    fetch("http://localhost:5003/createcrafts", {
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
    { name: "user_email", label: "User Email", type: "email", disabled: true }, // Added disabled attribute
    { name: "user_name", label: "User Name", type: "text", disabled: true }, // Added disabled attribute
  ];

  return (
    <div className="p-4 mx-auto  bg-[url('https://i.ibb.co/wKYxG7J/add-art.jpg')] bg-center bg-cover">
      <h1 className="text-4xl font-extrabold mb-4 text-center">
        Add Craft Item
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {formInputs.map((input) => (
          <div key={input.name} className="mb-4">
            <label className="block text-white mb-1 font-bold">
              {input.label}:
            </label>
            {input.type === "dropdown" ? (
              <select
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
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
                className="w-full px-3 py-2 border rounded"
                disabled={input.disabled} // Added disabled attribute
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className=" bg-blue-500 hover:bg-red-400 transition duration-500 text-white  md:h-1/2 mt-0 md:mt-7 px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCraft;
