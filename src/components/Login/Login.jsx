import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  const [eyeOpen, setEyeOpen] = useState(false);
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.ibb.co/yqfQTCs/spatula-paints-near-palette.jpg')",
        bgOpacity: "0.5",
      }}
      className="bg-right-top bg-cover bg-no-repeat p-4 flex flex-col md:flex-row justify-between"
    >
      {/* login left side  */}
      <div className="w-full md:w-1/2 p-12 md:p-6">
        <h1 className="font-extrabold text-6xl text-white text-center my-4 text-">
          Login Here :
        </h1>
        <form action="" className="flex gap-4 flex-col ">
          <div className="relative">
            <MdEmail className="absolute text-[#64DD17] left-4 top-2 text-4xl" />
            <div>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your Email"
                className="focus:placeholder-gray-50 h-14 w-full bg-transparent border-4 p-6 pl-14 bg-none text-white border-[#5C6BC0] rounded-2xl"
                required
              />
            </div>
          </div>
          <div className="relative">
            <RiLockPasswordLine className="absolute text-[#64DD17] left-4 top-2 text-4xl" />
            <div>
              <input
                type={eyeOpen ? "text" : "password"}
                name="password"
                id=""
                placeholder="Enter your Password"
                className="focus:placeholder-gray-50 h-14 w-full bg-transparent border-4 p-6 pl-14 bg-none text-white border-[#5C6BC0] rounded-2xl"
                required
              />
              <span className="absolute right-5 text-white text-2xl top-4">
                {eyeOpen ? (
                  <BsFillEyeFill onClick={() => setEyeOpen(false)} />
                ) : (
                  <BsFillEyeSlashFill onClick={() => setEyeOpen(true)} />
                )}
              </span>
            </div>
          </div>
          <div className="flex gap-6  border-b-2 border-white py-4 font-extrabold">
            <h3 className="text-white">Don't have an account?</h3>
            <Link
              to="/register"
              className="border-b-2 text-white hover:text-blue-500 hover:border-blue-500"
            >
              Register
            </Link>
          </div>
          <button className="btn bg-[#3D5AFE] hover:bg-green-500 transition duration-500 text-white border-2 w-full border-none  p-4">
            Login
          </button>
          <div className="w-full flex  justify-between">
            <button className="btn bg-orange-500 text-white  w-1/2 transition duration-500 border-none rounded-none hover:bg-green-500  p-4">
              <FaGoogle />
              Google Login
            </button>
            <button className="btn bg-black text-white border-none w-1/2 transition duration-500 rounded-none  hover:bg-green-500  p-4">
              <FaGithub />
              Github Login
            </button>
          </div>
        </form>
      </div>

      {/* login right side  */}
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co/M6jMtkk/login-img.png')",
        }}
        className="bg-center  rounded-3xl bg-cover bg-no-repeat w-full md:w-1/2 flex border bg-red-50"
      ></div>
    </div>
  );
};

export default Login;
