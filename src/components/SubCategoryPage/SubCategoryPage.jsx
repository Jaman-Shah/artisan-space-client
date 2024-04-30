import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SubCategoryPageCard from "../SubCategoryPageCard/SubCategoryPageCard";
import Loader from "../Loader/Loader";

const SubCategoryPage = () => {
  const { subcategory } = useParams();
  const loadedCraft = useLoaderData();

  console.log(loadedCraft);
  return (
    <div>
      <div className="my-4">
        <h1 className="font-bold text-2xl md:text-4xl text-center">
          <span className="text-blue-500"> {subcategory} </span>
          <span className="text-orange-500">Items :</span>
        </h1>
      </div>
      <div className="divider px-4"></div>
      {loadedCraft.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-4">
          {loadedCraft &&
            loadedCraft.map((craft) => {
              return <SubCategoryPageCard key={craft._id} craft={craft} />;
            })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SubCategoryPage;
