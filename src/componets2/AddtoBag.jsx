import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Bag from "./Bag";
import MightLike from "./MightLike";
const AddtoBag = ({ setLoading }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    setLoading(false);
  }, [setLoading, cartItems]);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const estimatedTax = subtotal * 0.13;
  return (
    <>
      <div className="relative  top-[10vh]   p-1 mx-6 md:mx-0    md:flex md:space-x-4  md:p-[40px] lg:p-[60px] box-border lg:gap-6  justify-center    ">
        {/* Left:img */}
        <div className="md:w-[50%] lg:w-[40%] xl:w-[38%] 2xl:w-[30%]  flex flex-col md:items-start md:justify-start justify-center ">
          <h2 className=" text-xl  md:text-2xl font-bold mb-2">Bag</h2>
          {cartItems.length === 0 ? (
            <p>There are no items in your bag.</p>
          ) : (
            <Bag />
          )}
        </div>

        {/* Right: Summary */}
        <div className=" md:sticky md:top-[8vh] lg:top-[10vh] md:mb-16  md:h-[200px] md:w-[40%] lg:w-[28%]  mt-8 md:mt-0   ">
          {/* settop and sticky and mb and main is height for sticky */}
          <h3 className="text-xl font-bold mb-4">Summary</h3>
          <div className="flex justify-between  text-lg mb-3">
            <span className="text-gray-700 mr-2">Subtotal</span>
            <span className="text-xl  text-gray-700">
              {cartItems.length === 0 ? `-` : `Rp ${subtotal}`}
            </span>
          </div>
          <div className="flex justify-between items-center text-lg mb-3">
            <span className="text-gray-700">Estimated Delivery</span>
            <span className="text-gray-700">Free</span>
          </div>
          <div className="flex justify-between items-center text-lg mb-6">
            <span className="text-gray-700">Estimated Taxes</span>
            <span className="text-xl text-gray-700">
              {cartItems.length === 0 ? `-` : `Rp ${estimatedTax}`}
            </span>
          </div>
          <div className="flex justify-between items-center font-bold text-lg mb-8">
            <span className="text-gray-900">Total </span>
            <span className="text-xl text-gray-900">
              {cartItems.length === 0 ? `-` : `Rp ${estimatedTax + subtotal}`}
            </span>
          </div>
          {/* Checkout buttons */}
          <button
            className="w-full bg-gray-300 text-white text-center py-3 rounded-lg lg:rounded-3xl mb-3"
            disabled
          >
            Guest Checkout
          </button>
          <button
            className="w-full bg-gray-300 text-white text-center py-3 rounded-lg  lg:rounded-3xl  "
            disabled
          >
            Member Checkout
          </button>
        </div>
      </div>
      <MightLike />
    </>
  );
};

export default AddtoBag;
