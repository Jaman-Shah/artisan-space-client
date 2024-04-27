import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import IndividualCraftCard from "../IndividualCraftCard/IndividualCraftCard";

const MyArtAndCraft = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [loadedCrafts, setLoadedCrafts] = useState();
  console.log(loadedCrafts);

  // loading the crafts based on email
  const loadCrafts = async () => {
    fetch(`http://localhost:5003/getcraftsbyemail/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoadedCrafts(data);
      });
  };

  // calling the loadCrafts function inside useEffect
  useEffect(() => {
    loadCrafts();
  }, []);
  return (
    <div>
      <div className="my-8">
        <h1 className="font-extrabold text-4xl text-center">
          Your<span className="text-orange-500"> Art</span> And{" "}
          <span className="text-blue-500">Crafts</span> List
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loadedCrafts &&
          loadedCrafts.map((craft) => {
            return <IndividualCraftCard key={craft._id} craft={craft} />;
          })}
      </div>
    </div>
  );
};

export default MyArtAndCraft;
