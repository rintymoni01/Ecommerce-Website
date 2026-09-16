import { useContext, useEffect } from "react";
import { DataContex } from "../Contex/DataContex";

const Carousel = () => {
  const { data , fatchAllProducts} = useContext(DataContex);
console.log(data);
useEffect(()=>{
fatchAllProducts
},[])

 
  return (
    <div>
      Carousel
    </div>
  );
};

export default Carousel;