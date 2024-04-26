import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/KrdgTJH/login-bg.jpg')",
      }}
      className=" bg-center bg-cover bg-no-repeat p-4 flex flex-col md:flex-row justify-between"
    >
      {/* login left side  */}
      <div className="w-full md:w-1/2 p-12 md:p-20">
        <h1 className="font-extrabold text-6xl text-white text-center my-4 text-">
          Login Here :
        </h1>
        <div action="" className="flex gap-4 flex-col ">
          <div className="relative">
            <MdEmail className="absolute text-white left-4 top-2 text-4xl" />
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
            <RiLockPasswordLine className="absolute text-white left-4 top-2 text-4xl" />
            <div>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter your Password"
                className="focus:placeholder-gray-50 h-14 w-full bg-transparent border-4 p-6 pl-14 bg-none text-white border-[#5C6BC0] rounded-2xl"
                required
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <h3 className="text-[#1565C0]">Don't have an account?</h3>
            <Link to="/register">Register</Link>
          </div>
          <button className="btn bg-[#3D5AFE] hover:bg-green-500 transition duration-500 text-white border-2 w-full border-none  p-4">
            Login
          </button>
          <div className="w-full flex  justify-between">
            <button className="btn bg-orange-500 text-white  w-1/2 transition duration-500 border-none rounded-none hover:bg-green-500  p-4">
              <FaGoogle />
              Google Login
            </button>
            <button className="btn bg-transparent text-white border-none w-1/2 transition duration-500 rounded-none bg-black hover:bg-green-500  p-4">
              <FaGithub />
              Github Login
            </button>
          </div>
        </div>
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
