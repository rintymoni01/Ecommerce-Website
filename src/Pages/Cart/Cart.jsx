import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "../../Contex/CardContex";

const Cart = () => {
  const { cartItem } = useCart();
  console.log(cartItem);

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl ">My Cart ({cartItem.length})</h1>
          <div>
            <div className="mt-10">
              {cartItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-md flex items-center justify-between  mt-3 w-full"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.images}
                        alt={item.title}
                        className="w-20 h-20 rounded-md"
                      />
                      <div>
                        <h1 className=" w-[300px] line-clamp-2">
                          {item.title}
                        </h1>
                        <p className="text-red-500 font-semibold text-lg">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-500 text-white flex gap-4 p-2 font-bold rounded-md text-xl">
                      <button className="cursor-pointer">-</button>
                      <span>{item.minimumOrderQuantity}</span>
                      <button className="cursor-pointer">+</button>
                    </div>
                    <span className="hover hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl"><FaRegTrashAlt  className="text-red-500  text-2xl cursor-pointer"/></span>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-20">
                <div className="bg-gray-100 rounded-md  p-7 mt-4 space-y-2">
                    <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="">Full Name</label>
                        <input type="text"  placeholder="Enter your name" className="p-2  rounded-md "/>
                    </div>
                    <div className="flex flex-col space-y-1">
                         <label htmlFor="">Address</label>
<input type="text"  placeholder="Enter your address" className="p-2  rounded-md "/>
                    </div>
                    <div className="w-full gap-5">
                        <div className="flex flex-col space-y-1">

                        </div>

                    </div>
                </div>

            </div>
          </div>
        </div>
      ) : (
        <div>cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
