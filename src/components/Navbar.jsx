import React, { useState } from "react";

import { ShoppingCart, User, Menu, Search } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSvgClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown
  };

  return (
    <>
      <nav
        className=" border "
        style={{
          paddingLeft: "clamp(2rem, 8vw, 10rem)",
          paddingRight: "clamp(2rem, 8vw, 10rem)",
          paddingTop: "clamp(0.8rem, 0.8vw, 1.5rem)",
          paddingBottom: "clamp(0.8rem, 0.8vw, 1.5rem)",
        }}
      >
        <div className="nav-items flex justify-between items-center gap-[2vw] ">
          {/* First row with logo and links */}
          <div className="nav-links flex  gap-x-[16vw] items-center ">
            <a
              className="logo  "
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              SMK
            </a>
            <div className="hidden sm:block">
              <ul
                className="flex flex-grow justify-evenly items-center  gap-[2vw]  "
                style={{ fontSize: "clamp(0.75rem, 1.5vw, 1.25rem)" }}
              >
                <li className="bold">Man</li>
                <li>Woman</li>
                <li>Kids</li>

                <li>Trending</li>
              </ul>
            </div>
          </div>

          {/* Second row with additional links and icons */}
          <div className="nav-links flex items-center gap-[2vw]">
            <div className="hidden sm:block">
              <ul
                className="flex flex-grow justify-evenly  gap-[2vw]"
                style={{ fontSize: "clamp(0.75rem, 1.5vw, 1.25rem)" }}
              >
                <li>
                  <div className="forinput  h-full">
                    <div className="relative opacity-50">
                      <span className="absolute inset-y-0 left-1 flex items-center pl-3">
                        <Search size={16} />
                      </span>
                      <input
                        type="text"
                        className="bg-[#F2F2F2] w-[14vw] sm:w-[16vw] h-[20px] sm:h-full border border-none mx-2 pl-8 pr-2 py-1 rounded-lg outline-none "
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-grow justify-evenly  gap-[2vw] items-center">
              <div className="hidden sm:block">
                <li
                  className="flex  "
                  style={{ fontSize: "clamp(0.75rem, 1.5vw, 1.25rem)" }}
                >
                  $0.00
                </li>
              </div>
              <div className="sm:hidden flex gap-4 ">
                <Search />
              </div>
              <ShoppingCart />
              <div className="hidden  sm:block">
                {" "}
                <User />
              </div>
            </div>
            <div className="sm:hidden ml-4" onClick={handleSvgClick}>
              {" "}
              <Menu />
            </div>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="sm:hidden bg-white mt-2 ">
            <ul className="flex flex-col items-start ">
              <li className="py-2">Man</li>
              <li className="py-2">Woman</li>
              <li className="py-2">Kids</li>
              <li className="py-2">Trending</li>

              <li className="py-2">$0.00</li>

              <li className="py-2">
                <User />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
