import React from "react";
import { useLoaderData } from "react-router-dom";
import SubCategoryPageCard from "../SubCategoryPageCard/SubCategoryPageCard";

const SubCategoryPage = () => {
  const loadedCraft = useLoaderData();

  console.log(loadedCraft);
  return (
    <div>
      <div></div>
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
