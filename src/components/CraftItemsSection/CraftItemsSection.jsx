import React, { useEffect, useState } from "react";
import CraftCard from "../CraftCard/CraftCard";
import { Slide } from "react-awesome-reveal";
import Loader from "../Loader/Loader";

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
  if (!allCrafts) {
    return <Loader />;
  } else
    return (
      <div>
        <div className="p-4 md:p-12">
          <div className="divider divider-primary">
            <h3 className="text-2xl md:text-4xl font-extrabold">
              Let's <span className="text-blue-500">See</span> Our
              <span className="text-orange-400"> Items</span>
            </h3>
          </div>
          <div className="divider md:hidden"></div>
          <Slide
            direction="left"
            fraction={0}
            className="text-center font-bold mt-8"
          >
            We are determined to provide you the attracting arts and crafts with
            cheap cost. But don't worry they are unique and looking good.From
            intricately designed jewelry to charming home decor, each item in
            our store is carefully crafted with love and attention to detail. We
            believe that every piece tells a story and adds a touch of
            personality to your space.
          </Slide>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allCrafts &&
            allCrafts.map((craft) => {
              return <CraftCard key={craft._id} craft={craft} />;
            })}
        </div>
      </div>
    );
};

export default CraftItemsSection;
