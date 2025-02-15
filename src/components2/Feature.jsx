import { RefreshCcwDot, Shield, Truck } from "lucide-react";
import React from "react";

const Feature = () => {
  return (
    <>
      {/* <div className="flex justify-around gap-6  "> */}
      <div className="flex justify-center w-full p-4 sm:p-0 mt-8 sm:my-10">
        <div className="Feature grid grid-cols-1 sm:grid-cols-3 gap-12  sm:gap-6 w-full max-w-full">
          {/* Secure Payment */}
          <div className="flex items-center sm:justify-center  space-x-2">
            <div className="bg-blue-300 h-14 w-14 sm:h-20 sm:w-20 items-center rounded-lg flex justify-center">
              <Shield className="text-white items-center place-content-center w-full h-full p-3" />
            </div>
            <div className="px-4">
              <h1 className="text-xl pb-1 font-semibold">Secure Payment</h1>
              <p className="text-md text-gray-500">Secure on order</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center sm:justify-center  space-x-2">
            <div className="bg-blue-300 h-14 w-14 sm:h-20 sm:w-20 items-center rounded-lg flex justify-center">
              <RefreshCcwDot className="text-white items-center place-content-center w-full h-full p-3" />
            </div>
            <div className="px-4">
              <h1 className="text-xl pb-1 font-semibold">24/7 Support</h1>
              <p className="text-md text-gray-500">Contact us 24 hrs a day</p>
            </div>
          </div>

          {/* Fast Delivery */}
          <div className="flex items-center sm:justify-center  space-x-2">
            <div className="bg-blue-300 h-14 w-14 sm:h-20 sm:w-20 items-center rounded-lg flex justify-center">
              <Truck className="text-white items-center place-content-center w-full h-full p-3" />
            </div>
            <div className="px-4">
              <h1 className="text-xl pb-1 font-semibold">Fast Delivery</h1>
              <p className="text-md text-gray-500">Fast delivery on order</p>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Feature;
