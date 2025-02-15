import React from "react";
import { useNavigate } from "react-router-dom";
const sneakers = [
  {
    Name: "Nike Air Sabrina 2",
    size: 36,
    img: "I.png",
    price: 2400,
    color: 3,
    Catgory: "Men",
    colorArray: ["IC1.png", "IC2.png", "IC3.png"],
    thumbnail: {
      color1: [
        "W1.png",
        "W2.png",
        "W3.png",
        "W4.png",
        "W5.png",
        "W6.png",
        "W7.png",
      ],
      color2: [
        "W21.png",
        "W22.png",
        "W23.png",
        "W24.png",
        "W25.png",
        "W26.png",
        "W27.png",
      ],
      color3: [
        "W31.png",
        "W32.png",
        "W33.png",
        "W34.png",
        "W35.png",
        "W36.png",
        "W37.png",
      ],
    },
    id: "1",
  },
  {
    Name: "Adidas Ultraboost 24",
    size: 40,
    img: "I2.png",
    price: 3300,
    color: 4,
    Catgory: "Trending",
    colorArray: ["IC1.png", "IC2.png", "IC3.png", "IC4.png"],
    thumbnail: {
      color1: [
        "W8.png",
        "W9.png",
        "W10.png",
        "W11.png",
        "W12.png",
        "W13.png",
        "W14.png",
      ],
      color2: [
        "W15.png",
        "W16.png",
        "W17.png",
        "W18.png",
        "W19.png",
        "W20.png",
        "W21.png",
      ],
      color3: [
        "W22.png",
        "W23.png",
        "W24.png",
        "W25.png",
        "W26.png",
        "W27.png",
        "W28.png",
      ],
      color4: [
        "W29.png",
        "W30.png",
        "W31.png",
        "W32.png",
        "W33.png",
        "W34.png",
        "W35.png",
      ],
    },
    id: "2",
  },
  {
    Name: "Puma RS-X3",
    size: 32,
    img: "k.png",
    price: 2100,
    color: 2,
    Catgory: "Women",
    colorArray: ["IC1.png", "IC2.png"],
    thumbnail: {
      color1: [
        "W36.png",
        "W37.png",
        "W38.png",
        "W39.png",
        "W40.png",
        "W41.png",
        "W42.png",
      ],
      color2: [
        "W43.png",
        "W44.png",
        "W45.png",
        "W46.png",
        "W47.png",
        "W48.png",
        "W49.png",
      ],
    },
    id: "3",
  },
  {
    Name: "Reebok Nano X3",
    size: 28,
    img: "I.png",
    price: 3700,
    color: 1,
    Catgory: "Kids",
    colorArray: ["IC1.png"],
    thumbnail: {
      color1: [
        "W50.png",
        "W51.png",
        "W52.png",
        "W53.png",
        "W54.png",
        "W55.png",
        "W56.png",
      ],
    },
    id: "4",
  },
  {
    Name: "Reebok Nano X3",
    size: 28,
    img: "I.png",
    price: 3700,
    color: 1,
    Catgory: "Kids",
    colorArray: ["IC1.png"],
    thumbnail: {
      color1: [
        "W50.png",
        "W51.png",
        "W52.png",
        "W53.png",
        "W54.png",
        "W55.png",
        "W56.png",
      ],
    },
    id: "4",
  },
  {
    Name: "Reebok Nano X3",
    size: 28,
    img: "I.png",
    price: 3700,
    color: 1,
    Catgory: "Kids",
    colorArray: ["IC1.png"],
    thumbnail: {
      color1: [
        "W50.png",
        "W51.png",
        "W52.png",
        "W53.png",
        "W54.png",
        "W55.png",
        "W56.png",
      ],
    },
    id: "4",
  },
];
const MightLike = () => {
  const navigate = useNavigate();
  const handleShoeClick = (shoe) => {
    navigate("/MyShoeStore/addtoCart", {
      state: { selectedId: { id: shoe.id }, selectedImage: shoe },
    });
  };
  return (
    <div
      className=" h-full w-[100vw]  text-black  pt-[10vh]"
      style={{
        paddingLeft: "clamp(1rem, 6vw, 7rem)",
        paddingRight: "clamp(1rem, 4vw, 3rem)",
        marginTop: "clamp(1rem, 10vw, 10rem)",
        marginBottom: "clamp(1rem, 8vw, 10rem)",
      }}
    >
      <h1 className="md:text-2xl font-semibold">YOU MIGHT ALSO LIKE</h1>
      <div className="  pt-6  w-full">
        <div className="flex gap-4 overflow-x-auto custom-scrollbar ">
          {sneakers.map((shoe, index) => (
            <div
              key={index}
              className=" rounded-lg  flex-none"
              onClick={() => handleShoeClick(shoe)}
            >
              <div className="relative flex justify-center items-end w-full bg-gray-200 rounded-t-lg">
                <img
                  src={shoe.img}
                  alt={shoe.Name}
                  className="object-contain w-[70vw] h-[40vh] md:w-[60vw]   md:h-[50vh] lg:h-[60vh]  xl:w-[28vw] xl:h-[60vh] 2xl:h-[70vh] 2xl:w-[32vw]"
                />
              </div>
              <div className="mt-4 text-left ">
                <h3 className="font-semibold ">{shoe.Name}</h3>
                <p>{shoe.color} colors</p>
                <p className="mb-1">{shoe.Catgory} </p>
                <p className="font-semibold mb-9">{shoe.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MightLike;
