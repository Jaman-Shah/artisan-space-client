import React from "react";

const CategoryCard = ({ category }) => {
  const {
    _id,
    image,
    subcategory_name,
    origins,
    key_elements,
    specific_styles,
  } = category;

  return (
    <div className="p-4 shadow-xl rounded-3xl bg-[#1AB7EA] border-2 border-white">
      <div>
        <img src={image} alt="" className="w-full h-52 rounded-3xl mb-4" />
      </div>
      <div className="text-center ">
        <h3 className="font-bold text-3xl text-orange-500">
          {subcategory_name}
        </h3>
        <hr className="my-4 border border-white" />
        <h4 className="my-4 text-xl ">{origins}</h4>
        <p className="my-4 font-bold">{key_elements}</p>
      </div>
      <div className=" px-4">
        <h1 className="font-bold ">
          <span className="text-orange-500 text-xl">Specific Styles</span> :{" "}
        </h1>
        <div className="">
          <ol className="list-decimal pl-5">
            {specific_styles.map((s, i) => {
              return (
                <li className="font-bold" key={i}>
                  {s}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
