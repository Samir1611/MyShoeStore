import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Spinner from "./Spinner";

// Helper components
const ImageGallery = ({ thumbnails, mainImage, setMainImage }) => {
  const handleError = (event, index) => {
    event.target.src = `W${index + 1}.png`;
  };
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % thumbnails.length;
    setCurrentIndex(nextIndex);
    setMainImage(thumbnails[nextIndex]);
  };

  const handlePrevImage = () => {
    const prevIndex =
      (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    setCurrentIndex(prevIndex);
    setMainImage(thumbnails[prevIndex]);
  };
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setMainImage(thumbnails[index]);
  };
  return (
    <div
      className=" flex gap-4 lg:gap-8   h-full justify-center
      sticky top-[6rem] 
      max-h-[calc(100vh-3rem)] 
      "
    >
      <div className="hidden sm:block w-[10%]  lg:w-[8%]">
        {thumbnails.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`W${index + 1}.png`}
            className="mb-4 bg-white/50 h-16 w-16  cursor-pointer"
            onMouseOver={() => handleThumbnailClick(index)}
            onError={(event) => handleError(event, index)}
          />
        ))}
      </div>
      <div className="sm:w-4/5 xl:place-content-center relative">
        <button
          onClick={handlePrevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          &#10094;
        </button>
        <img
          src={mainImage}
          onError={(event) => handleError(event, currentIndex)}
          className="w-full bg-white/50  rounded-xl object-fit "
        />
        <button
          onClick={handleNextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

const ProductInfo = ({
  id,
  title,
  description,
  price,
  sizes,
  colors,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  setMainImage,
}) => {
  return (
    <div
      className="md:w-1/3 border  p-4 mx-4 md:mx-0 rounded-lg shadow-md flex-grow overflow-auto h-full scrollbar-hide"
      style={{
        position: "sticky",
        top: "6rem",
      }}
    >
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>
        <p className="text-xl font-semibold my-2">Rp {price}</p>
      </div>
      <div className="mb-4">
        <div className="flex space-x-2">
          {colors.map((color, index) => (
            <img
              key={index}
              src={color}
              onClick={() => {
                setSelectedColor(index); // Set the selected color
                setMainImage(color); // Update the main image based on selected color
              }}
              className={`w-14 h-14 cursor-pointer  bg-white/50 ${
                selectedColor === index ? "border-2 border-black" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Select Size</h2>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`py-2 px-1 md:px-4 border text-xs md:text-base ${
                selectedSize === size ? "bg-gray-200" : "bg-white"
              } ${
                size === 45.5 || size === 46 || size === 47
                  ? "text-gray-400 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={() => setSelectedSize(size)}
              disabled={size === 45.5 || size === 46 || size === 47}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div>
        <button className="w-full bg-black text-white py-3 rounded-3xl mb-2">
          Add to Bag
        </button>
        <button className="w-full border border-gray-300 py-3 rounded-3xl flex items-center justify-center">
          <Heart className="mr-2" /> Favourite
        </button>
      </div>
      <div className="text-center my-4">
        This product is excluded from site promotions and discounts.
      </div>
      <div className="dex border-b-2">View Product Details</div>

      <div className="flex justify-between items-center my-4">
        <h2 className="text-lg font-semibold">Shipping & Returns</h2>
        <button className="text-gray-500 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="text-gray-700 mb-2">
        Free standard shipping on orders $50+ and free 60-day returns for Nike
        Members.{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Learn more
        </a>
        .{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Return policy exclusions apply.
        </a>
      </p>
      <p className="text-gray-700 mb-4">
        Pick-up available at select Nike Stores.
      </p>
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Reviews (88)</h3>
        <div className="flex items-center">
          <span className="text-yellow-500">
            {/* Star icons */}
            {"★".repeat(4)}
            {"☆"}
          </span>
          <span className="ml-2 text-gray-600">(4.5)</span>
        </div>
      </div>
    </div>
  );
};

const AddtoCart = ({ setLoading }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0); // Default to the first color
  const [mainImage, setMainImage] = useState(""); // Main image state
  const [shoes, setShoes] = useState(null); // Store shoe data

  useEffect(() => {
    const apiFetcher = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://67064198a0e04071d22612fc.mockapi.io/api/shoe/men/Men"
        );
        const data = await response.json();
        const firstShoe = data.find((shoe) => shoe.id === "1"); // Find the first object with ID 1
        setShoes(firstShoe);
        setMainImage(firstShoe.img); // Set the main image from the API
        setSelectedSize(36);
        console.log(shoes);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false); // Set loading to false after fetch is done
      }
    };
    apiFetcher();
  }, [setLoading]);
  if (!shoes) {
    return <Spinner />;
  }

  const sizes = [
    32, 33.5, 34.5, 35, 36, 37.5, 38, 39, 40, 41, 42, 42.5, 43, 44, 44.5, 45,
    45.5, 46, 47, 47.5,
  ];

  const colors = shoes.colorArray;
  const colorKeys = Object.keys(shoes.thumbnail);
  const thumbnails = shoes.thumbnail[colorKeys[selectedColorIndex]] || [];

  return (
    <div className="addtoCart relative top-[4rem] md:flex  max-w-6xl gap-4  justify-center  mx-auto pb-[16vh]">
      <div className="w-full md:w-2/3 mb-4 sm:mb-16 ">
        {/* Image Gallery Component */}
        <ImageGallery
          thumbnails={thumbnails} // Pass color images as thumbnails
          mainImage={mainImage} // Pass current main image state
          setMainImage={setMainImage} // Pass function to update the main image
        />
      </div>
      {/* Product Info Component */}
      <ProductInfo
        title={shoes.Name} // Display name from API
        description="Men's Shoe"
        price={shoes.price} // Display price from API
        sizes={sizes} // Use the original sizes list
        colors={colors} // Use colors from API
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColorIndex} // Pass the selected color index
        setSelectedColor={setSelectedColorIndex} // Update function
        setMainImage={setMainImage} // Pass setMainImage to ProductInfo
      />
    </div>
  );
};

export default AddtoCart;
