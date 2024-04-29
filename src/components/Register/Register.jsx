import React, { useContext, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { TbPhotoFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Register = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  // importing create user function form auth context
  const { createUser } = useContext(AuthContext);

  // importing the navigate function
  const navigate = useNavigate();

  // password validating function
  // validating password function
  function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    return regex.test(password);
  }
  // registering the user function
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo_url = form.photo_url.value;
    const password = form.password.value;
    console.log(name, email, photo_url, password);

    //  validating password
    if (!validatePassword(password)) {
      let errorMessage = "";

      // Testing upperCase
      if (!/(?=.*[A-Z])/.test(password)) {
        errorMessage += "Password must contain at least one uppercase letter.";
      }

      // Testing lowerCase
      if (!/(?=.*[a-z])/.test(password)) {
        errorMessage += "Password must contain at least one lowercase letter.";
      }

      // Testing length
      if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters long.";
      }

      // Displaying the toast with the formatted error messages
      toast.error(errorMessage, {
        enableHtml: true,
        autoClose: 1000,
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    } else {
      createUser(email, password)
        .then((result) => {
          // Adding user profile update
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo_url,
          }).then(() => {
            toast.success("Account Created Successfully");
            navigate("/");
          });
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/email-already-in-use") {
            toast.error("This email is already in use.");
          } else {
            toast.error("An error occurred while creating the user.");
            console.error(error);
          }
        });
    }
  };
  return (
    <div className="bg-right-top bg-cover bg-no-repeat p-4 flex flex-col md:flex-row justify-between">
      {/* login left side  */}
      <div className="w-full md:w-1/2 p-0 md:px-12 md:p-6">
        <h1 className="font-extrabold text-2xl md:text-4xl lg:text-6xl text-black text-center my-4 text-">
          <span className="text-blue-500">Register</span>{" "}
          <span className="text-orange-500">Here :</span>
        </h1>
        <div className="divider"></div>
        <form onSubmit={handleRegister} className="flex gap-4 flex-col ">
          <div className="relative">
            <FaUserAlt className="absolute text-[#64DD17] left-4 top-2 text-4xl" />
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="placeholder:text-black h-14 w-full bg-transparent border-4 p-6 pl-14 bg-none text-black border-[#5C6BC0] rounded-2xl"
                required
              />
            </div>
          </div>
          <div className="relative">
            <MdEmail className="absolute text-[#64DD17] left-4 top-2 text-4xl" />
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="placeholder:text-black h-14 w-full bg-transparent border-4 p-6 pl-14 bg-none text-black border-[#5C6BC0] rounded-2xl"
                required
              />
            </div>
          </div>
          <div className="relative">
            <TbPhotoFilled className="absolute text-[#64DD17] left-4 top-2 text-4xl" />
            <div>
              <input
                type="text"
                name="photo_url"
                placeholder="Enter your Photo Url"
                className="placeholder:text-black h-14 w-full bg-transparent border-4 p-6 pl-14 bg-none text-black border-[#5C6BC0] rounded-2xl"
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
                className="placeholder:text-black h-14 w-full bg-transparent border-4 p-6 pl-14 bg-none text-black border-[#5C6BC0] rounded-2xl"
                required
              />
              <span className="absolute right-5 text-black text-2xl top-4">
                {eyeOpen ? (
                  <BsFillEyeFill onClick={() => setEyeOpen(false)} />
                ) : (
                  <BsFillEyeSlashFill onClick={() => setEyeOpen(true)} />
                )}
              </span>
            </div>
          </div>
          <div className="flex gap-6  border-b-2 border-black py-4 font-extrabold">
            <h3 className="text-black">Already have an account?</h3>
            <Link
              to="/login"
              className="border-b-2 text-black hover:text-blue-500 hover:border-blue-500"
            >
              Login
            </Link>
          </div>
          <button className="border-2 border-[#3D5AFE] text-black hover:bg-[#3D5AFE]  transition duration-700  w-full  p-4">
            Register
          </button>
        </form>
      </div>

      {/* login right side  */}
      <div
        style={{
          backgroundImage:
            "url('https://i.ibb.co/2hqM6pd/register-avater.jpg')",
        }}
        className="bg-center  rounded-3xl bg-cover bg-no-repeat w-full md:w-1/2 flex border bg-red-50"
      ></div>
    </div>
  );
};

export default Register;
