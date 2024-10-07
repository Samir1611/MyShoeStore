import { MoveRight } from "lucide-react";
import React from "react";

const shoes = [
  {
    name: "Air Griffey Max 1",
    price: "$150",
    image: "I.png",
  },
  {
    name: "Nike Air Max 95",
    price: "$150",
    image: "k.png",
  },
  {
    name: "Nike Air Max Correl",
    price: "$150",
    image: "sneaker.jpeg",
  },
  {
    name: "Nike Air Max TN",
    price: "$150",
    image: "k.png",
  },
  {
    name: "Nike Air Max Plus",
    price: "$150",
    image: "III.png",
  },
  {
    name: "Nike Air Max Excee",
    price: "$150",
    image: "k.png",
  },
];

const Collection = () => {
  return (
    <>
      <div className="Collection">
        <div className="font-semibold font-serif text-black/80 text-4xl md:text-5xl lg:text-6xl text-center">
          Our Collection
        </div>
        <div className=" max-w-8xl  p-4  sm:p-10">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-12    ">
            {shoes.map((shoe, index) => (
              <div
                key={index}
                className=" p-4 rounded-lg  text-center bg-white"
              >
                <div className="mx-auto h-48 w-48 ">
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold mt-4">{shoe.name}</h2>
                <p className="text-gray-600">{shoe.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center text-2xl text-black">
          <span>See all</span>
          <MoveRight className="text-black w-6 h-6 ml-2" />{" "}
          {/* Adjust size and margin */}
        </div>
      </div>
    </>
  );
};

export default Collection;
