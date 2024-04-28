import React, { useEffect, useState } from "react";
import CraftCard from "../CraftCard/CraftCard";

const CraftItemsSection = () => {
  const [allCrafts, setAllCrafts] = useState([]);

  // fetching all crafts from url
  const loadAllCrafts = () => {
    fetch("http://localhost:5003/getallcrafts")
      .then((res) => res.json())
      .then((data) => {
        // slicing the data for showing 6  data only
        const slicedData = data.slice(0, 6);
        setAllCrafts(slicedData);
      });
  };

  // first time loading the url
  useEffect(() => {
    loadAllCrafts();
  }, []);

  return (
    <div>
      <div className="p-4 md:p-20">
        <div className="divider divider-primary">
          <h3 className="text-2xl md:text-4xl font-extrabold">
            Let's <span className="text-blue-500">See</span> Our{" "}
            <span className="text-orange-400">Items</span>
          </h3>
        </div>
        <p className="text-center font-bold">
          We are determined to provide you the attracting arts and crafts with
          cheap cost. But don't worry they are unique and looking good. We are
          determined to provide you the attracting arts and crafts with cheap
          cost. But don't worry they are unique and looking good. We are
          determined to provide you the attracting arts and crafts with cheap
          cost. But don't worry they are unique and looking good
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allCrafts &&
          allCrafts.map((craft) => {
            return <CraftCard key={craft._id} craft={craft} />;
          })}
      </div>
    </div>
  );
};

export default CraftItemsSection;
