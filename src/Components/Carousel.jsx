
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

  // Previous Arrow
  const SamplePrevArrow = ({ onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer"
      >
        <AiOutlineArrowLeft className="h-10 w-10 rounded-full bg-[#f53347] p-2 text-white shadow-lg transition-all hover:bg-[#555]" />
      </button>
    );
  };

  // Next Arrow
  const SampleNextArrow = ({ onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer"
      >
        <AiOutlineArrowRight className="h-10 w-10 rounded-full bg-[#f53347] p-2 text-white shadow-lg transition-all hover:bg-[#555]" />
      </button>
    );
  };

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item) => (
          <div key={item.id}>
            <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
              
              <div className="mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row md:gap-16 md:px-10 md:py-0">

                {/* Text */}
                <div className="w-full space-y-5 text-center md:w-1/2 md:text-left">
                  <h3 className="font-sans text-sm font-semibold text-red-500">
                    Enhancing your beauty with the best in Cosmetics
                  </h3>

                  <h1 className="text-3xl font-bold uppercase text-white sm:text-4xl md:w-[500px] md:text-5xl">
                    {item.title}
                  </h1>

                  <h4 className="line-clamp-3 text-sm leading-6 text-gray-400 sm:text-base md:w-[500px]">
                    {item.description}
                  </h4>

                  <button className="mt-2 cursor-pointer rounded-md bg-gradient-to-r from-red-500 to-purple-500 px-5 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-500/30">
                    Shop Now
                  </button>
                </div>

                {/* Image */}
                <div className="flex w-full items-center justify-center md:w-1/2">
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="h-[280px] w-[280px] rounded-full bg-pink-100 object-cover shadow-2xl shadow-red-400 transition-all hover:scale-105 sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Category />
    </div>
  );
};

export default Carousel;

