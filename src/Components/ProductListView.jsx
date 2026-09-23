import { useNavigate } from "react-router-dom";

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 gap-7 flex items-center rounded-md p-2 ">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="h-60 w-60 rounded-md cursor-pointer object-cover"
          onClick={() => navigate(`/product/${product.id}`)}
        />
        <div className="space-y-2 ">
          <p className=" font-bold text-xl hover:text-red-400 w-full pr-30 ">
            {product.description}
          </p>
          <p className="font-semibold flex items-center text-lg ">
            <span className="text-4xl">{product.price}</span>({product.discount}
            % off )
          </p>
          <p>
            Free Delivery <span className="font-semibold">Fri, is Apr</span>{" "}
            <br /> Or Fastest Delivery <span className="font-semibold">Tomorrow, 17 Apr</span>
          </p>
          <button className="bg-red-500 text-white px-3 py-1 rounded-md ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
