import { ArrowDown, SlidersHorizontal } from "lucide-react";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export const Trending = ({ shoes }) => {
  const [openSections, setOpenSections] = useState({
    gender: false,
    price: false,
    sale: false,
    size: false,
    color: false,
    collections: false,
    shoeHeight: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const navigate = useNavigate();

  const [Toggle, setToggle] = useState(true);
  const ToggleOptions = () => {
    setToggle(!Toggle);
  };

  const ShoesGrid = () => {
    const [hoveredShoeId, setHoveredShoeId] = useState(null);
    const [hoveredColorImg, setHoveredColorImg] = useState({});

    const handleMouseOver = (shoeId, shoeColor) => {
      if (shoeColor > 0) {
        setHoveredShoeId(shoeId);
      }
    };

    const handleMouseOut = () => {
      setHoveredShoeId(null);
    };

    const handleMouseHover = (shoeId, colorImg) => {
      setHoveredColorImg((prev) => ({
        ...prev,
        [shoeId]: colorImg, // Update only the hovered shoe's color image
      }));
    };

    const trendingShoes = shoes.filter((shoe) => shoe.Catgory === "Trending");
    console.log(trendingShoes);
    const handleShoeClick = (shoe) => {
      // Navigate to AddtoCart and pass shoe information via state
      navigate("/addtoCart", {
        state: { selectedId: { id: shoe.id }, selectedImage: shoe },
      });
    };
    return (
      <div className=" grid  grid-cols-2 lg:grid-cols-3 gap-2">
        {trendingShoes.length > 0 &&
          trendingShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="p-2"
              onMouseOver={() => handleMouseOver(shoe.id, shoe.color)}
              onMouseOut={handleMouseOut}
              onClick={() => handleShoeClick(shoe)}
            >
              <div
                className={`sm:h-[18rem] lg:h-[18rem] xl:h-[26rem] ${
                  Toggle ? "h-[8rem]" : "h-[30rem]"
                } w-full flex justify-center items-center p-4 mb-4 transition-transform duration-1000  `}
                style={{
                  background: "linear-gradient(to top, #b4c7d9, #b4c7d9)",
                }}
              >
                <img
                  src={
                    hoveredShoeId === shoe.id && hoveredColorImg[shoe.id]
                      ? `/${hoveredColorImg[shoe.id]}`
                      : `/${shoe.img}`
                  }
                  className="h-full w-full object-contain overflow-clip "
                />
              </div>
              {hoveredShoeId !== shoe.id && (
                <>
                  <h1 className="font-semibold">{shoe.Name}</h1>
                  <h1 className="capitalize">{shoe.Catgory}Shoes</h1>
                  {shoe.color > 0 ? (
                    <p>{shoe.color} Colors</p>
                  ) : (
                    <p>No Colors Available</p>
                  )}
                </>
              )}
              {hoveredShoeId === shoe.id && (
                <div className="flex space-x-4" style={{ minHeight: "4rem" }}>
                  {shoe.colorArray.map((colorImg, index) => (
                    <div
                      key={index}
                      className="h-16 w-[4rem] flex justify-center sm:justify-start gap-2 items-center  mb-2"
                      style={{
                        background: "linear-gradient(to top, #ACAEAA, #CCCCCC)",
                      }}
                      onMouseOver={() => handleMouseHover(shoe.id, colorImg)}
                    >
                      <img
                        src={`/${colorImg}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
              <h1 className="text-lg font-bold pt-1">$ {shoe.price}</h1>
            </div>
          ))}
      </div>
    );
  };

  return (
    <>
      <div
        className="fixed top-[3.75rem] z-40   bg-[#edf3f8] hidden sm:flex justify-between items-center  "
        style={{
          width: "calc(100% - 8%)",
          marginLeft: "clamp(1rem, 5vw, 10rem)",
          marginRight: "clamp(1rem, 3.3vw, 10rem)",
          paddingBottom: "clamp(0.8rem, 0.8vw, 1.5rem)",
        }}
      >
        <h1 className=" text-xl">Trending Trainers & Shoes</h1>
        <div className=" flex space-x-8">
          <div className="flex space-x-2 " onClick={ToggleOptions}>
            <div className="cursor-pointer">
              {Toggle ? `Hide` : `Show`} filters
            </div>
            <SlidersHorizontal />
          </div>
          <div className=" flex space-x-2">
            <div>Sort By</div>
            <ArrowDown />
          </div>
        </div>
      </div>

      <div className="relative top-[4rem]  Men  flex flex-grow gap-4">
        {Toggle && (
          <div
            className={`${
              Toggle
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } transform transition-transform duration-500 ease-in-out lg:w-40 xl:w-64  hidden sm:flex flex-shrink-0   overflow-y-auto h-full p-2   flex-col space-y-4`}
            style={{
              position: "sticky",
              top: "7rem",
              maxHeight: "calc(100vh - 8rem)",
            }}
          >
            {/* Shoe Height Options */}
            <div className="mb-4">
              <p className="text-black mb-2">Low Top</p>
              <p className="text-black mb-2">Mid Top</p>
              <p className="text-black mb-2">High Top</p>
            </div>
            {/* Divider */}
            <hr className="mb-4" />

            {/* Gender Section */}
            <div className="mb-4">
              <button
                className="w-full text-left text-black flex justify-between items-center"
                onClick={() => toggleSection("gender")}
              >
                Gender {openSections.gender ? "(1)" : ""}
                <span>{openSections.gender ? "▲" : "▼"}</span>
              </button>
              {openSections.gender && (
                <div className="pt-2">
                  <p>Men</p>
                  <p>Women</p>
                </div>
              )}
            </div>
            <hr />

            {/* Shop by Price Section */}
            <div className="mb-4">
              <button
                className="w-full text-left text-black flex justify-between items-center"
                onClick={() => toggleSection("price")}
              >
                Shop By Price
                <span>{openSections.price ? "▲" : "▼"}</span>
              </button>
              {openSections.price && (
                <div className="pt-2">
                  <p>$0 - $50</p>
                  <p>$50 - $100</p>
                  <p>$100 - $150</p>
                </div>
              )}
            </div>
            <hr />

            {/* Sale & Offers Section */}
            <div className="mb-4">
              <button
                className="w-full text-left text-black flex justify-between items-center"
                onClick={() => toggleSection("sale")}
              >
                Sale & Offers
                <span>{openSections.sale ? "▲" : "▼"}</span>
              </button>
              {openSections.sale && (
                <div className="pt-2">
                  <p>On Sale</p>
                  <p>Discounts</p>
                </div>
              )}
            </div>
            <hr />

            {/* Size Section */}
            <div className="mb-4">
              <button
                className="w-full text-left text-black flex justify-between items-center"
                onClick={() => toggleSection("size")}
              >
                Size
                <span>{openSections.size ? "▲" : "▼"}</span>
              </button>
              {openSections.size && (
                <div className="pt-2">
                  <p>Small</p>
                  <p>Medium</p>
                  <p>Large</p>
                </div>
              )}
            </div>
            <hr />

            {/* Colour Section */}
            <div className="mb-4">
              <button
                className="w-full text-left text-black flex justify-between items-center"
                onClick={() => toggleSection("color")}
              >
                Colour
                <span>{openSections.color ? "▲" : "▼"}</span>
              </button>
              {openSections.color && (
                <div className="pt-2">
                  <p>Red</p>
                  <p>Blue</p>
                  <p>Green</p>
                </div>
              )}
            </div>
            <hr />

            {/* Collections Section */}
            <div className="mb-4">
              <button
                className="w-full text-left text-black flex justify-between items-center"
                onClick={() => toggleSection("collections")}
              >
                Collections
                <span>{openSections.collections ? "▲" : "▼"}</span>
              </button>
              {openSections.collections && (
                <div className="pt-2">
                  <p>Summer 2023</p>
                  <p>Winter Collection</p>
                </div>
              )}
            </div>
            <hr />

            <div className="mb-4">
              <button
                className="w-full text-left text-black flex justify-between items-center"
                onClick={() => toggleSection("shoeHeight")}
              >
                Shoe Height (1)
                <span>{openSections.shoeHeight ? "▲" : "▼"}</span>
              </button>
              {openSections.shoeHeight && (
                <div className="pt-2">
                  <p>Low Top</p>
                  <p>Mid Top</p>
                  <p>High Top</p>
                </div>
              )}
            </div>
            <hr />
          </div>
        )}
        <div className="flex-grow overflow-y-auto sm:p-4 mb-8 scrollbar-hide">
          <div className="grid-container">
            <div className="block sm:hidden  ml-2">Trending's Shoes</div>
            <ShoesGrid />
          </div>
        </div>
      </div>
    </>
  );
};
