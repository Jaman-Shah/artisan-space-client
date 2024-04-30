import React, { useContext, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ThemeContext } from "../../providers/ThemeProvider";

import { toast } from "react-toastify";

const Login = () => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const { darkValue } = useContext(ThemeContext);

  // importing loginUser function from auth provider
  const { loginUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  // importing navigate function
  const navigate = useNavigate();

  // importing location function
  const location = useLocation();

  // login button functionality
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        toast.success("Login Success");
        navigate(location.state || "/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid credential");
        } else {
          toast.error("Login problem");
        }
      });
  };

  // google popup login function
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Login Success");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // github popup login function
  const handleGithubLogin = () => {
    signInWithGithub()
      .then((result) => {
        toast.success("Login Success");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-right-top bg-cover bg-no-repeat p-4 flex flex-col md:flex-row justify-between">
      {/* login left side  */}
      <div className="w-full  md:w-1/2  md:p-6">
        <h1 className="font-extrabold text-2xl md:text-4xl lg:text-6xl text-black text-center my-4 text-">
          <span className="text-blue-500">Login</span>{" "}
          <span className="text-orange-500">Here :</span>
        </h1>
        <div className="divider"></div>
        <form onSubmit={handleLogin} className="flex gap-4 flex-col">
          <div className="relative">
            <MdEmail className="absolute text-[#64DD17] left-4 top-2 text-4xl" />
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className={`${
                  darkValue
                    ? "placeholder:text-white text-white"
                    : "placeholder:text-black"
                } placeholder:text-black h-14 w-full bg-transparent border-4 p-6 pl-14 bg-none text-black border-[#5C6BC0] rounded-2xl`}
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
                placeholder="Enter your Password"
                className={`${
                  darkValue
                    ? "placeholder:text-white text-white"
                    : "placeholder:text-black"
                } placeholder:text-black h-14 w-full bg-transparent border-4 p-6 pl-14 bg-none text-black border-[#5C6BC0] rounded-2xl`}
                required
              />
              <span
                className={`${
                  darkValue ? "text-white" : ""
                } absolute right-5 text-black text-2xl top-4`}
              >
                {eyeOpen ? (
                  <BsFillEyeFill onClick={() => setEyeOpen(false)} />
                ) : (
                  <BsFillEyeSlashFill onClick={() => setEyeOpen(true)} />
                )}
              </span>
            </div>
          </div>
          <div
            className={`${
              darkValue ? "text-white" : ""
            } flex gap-6 text-black  border-b-2 border-black py-4 font-extrabold`}
          >
            <h3 className="">Don't have an account?</h3>
            <Link
              to="/register"
              className="border-b-2  hover:text-blue-500 hover:border-blue-500"
            >
              Register
            </Link>
          </div>
          <button className="border-2 border-[#3D5AFE]  hover:bg-[#3D5AFE]  transition duration-700  w-full  p-4">
            Login
          </button>
        </form>
        <div className="w-full flex mt-2 justify-between">
          <button
            onClick={handleGoogleLogIn}
            className="btn bg-orange-500 text-black  w-1/2 transition duration-500 border-none rounded-none hover:bg-green-500  p-4"
          >
            <FaGoogle />
            <span className="hidden  md:flex">Google Login</span>
          </button>
          <button
            onClick={handleGithubLogin}
            className="btn bg-black text-white border-none w-1/2 transition duration-500 rounded-none  hover:bg-green-500  p-4"
          >
            <FaGithub />
            <span className="hidden  md:flex">Github Login</span>
          </button>
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
