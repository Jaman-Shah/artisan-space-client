import React from "react";

const ContactSection = () => {
  return (
    <div className=" my-8 md:flex items-center">
      {/* left side  */}
      <div className="md:w-1/2">
        <div>
          <img
            src="https://i.ibb.co/TwQSM9w/maxresdefault.jpg"
            alt=""
            srcset=""
            className="w-full"
          />
        </div>
      </div>

      {/* right side  */}
      <div className="md:w-1/2 shadow-2xl md:rounded-2xl  bg-[#34495E] p-4">
        <div>
          <h1 className="font-extrabold text-3xl my-2 text-orange-400">
            Contact <span className="text-green-500">With Us</span> :
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <input
                type="text"
                className="w-full border h-12 p-2  rounded-2xl"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="w-full border h-12 p-2  rounded-2xl"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="w-full border h-12 p-2 rounded-2xl"
                placeholder="Enter Your Country"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="w-full border h-12 p-2  rounded-2xl"
                placeholder="Enter Your District"
              />
            </div>
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="20"
              rows="5"
              placeholder="Enter Your Message  "
              className="w-full my-2 rounded-2xl p-4"
            ></textarea>
          </div>
          <button className="w-full rounded-2xl text-white border-2 border-green-500 py-3 hover:bg-green-500  transition duration-500">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
