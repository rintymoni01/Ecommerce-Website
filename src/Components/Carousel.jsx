import { useEffect } from "react";
import { getData } from "../Contex/DataContex";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImport from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = SliderImport.default ?? SliderImport;

const Carousel = () => {
  const { data, fatchAllProducts } = getData ()

  useEffect(() => {
    fatchAllProducts();
  }, []);
  const SamplePrevArrow =(props)=>{
 const {className, style, onClick} = props;
 return (
 <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
<AiOutlineArrowLeft className="arrows" style={{...style, display:"block", borderRadius:"50px", background:"#f53347" , color:"white", position:"absolute" , padding:"2px" , left:"50px"}} onMouseOver="this.style.backgroundColor ='#555' "/>
 </div>
 )
  }
   const SampleNextArrow =(props)=>{
 const {className, style, onClick} = props;
 return (
 <div onClick={onClick} className={`arrow ${className}`}>
<AiOutlineArrowRight className="arrows" style={{...style, display:"block", borderRadius:"50px", background:"#f53347" , color:"white", position:"absolute" , padding:"2px" , right:"50px"}} />
 </div>
 )
  }

  console.log("Products:", data);

  const settings = {
    dots: false,
    autoplay: true,
    autoplayspeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pouseOnHover: false,
    nextArrow: <SampleNextArrow to="next"/> ,
    prevArrow:<SamplePrevArrow to="prev"/>,
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
                    Enhancing your beauty with the best in Cosmetics
                  </h3>
                  <h1 className="text-4xl font-bold text-white uppercase md:w-[500px]">
                    {item.title}
                  </h1>
                  <h4 className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">{item.description}</h4>
                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md  cursor-pointer mt-2">Shop Now</button>
                </div>
                <div>
                    <img src={item.images} alt={item.title}  className="rounded-full bg-pink-100 w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400"/>
                </div>
              </div>
            </div>
          );
        })}
       
      </Slider>
    </div>
  );
};

export default Carousel;
