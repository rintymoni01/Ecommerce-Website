import { useContext, useEffect } from "react";
import { DataContex } from "../Contex/DataContex";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImport from "react-slick";

const Slider = SliderImport.default ?? SliderImport;

const Carousel = () => {
  const { data, fatchAllProducts } = useContext(DataContex);

  useEffect(() => {
    fatchAllProducts();
  }, []);

  console.log("Products:", data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"
            >
              <div className=" flex gap-10 justify-center h-[600px] items-center px-4">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">
                    Powering your world with tha best in Electronics
                  </h3>
                  <h1 className="text-4xl font-bold text-white uppercase md:w-[500px]">
                    {item.title}
                  </h1>
                  <h4 className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">{item.description}</h4>
                  <button></button>
                </div>
              </div>
            </div>
          );
        })}
        <div>
          <h1>1</h1>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
