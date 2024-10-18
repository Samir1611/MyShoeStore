import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu } from "lucide-react";

const Nab = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleSvgClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown
  };

  return (
    <>
      <nav
        id="navver"
        // style={{
        //   background: "linear-gradient(to right, #edf3f8 60%, #b3e5fc 40%)",
        // }}
      >
        <div className="nav-items grid grid-cols-12 items-center sm:gap-4">
          {/* First column (2/12): Logo */}
          <div className="logo col-span-2 flex items-center cursor-default">
            <Link
              to="/MyShoeStore/"
              className=""
              style={{ fontSize: "clamp(1.5rem, 1.5vw, 2rem)" }}
            >
              Sam's&nbsp;store
            </Link>
          </div>

          {/* Middle column (7/12): Links centered */}
          <div className="nav-links col-span-3 sm:col-span-7 flex justify-center">
            <div className="hidden sm:block">
              <ul className="flex justify-center items-center sm:gap-[2vw] pr-16 cursor-default ">
                <li>
                  <Link to="/MyShoeStore/men">Men</Link>
                </li>
                <li>
                  <Link to="/MyShoeStore/women" className="">
                    Women
                  </Link>
                </li>
                <li>
                  <Link to="/MyShoeStore/kids" className="">
                    Kids
                  </Link>
                </li>
                <li>
                  <Link to="/MyShoeStore/trending" className="">
                    Trending
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Last column (3/12): Icons */}
          <div className="col-span-7 sm:col-span-3  flex justify-end items-center sm:gap-[2vw]">
            <ShoppingCart />
            <div className="ml-4">
              <User />
            </div>
            <div className="sm:hidden ml-4" onClick={handleSvgClick}>
              <Menu />
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isDropdownOpen && (
          <div className="sm:hidden bg-[#edf3f8] pl-1 mt-2">
            <ul className="flex flex-col items-start">
              <li className="py-2">Men</li>
              <li className="py-2">Women</li>
              <li className="py-2">Kids</li>
              <li className="py-2">Trending</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nab;
