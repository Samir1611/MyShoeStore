import React from "react";
import { Plus, Trash2, Minus } from "lucide-react";
import {
  decrement,
  increment,
  removeFromCart,
} from "../redux/AddtoCart/CartSlice";
import { useSelector, useDispatch } from "react-redux";
const Bag = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.map((item, index) => (
        <div key={index} className="h-full">
          <div className="flex items-center mb-4 py-4 border-b  border-gray-300">
            <img src={item.image} alt={item.image} className="w-24 h-24" />
            <div className="ml-4">
              <div className="flex space-x-5 items-center">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm">{item.price}</p>
              </div>
              <p className="text-gray-500">{item.description}</p>
              <p className="text-sm">Size: {item.size}</p>
            </div>
          </div>

          <div className="ml-16 md:ml-0 w-1/5 flex items-center justify-end space-x-2">
            {/* Delete and Quantity Controls */}
            <div className="flex items-center">
              <div className=" flex items-center border border-gray-300 rounded-3xl px-2 mx-2">
                {item.quantity > 1 ? (
                  <button
                    className="p-1"
                    aria-label="Decrement value"
                    onClick={() => {
                      console.log("Trash Clicked");
                      dispatch(decrement({ id: item.id }));
                    }}
                  >
                    <Minus className="text-gray-600" />
                  </button>
                ) : (
                  <button
                    className="p-1 "
                    onClick={() => {
                      dispatch(removeFromCart({ id: item.id }));
                      console.log(item.id);
                    }}
                  >
                    <Trash2
                      className="text-gray-500"
                      aria-label="Decrement value"
                    />
                  </button>
                )}
                <span className="px-2">{item.quantity}</span>
                <button
                  className="p-1"
                  onClick={() => {
                    console.log("Plus Clicked");
                    dispatch(increment({ id: item.id }));
                  }}
                >
                  <Plus
                    className="text-gray-600"
                    aria-label="Increment value"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Bag;
