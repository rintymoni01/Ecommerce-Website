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
        <div>
          <h3>1</h3>
        </div>

        <div>
          <h3>2</h3>
        </div>

        <div>
          <h3>3</h3>
        </div>

        <div>
          <h3>4</h3>
        </div>

        <div>
          <h3>5</h3>
        </div>

        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;