import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import IndividualCraftCard from "../IndividualCraftCard/IndividualCraftCard";
import Loader from "../Loader/Loader";
import { DataLoadingContext } from "../../providers/DataLoadingProvider";

const MyArtAndCraft = () => {
  const { user } = useContext(AuthContext);
  const { dataLoading, setDataLoading } = useContext(DataLoadingContext);
  const [loadedCrafts, setLoadedCrafts] = useState([]);
  const [filteredCrafts, setFilteredCrafts] = useState([]);
  const [customization, setCustomization] = useState("");

  // loading the crafts based on email
  const loadCrafts = async () => {
    fetch(
      `https://artisan-space-server.vercel.app/getcraftsbyemail/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoadedCrafts(data);
        setFilteredCrafts(data);
        setDataLoading(false);
      });
  };

  // calling the loadCrafts function inside useEffect
  useEffect(() => {
    loadCrafts();
  }, []);

  const handleCustomizationChange = (event) => {
    const selectedCustomization = event.target.value;
    if (selectedCustomization === "Customization") {
      setFilteredCrafts(loadCrafts);
    }
    setCustomization(selectedCustomization);
    const filteredData = loadedCrafts.filter((element) => {
      return element.customization == selectedCustomization;
    });
    setFilteredCrafts(filteredData);
  };

  return (
    <div>
      <div className="my-4">
        <h1 className="font-extrabold text-2xl md:text-4xl text-center">
          Your<span className="text-orange-500"> Art</span> And{" "}
          <span className="text-blue-500">Crafts</span> List
        </h1>
      </div>
      <div className="divider px-4"></div>
      <div>
        <h1 className="text-center my-4 text-2xl md:text-3xl font-bold ">
          Filter By <span className="text-orange-500">Customization :</span>
        </h1>
        <div className="text-center h-16 mb-4">
          <select
            name="customization"
            value={customization}
            onChange={handleCustomizationChange}
            className="h-full p-4 bg-blue-300"
          >
            <option value="Customization">Customization</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      {!dataLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
          {filteredCrafts.map((craft) => (
            <IndividualCraftCard
              key={craft._id}
              craft={craft}
              filteredCrafts={filteredCrafts}
              loadedCrafts={loadedCrafts}
              setLoadedCrafts={setLoadedCrafts}
              setFilteredCrafts={setFilteredCrafts}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MyArtAndCraft;
