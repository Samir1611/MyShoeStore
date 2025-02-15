import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu } from "lucide-react";
import { selectCartItemCount } from "../redux/AddtoCart/CartSlice";
import { useSelector } from "react-redux";
const Nab = ({ className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown
  const menuButtonRef = useRef(null); // Ref for the menu button

  const handleSvgClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown and not on the menu button
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target) // Ignore clicks on the menu button
      ) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // Function to close dropdown when clicking a nav link
  const handleNavItemClick = () => {
    setIsDropdownOpen(false);
  };
  const cartItemCount = useSelector(selectCartItemCount);
  console.log(cartItemCount);
  return (
    <>
      <nav
        id="navver"
        className={className}
        // style={{
        //   background: "linear-gradient(to right, #edf3f8 60%, #b3e5fc 40%)",
        // }}
      >
        <div className="nav-items grid grid-cols-12 items-center sm:gap-4">
          {/* First column (2/12): Logo */}
          <div className="logo col-span-2 flex items-center cursor-default">
            <Link
              to="/"
              className=""
              style={{ fontSize: "clamp(1.5rem, 1.5vw, 2rem)" }}
            >
              Sam's&nbsp;store
            </Link>
          </div>

          {/* Middle column (7/12): Links centered */}
          <div className="nav-links col-span-3 sm:col-span-8 flex justify-center">
            <div className="hidden sm:block">
              <ul className="flex justify-center items-center sm:gap-[2vw] pr-16 cursor-pointer   ">
                <li>
                  <Link to="/men">Men</Link>
                </li>
                <li>
                  <Link to="/women" className="">
                    Women
                  </Link>
                </li>
                <li>
                  <Link to="/kids" className="">
                    Kids
                  </Link>
                </li>
                <li>
                  <Link to="/trending" className="">
                    Trending
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Last column (3/12): Icons */}
          <div className="col-span-7 sm:col-span-2  flex justify-end items-center sm:gap-[2vw]">
            <Link to="/Bag" className="relative">
              <ShoppingCart />
              {cartItemCount > 0 && (
                <span className="absolute top-[-3px] right-[-9px] bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <div className="ml-4">
              <User />
            </div>
            <div
              className="sm:hidden ml-4"
              ref={menuButtonRef}
              onClick={handleSvgClick}
            >
              <Menu />
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isDropdownOpen && (
          <div className="sm:hidden bg-[#edf3f8] pl-1 mt-2" ref={dropdownRef}>
            <ul className="flex flex-col items-start ">
              <li className="py-2">
                <Link to="/men" onClick={handleNavItemClick}>
                  Men
                </Link>
              </li>
              <li className="py-2">
                <Link to="/women" onClick={handleNavItemClick}>
                  Women
                </Link>
              </li>
              <li className="py-2">
                <Link to="/kids" onClick={handleNavItemClick}>
                  Kids
                </Link>
              </li>
              <li className="py-2">
                {" "}
                <Link to="/trending" onClick={handleNavItemClick} className="">
                  Trending
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nab;
