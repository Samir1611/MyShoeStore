import React, { useState, useEffect } from "react";
import "./index.css";

import MainPage from "./componets2/MainPage";
import Nab from "./componets2/Nab";
import { Men } from "./componets2/Men";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Spinner from "./componets2/Spinner";
import StickyAdd from "./componets2/StickyAdd";
import { Women } from "./componets2/Women";
import { Kids } from "./componets2/Kids";
import { Trending } from "./componets2/Trending";
import AddtoBag from "./componets2/AddtoBag";
import Footer from "./componets2/Footer";
import Feature from "./componets2/Feature";
import Collection from "./componets2/Collection";

function App() {
  const [loading, setLoading] = useState(true);
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
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };
    apiFetcher();
  }, []);
  return (
    <>
      <Router>
        <NabWrapper />
        {loading && <Spinner />}
        <Routes>
          <Route
            path="/MyShoeStore"
            element={
              <>
                <MainPage />
                <Feature />
                <Collection setLoading={setLoading} />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/MyShoeStore/men"
            element={
              <>
                <Men shoes={shoes} /> {!loading && <Footer />}
              </>
            }
          />
          <Route
            path="/MyShoeStore/women"
            element={
              <>
                <Women shoes={shoes} />
                {!loading && <Footer />}
              </>
            }
          />
          <Route
            path="/MyShoeStore/kids"
            element={
              <>
                <Kids shoes={shoes} /> {!loading && <Footer />}
              </>
            }
          />
          <Route
            path="/MyShoeStore/trending"
            element={
              <>
                <Trending shoes={shoes} />
                {!loading && <Footer />}
              </>
            }
          />

          <Route
            path="/MyShoeStore/addtoCart"
            element={<StickyAdd setLoading={setLoading} />}
          />
          <Route
            path="/MyShoeStore/Bag"
            element={
              <>
                <AddtoBag setLoading={setLoading} />
                {!loading && <Footer />}
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

const NabWrapper = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/MyShoeStore/";

  return <Nab className={isMainPage ? "Nabcol" : ""} />;
};
