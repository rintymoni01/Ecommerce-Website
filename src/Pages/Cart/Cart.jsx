
import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "../../Contex/CardContex";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { location, getLocation } = useOutletContext();

  const {
    cartItem,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const { user } = useUser();

  // Total price
  const totalPrice = cartItem.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity || 1),
    0
  );

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-10 px-4">

      {cartItem.length > 0 ? (
        <div>

          {/* Cart Heading */}
          <h1 className="font-bold text-2xl">
            My Cart ({cartItem.length})
          </h1>

          {/* Cart Items */}
          <div className="mt-10">

            {cartItem.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 p-5 rounded-md flex items-center justify-between gap-5 mt-3 w-full"
              >

                {/* Product */}
                <div className="flex items-center gap-4 flex-1">

                  <img
                    src={
                      Array.isArray(item.images)
                        ? item.images[0]
                        : item.images
                    }
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />

                  <div>
                    <h1 className="w-[300px] line-clamp-2">
                      {item.title}
                    </h1>

                    <p className="text-red-500 font-semibold text-lg">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>

                </div>

                {/* Quantity */}
                <div className="bg-red-500 text-white flex items-center gap-4 px-3 py-2 font-bold rounded-md text-xl">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="cursor-pointer"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="cursor-pointer"
                  >
                    +
                  </button>

                </div>

                {/* Delete */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl cursor-pointer"
                >
                  <FaRegTrashAlt className="text-red-500 text-2xl" />
                </button>

              </div>
            ))}

          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Delivery Info */}
            <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-3">

              <h1 className="text-gray-800 font-bold text-xl">
                Delivery Info
              </h1>

              {/* Full Name */}
              <div className="flex flex-col space-y-1">
                <label>Full Name</label>

                <input
                  type="text"
                  value={user?.fullName || ""}
                  placeholder="Enter your name"
                  readOnly
                  className="p-2 rounded-md bg-white outline-none"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col space-y-1">
                <label>Address</label>

                <input
                  type="text"
                  value={
                    location?.road ||
                    location?.suburb ||
                    location?.city ||
                    ""
                  }
                  placeholder="Enter your address"
                  readOnly
                  className="p-2 rounded-md bg-white outline-none"
                />
              </div>

              {/* Country + PostCode */}
              <div className="flex w-full gap-5">

                <div className="flex flex-col space-y-1 w-full">
                  <label>Country</label>

                  <input
                    type="text"
                    value={location?.country || ""}
                    placeholder="Enter your country"
                    readOnly
                    className="p-2 rounded-md w-full bg-white outline-none"
                  />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label>PostCode</label>

                  <input
                    type="text"
                    value={location?.postcode || ""}
                    placeholder="Enter your postcode"
                    readOnly
                    className="p-2 rounded-md w-full bg-white outline-none"
                  />
                </div>

              </div>

              {/* State + Phone */}
              <div className="flex w-full gap-5">

                <div className="flex flex-col space-y-1 w-full">
                  <label>State</label>

                  <input
                    type="text"
                    value={location?.state || ""}
                    placeholder="Enter your state"
                    readOnly
                    className="p-2 rounded-md w-full bg-white outline-none"
                  />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label>Phone No</label>

                  <input
                    type="text"
                    placeholder="Enter your number"
                    className="p-2 rounded-md w-full bg-white outline-none"
                  />
                </div>

              </div>

              <button className="bg-red-500 text-white px-3 py-2 rounded-md mt-3 cursor-pointer">
                Submit
              </button>

              <div className="flex items-center justify-center w-full text-gray-700">
                -------- OR --------
              </div>

              <div className="flex justify-center">
                <button
                  onClick={getLocation}
                  className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer"
                >
                  Detect Location
                </button>
              </div>

            </div>

            {/* Bill Details */}
            <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-3 h-max">

              <h1 className="text-gray-800 font-bold text-xl">
                Bill Details
              </h1>

              {/* Items Total */}
              <div className="flex justify-between items-center">

                <h1 className="flex gap-2 items-center text-gray-700">
                  <LuNotebookText />
                  Items total
                </h1>

                <p>${totalPrice.toFixed(2)}</p>

              </div>

              {/* Delivery */}
              <div className="flex justify-between items-center">

                <h1 className="flex gap-2 items-center text-gray-700">
                  <MdDeliveryDining />
                  Delivery Charge
                </h1>

                <p className="text-red-500 font-semibold">
                  <span className="text-gray-600 line-through">
                    $25
                  </span>{" "}
                  FREE
                </p>

              </div>

              {/* Handling */}
              <div className="flex justify-between items-center">

                <h1 className="flex gap-2 items-center text-gray-700">
                  <GiShoppingBag />
                  Handling
                </h1>

                <p className="text-red-500 font-semibold">
                  $5
                </p>

              </div>

              <hr className="text-gray-200 mt-2" />

              {/* Grand Total */}
              <div className="flex justify-between items-center">

                <h1 className="font-semibold text-lg">
                  Grand total
                </h1>

                <p className="font-semibold text-lg">
                  ${(totalPrice + 5).toFixed(2)}
                </p>

              </div>

              {/* Promo */}
              <div>

                <h1 className="font-semibold text-gray-700 mb-3 mt-7">
                  Apply promo code
                </h1>

                <div className="flex gap-3">

                  <input
                    type="text"
                    placeholder="Enter code"
                    className="p-2 border border-gray-200 rounded-md w-full outline-none"
                  />

                  <button className="bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md">
                    Apply
                  </button>

                </div>

              </div>

              {/* Checkout */}
              <button className="bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3">
                Proceed to Checkout
              </button>

            </div>

          </div>

        </div>
      ) : (

        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">

            <h1 className="text-2xl font-bold text-gray-700">
              Your Cart is Empty
            </h1>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>

          </div>
        </div>

      )}

    </div>
  );
};

export default Cart;

