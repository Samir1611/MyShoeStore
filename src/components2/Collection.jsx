import { MoveRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Collection = ({ setLoading }) => {
  const navigate = useNavigate();
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    const apiFetcher = async () => {
      try {
        setLoading(true);
        const promise = await fetch(
          "https://67064198a0e04071d22612fc.mockapi.io/api/shoe/men/Men"
        );
        const data = await promise.json();
        setShoes(data);
        // console.log(data);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false); // Set loading to false after fetch is done
      }
    };
    apiFetcher();
  }, [setLoading]);
  const trendingShoes = shoes.filter(
    (shoe) => shoe.Catgory === "Trending" && Number(shoe.id) < 30
  );
  console.log(trendingShoes);
  const handleShoeClick = (shoe) => {
    navigate("/MyShoeStore/addtoCart", {
      state: { selectedId: { id: shoe.id }, selectedImage: shoe },
    });
  };
  return (
    <>
      <div className="Collection">
        <div className=" font-semibold font-serif text-black/80 text-xl md:text-3xl 2xl:text-6xl ">
          Our Trending Products
        </div>
        <div className=" max-w-8xl  my-6">
          <div className=" grid grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-6 md:gap-12    ">
            {trendingShoes.map((shoe, index) => (
              <div
                key={index}
                className=" px-2 sm:p-4 rounded-lg  text-center bg-gray-200"
                onClick={() => handleShoeClick(shoe)}
              >
                <div className="mx-auto h-28 w-30  sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 ">
                  <img
                    src={shoe.img}
                    alt={shoe.Name}
                    className="object-contain w-full  h-full"
                  />
                </div>
                <h2 className=" text-sm sm:text-md md:text-xl font-semibold sm:mt-4">
                  {shoe.Name}
                </h2>
                <p className="text-gray-600">Rp {shoe.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex  items-center justify-center text-2xl text-black">
          <Link to="/MyShoeStore/trending" className="flex items-center ">
            {" "}
            <div>See all</div>
            <div>
              {" "}
              <MoveRight className="text-black w-6 h-6 ml-2" />
              {/* Adjust size and margin */}
            </div>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Collection;
