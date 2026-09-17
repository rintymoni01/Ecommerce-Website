import { useEffect } from "react";
import { getData } from "../Contex/DataContex";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImport from "react-slick";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

import Category from "./Category";

const Slider = SliderImport.default ?? SliderImport;

const Carousel = () => {
  const { data, fatchAllProducts } = getData();

  useEffect(() => {
    fatchAllProducts();
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;

    return (
      <div
        onClick={onClick}
        className={className}
      >
        <AiOutlineArrowLeft
          className="arrows w-10 h-10 rounded-full bg-[#f53347] text-white p-2 hover:bg-[#555] transition-all cursor-pointer"
        />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, onClick } = props;

    return (
      <div
        onClick={onClick}
        className={className}
      >
        <AiOutlineArrowRight
          className="arrows w-10 h-10 rounded-full bg-[#f53347] text-white p-2 hover:bg-[#555] transition-all cursor-pointer"
        />
      </div>
    );
  };

  console.log("Products:", data);

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
            >
              <div className="flex gap-10 justify-center h-[600px] items-center px-4">

                {/* Text */}
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">
                    Enhancing your beauty with the best in Cosmetics
                  </h3>

                  <h1 className="text-4xl font-bold text-white uppercase md:w-[500px]">
                    {item.title}
                  </h1>

                  <h4 className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </h4>

                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">
                    Shop Now
                  </button>
                </div>

                {/* Image */}
                <div>
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="rounded-full bg-pink-100 w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400"
                  />
                </div>

              </div>
            </div>
          );
        })}
      </Slider>

      <Category />
    </div>
  );
};

export default Carousel;