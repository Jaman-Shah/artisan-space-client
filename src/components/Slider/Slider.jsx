import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const slides = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    craftTitle: "Paper Quilling",
    description:
      "Learn the art of paper quilling and create beautiful designs using paper strips.",
  },
  {
    id: 2,
    image: "https://wallpapercave.com/wp/wp3386769.jpg",
    craftTitle: "Watercolor Painting",
    description:
      "Explore the world of watercolor painting and create stunning artworks with watercolor paints.",
  },
  {
    id: 3,
    image: "https://wallpaperaccess.com/full/809523.jpg",
    craftTitle: "Clay Sculpture",
    description:
      "Get your hands dirty with clay sculpting and sculpt your imagination into reality.",
  },
  {
    id: 4,
    image: "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    craftTitle: "Embroidery",
    description:
      "Embark on a journey of embroidery and add intricate designs to fabric.",
  },
];

const Slider = () => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden h-screen relative bg-black">
      <div
        className={`flex transition ease-out duration-1000`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => {
          const { id, image, craftTitle, description } = slide;
          return <img src={image} alt="" srcset="" />;
        })}
      </div>

      <div className="absolute p-4 top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <div className="absolute top-2  md:top-20 border-l-[15px] md:border-l-[24px] border-blue-500 p-2 md:p-4">
          <div className="font-semibold md:font-extrabold text-2xl md:text-[70px] flex flex-col gap-2 md:gap-10 mb-6 ">
            <h1> Find Best Art and Crafts</h1>
            <h1>Products From Our Store</h1>
          </div>
          <p className="text-xs md:text-3xl">
            Our Aim is to provide the best services to the customer,
            <br />
            There are lots of customer who are satisfied with our services
          </p>
          <div className="flex text-xs md:text-xl mt-4 gap-2">
            <button className="border p-1 md:p-4 hover:border-none hover:bg-green-500 transition duration-500">
              Contact Us
            </button>
            <button className="border p-2 md:p-4 hover:border-none hover:bg-green-500 transition duration-500">
              Call Us
            </button>
          </div>
        </div>
        <div
          className="absolute right-3 bottom-[320px]
          md:right-[150px] flex  md:flex-col gap-2 "
        >
          <button
            onClick={previousSlide}
            className="border bg-none p-4 hover:bg-[#07B278] hover:border-none duration-500"
          >
            <BsFillArrowLeftCircleFill className="text-orange-600" />
          </button>
          <button
            onClick={nextSlide}
            className="border bg-none p-4 hover:bg-[#07B278] hover:border-none duration-500"
          >
            <BsFillArrowRightCircleFill className="text-orange-600" />
          </button>
        </div>
      </div>

      <div className="absolute hidden md:bottom-40 py-4 md:flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
