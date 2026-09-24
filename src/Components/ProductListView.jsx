import { useNavigate } from "react-router-dom";
import { useCart } from "../Contex/CardContex";

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const {addToCart}= useCart()
  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 gap-7 flex items-center rounded-md p-2 ">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="md:h-60 md:w-60 h-25 w-25 rounded-md cursor-pointer object-cover"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className="space-y-2 ">
          <p className=" font-bold md:text-xl text-lg  hover:text-red-400 w-full pr-30 ">
            {product.title}
          </p>
          <p className="font-semibold flex items-center md:text-lg text-sm ">$
            <span className="md:text-4xl text-3xl">{product.price}</span>({product.discount}
            % off )
          </p>
          <p className="text-sm">
            Free Delivery <span className="font-semibold">Fri, is Apr</span>{" "}
            <br /> Or Fastest Delivery <span className="font-semibold">Tomorrow, 17 Apr</span>
          </p>
          <button onClick={()=>addToCart(product)} className="bg-red-500 text-white px-3 py-1 rounded-md ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
