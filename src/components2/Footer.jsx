import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className=" bg-black grid grid-cols-1 lg:grid-cols-10 text-white  text-normal w-full h-full"
        style={{
          marginTop: "clamp(3rem, 5vw, 7rem)",
          paddingLeft: "clamp(1rem, 5vw, 7rem)",
          paddingRight: "clamp(1rem, 4vw, 7rem)",
          paddingTop: "clamp(0.8rem, 5vw, 10rem)",
          paddingBottom: "clamp(1rem, 4vw, 10rem)",
        }}
      >
        <div className="col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 w-full h-full p-4 ">
            <div className="col-span-3 logoMoto flex flex-col space-y-4 w-full h-full">
              <div className="logo">Samir's Store</div>
              <div>Subscribe</div>
              <div>Login with Us</div>
            </div>
            <div className="col-span-3  ">
              <div className="flex flex-col space-y-4">
                <p>Support</p>
                <p>Gwarko, Lalitpur,Nepal</p>
                <p className=" break-words">johnshakya16@gmail.com</p>
                <p>++977 9768445916</p>
              </div>
            </div>

            <div className="col-span-3  w-full h-full">
              <div className="flex flex-col space-y-4">
                <p>Home</p>
                <p>My Account</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
              </div>
            </div>
            <div className="col-span-3 w-full h-full ">
              <div className="flex flex-col space-y-4">
                <p>Share Link</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>FAQ</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-4 sm:pl-0 col-span-2   ">
          <div className="flex flex-col space-y-4">
            <p>Download App</p>
            <p>Upto Rs. 400 with App New Users Only </p>
            <div className="flex items-center space-x-4 pb-6">
              <div className="Qrlogo h-28 w-28  ">
                <img
                  src="/QR.png"
                  className="w-full h-full  object-contain"
                  alt=""
                />
              </div>
              <div className="txt items-center">
                <p>Get it on Play Store</p>
                <p>Download on App Store</p>
              </div>
            </div>
            <div className="flex   space-x-4 object-cover aspect-auto h-30 w-30 sm:justify-between">
              <div className="">
                {" "}
                <Facebook />
              </div>
              <div className="a">
                {" "}
                <Twitter />
              </div>
              <div className="a">
                {" "}
                <Instagram />
              </div>
              <div className="a">
                {" "}
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
