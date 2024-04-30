import React, { useContext, useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Fade } from "react-awesome-reveal";
import Loader from "../Loader/Loader";
import { DataLoadingContext } from "../../providers/DataLoadingProvider";

const CraftCategories = () => {
  const [categories, setCategories] = useState([]);
  const { dataLoading, setDataLoading } = useContext(DataLoadingContext);

  // categories loading function
  const loadCategories = () => {
    fetch("http://localhost:5003/getcraftscategory")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setDataLoading(false);
      });
  };

  // calling loadCategories for only first time insie use efect
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <Fade>
        <div className="mt-16 md:my-16 text-center px-12">
          <div class="divider divider-warning">
            <h3 className="font-extrabold text-2xl md:text-4xl ">
              Our
              <span className="text-red-500"> Best</span>
              <span className="text-green-500"> Categories</span>
            </h3>
          </div>
          <div className="divider md:hidden"></div>
        </div>
      </Fade>

      {!dataLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories &&
            categories.map((category) => {
              return <CategoryCard key={categories._id} category={category} />;
            })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CraftCategories;
