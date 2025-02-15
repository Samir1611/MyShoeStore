import React, { useState, useEffect } from "react";
import "./index.css";

import MainPage from "./components2/MainPage";
import Nab from "./components2/Nab";
import { Men } from "./components2/Men";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Spinner from "./components2/Spinner";
import StickyAdd from "./components2/StickyAdd";
import { Women } from "./components2/Women";
import { Kids } from "./components2/Kids";
import { Trending } from "./components2/Trending";
import AddtoBag from "./components2/AddtoBag";
import Footer from "./components2/Footer";
import Feature from "./components2/Feature";
import Collection from "./components2/Collection";

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
