import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../providers/ThemeProvider";

const CategoryCard = ({ category }) => {
  const { darkValue } = useContext(ThemeContext);
  const {
    _id,
    image,
    subcategory_name,
    origins,
    key_elements,
    specific_styles,
  } = category;

  return (
    <Link
      to={`/crafts/${subcategory_name}`}
      className={`p-4 shadow-xl rounded-3xl ${
        darkValue ? "bg-transparent" : ""
      }  bg-[#1AB7EA] border-2 border-white`}
    >
      <Fade>
        <div>
          <img src={image} alt="" className="w-full h-52 rounded-3xl mb-4" />
        </div>
      </Fade>
      <Fade cascade>
        <div className="text-center ">
          <h3 className="font-bold text-3xl text-white">{subcategory_name}</h3>
          <hr className="my-4 border border-white" />
          <h4 className="my-4 text-xl ">{origins}</h4>
          <p className="my-4 font-bold">{key_elements}</p>
        </div>
        <div className=" px-4">
          <h1 className="font-bold ">
            <span className="text-white text-xl">Specific Styles</span> :{" "}
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
      </Fade>
    </Link>
  );
};

export default CategoryCard;
