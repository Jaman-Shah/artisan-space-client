import React from "react";

const CraftCard = ({ craft }) => {
  const { image, item_name, subcategory_Name, short_description } = craft;
  return (
    <div>
      <h1>{item_name}</h1>
    </div>
  );
};

export default CraftCard;
