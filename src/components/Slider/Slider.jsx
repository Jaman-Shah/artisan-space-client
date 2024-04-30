import { useContext, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { ThemeContext } from "../../providers/ThemeProvider";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/7Ry2cyP/slide-1.jpg",
  },
  {
    id: 2,
    image: "https://i.ibb.co/z2DfM0Z/slide-2.jpg",
  },
  {
    id: 3,
    image: "https://i.ibb.co/4jk4vJ3/slide-3.jpg",
  },
  {
    id: 4,
    image: "https://i.ibb.co/pQx8RyC/slide-4.jpg",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const { user } = useContext(AuthContext);
  const { darkValue } = useContext(ThemeContext);

  const previousSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="overflow-hidden h-screen relative bg-black">
      <img
        src={slides[current].image}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover"
      />

      <div className="absolute p-4 top-10 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <div
          className={`absolute top-2 md:top-20 border-l-[15px] md:border-l-[24px] ${
            darkValue ? "border-gray-950" : "border-blue-500"
          } p-4`}
        >
          <div className="font-semibold md:font-extrabold text-3xl lg:text-[70px] flex flex-col gap-2 md:gap-10 lg:mb-6 ">
            <h1>
              <span className="text-orange-500"> Find</span>{" "}
              <span className={`${darkValue ? "text-gray-400" : ""}`}>
                Best
              </span>
              <span className="text-blue-500"> Art and Crafts</span>
            </h1>
            <h1>
              <span className={`${darkValue ? "text-gray-400" : ""}`}>
                Products
              </span>{" "}
              <span className="text-green-500">From</span>{" "}
              <span className={`${darkValue ? "text-gray-400" : ""}`}>Our</span>
              <span className="text-orange-500"> Store</span>
            </h1>
          </div>
          <p className="text-lg lg:text-3xl">
            <span className={`${darkValue ? "text-gray-400" : ""}`}>
              Our Aim is to provide the best services to the customer,
              <br />
              There are lots of customers who are satisfied with our services
            </span>
          </p>
          {!user ? (
            <div className="flex z-10 text-xs md:text-xl mt-4 gap-2">
              <Link
                to="/register"
                className={`border ${
                  darkValue ? "border-orange-600 text-gray-400" : "border-white"
                } p-1 md:p-4 hover:border-none hover:bg-green-500 transition duration-500`}
              >
                Register
              </Link>
              <Link
                to="login"
                className={`border ${
                  darkValue ? "border-orange-600 text-gray-400" : "border-white"
                } p-1 md:p-4 hover:border-none hover:bg-green-500 transition duration-500`}
              >
                Login
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="absolute bottom-[150px] right-1/3 md:right-[150px] flex md:flex-col gap-2 ">
          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Previous Slide"
            onClick={previousSlide}
            className={`border ${
              darkValue ? "border-orange-600 text-gray-400" : "border-white"
            } p-1 md:p-4 hover:border-none hover:bg-green-500 transition duration-500`}
          >
            <BsFillArrowLeftCircleFill className="text-orange-600" />
          </button>
          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Next Slide"
            onClick={nextSlide}
            className={`border ${
              darkValue ? "border-orange-600 text-gray-400" : "border-white"
            } p-1 md:p-4 hover:border-none hover:bg-green-500 transition duration-500`}
          >
            <BsFillArrowRightCircleFill className="text-orange-600" />
          </button>
        </div>
      </div>

      <div className="absolute hidden md:bottom-20 py-4 md:flex justify-center gap-3 w-full">
        {slides.map((s, i) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer  ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
