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
        {
            data?slice(0,7)?.map((item, index)=>{
                return <div key={index} className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[24243e] -z-10">
<div className=" flex gap-10 justify-center h-[600px] items-center px-4">
    <div className="">

    </div>

</div>
                </div>

            })
        }
      <div>
        <h1>1</h1>
      </div>
      </Slider>
    </div>
  );
};

export default Carousel;