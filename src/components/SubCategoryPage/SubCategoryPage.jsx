import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SubCategoryPageCard from "../SubCategoryPageCard/SubCategoryPageCard";

const SubCategoryPage = () => {
  const { subcategory } = useParams();
  const loadedCraft = useLoaderData();

  console.log(loadedCraft);
  return (
    <div>
      <div className="my-4">
        <h1 className="font-bold text-4xl text-center">
          <span className="text-blue-500"> {subcategory} </span>
          <span className="text-orange-500">Items :</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loadedCraft &&
          loadedCraft.map((craft) => {
            return <SubCategoryPageCard key={craft._id} craft={craft} />;
          })}
      </div>
    </div>
  );
};

export default SubCategoryPage;
