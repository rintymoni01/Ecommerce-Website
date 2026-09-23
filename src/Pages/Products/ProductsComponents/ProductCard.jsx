import { IoCartOutline } from "react-icons/io5"; // Sothik import path
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../Contex/CardContex";

const ProductCard = ({ product }) => {
  console.log(product);
  const navigate = useNavigate();
  const { addToCart, cartItem } = useCart();
  console.log(cartItem);

  return (
    <div className="border relative border-gray-100 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all cursor-pointer p-4 flex flex-col justify-between h-[340px]">
      <div>
        <img
          src={product?.images?.[0]}
          alt={product?.title}
          className="bg-gray-100 aspect-square w-full object-cover rounded-lg"
          onClick={() => navigate(`/products/${product.id}`)}
        />

        <h1 className="line-clamp-2 py-1 font-semibold h-[48px]">
          {product.title}
        </h1>
        <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="flex items-center text-md cursor-pointer justify-center font-semibold bg-red-500 w-full gap-2 text-white px-3 py-2 rounded-md mt-2"
      >
        <IoCartOutline className="w-6 h-6" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
