
import { IoCartOutline } from "react-icons/io5"; // Sothik import path

const ProductCard = ({ product }) => {
  console.log(product);
    
  return (
   <div className="border relative border-gray-100 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all cursor-pointer p-4 flex flex-col justify-between h-[340px]"> 
  <div>
    <img src={product.images} alt="" className="bg-gray-100 aspect-square w-full object-cover rounded-lg"/> 
    {/* মিনিমাম হাইট দিয়ে টাইটেল এর জায়গা ফিক্সড করে দেওয়া */}
    <h1 className="line-clamp-2 py-1 font-semibold h-[48px]">{product.title}</h1> 
    <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p> 
  </div>
   
  <button className="flex items-center text-md cursor-pointer justify-center font-semibold bg-red-500 w-full gap-2 text-white px-3 py-2 rounded-md mt-2"> 
    <IoCartOutline className="w-6 h-6" /> Add to Cart  
  </button> 
</div>
  );
};

export default ProductCard;