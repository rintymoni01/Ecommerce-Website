import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "./Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../../Contex/CardContex";

const SingleProducts = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);
const {addToCart} =useCart()
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);

      console.log(res.data);
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={singleProduct.title} />

          <div className="max-w-6xl md:p-6 mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="w-full ">
              <img
                src={singleProduct.images?.[0]}
                alt={singleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="md:text-3xl text-xl pb-4  font-bold  text-gray-800">
                {singleProduct.title}
              </h1>

              <div className="text-gray-700 ">
                {singleProduct.brand?.toUpperCase()}/{" "}
                {singleProduct.category?.toUpperCase()}
              </div>

              <h2 className="text-2xl text-red-500 font-bold mt-5">
                ${singleProduct.price}{" "}
                <span className="line-through text-gray-700">
                  $
                  {Math.round(
                    singleProduct.price +
                      (singleProduct.price * singleProduct.discountPercentage) /
                        100,
                  )}
                </span>{" "}
                <span className="bg-red-500 text-white px-4 py-2 rounded-full">
                  {singleProduct.discountPercentage}% discount
                </span>
              </h2>
              <p className="text-gray-500 py-4">{singleProduct.description}</p>

              <div className="flex  items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  Quantity:{" "} 
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  className="w-20 border border-gray-300 rounded-lg px-3 focus:ring-2 focus:ring-red-500  focus:outline-none p-1 "
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button  onClick={()=>addToCart(singleProduct)} className="px-6 flex  bg-red-500 text-white rounded-md gap-2 py-2 text-lg">
                  <IoCartOutline className="w-6 h-6"/> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <img src="/Image/sample.gif" alt="Loading..." className="w-20 h-20" />
        </div>
      )}
    </>
  );
};

export default SingleProducts;
