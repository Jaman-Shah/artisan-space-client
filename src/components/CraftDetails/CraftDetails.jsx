import React from "react";

const CraftDetails = () => {
  return (
    <div className="container mx-auto p-20">
      <div className="relative shadow-xl rounded-xl bg-white pl-52 border-2 p-8">
        <h1 className=" text-4xl font-extrabold text-center">Title</h1>
        <p className="font-bold text-green-500 text-xl">in stoke</p>
        <p className="text-[80px] text-yellow-400">1250 $</p>
        <p className="font-bold mb-2">Category:</p>
        <p className="font-bold mb-2">Descrpition:</p>
        <p className="font-bold mb-2">Rating:</p>
        <p className="font-bold mb-2">Customization:</p>
        <p className="font-bold mb-2">processing time:</p>
        <button className="border hover:bg-green-400 p-2 rounded-2xl shadow-xl transition duration-500">
          Add to Cart
        </button>
        <div className="rounded-2xl  absolute top-1/2 left-10 p-4 bg-green-400 transform -translate-x-1/2 -translate-y-1/2 border border-green-500 h-2/3 w-1/3">
          <img
            src="https://watermark.lovepik.com/photo/20211120/large/lovepik-simple-picture_500447536.jpg"
            alt=""
            className="w-full h-full rounded-2xl"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
