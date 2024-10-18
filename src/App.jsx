import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

import MainPage from "./componets2/MainPage";
import Nab from "./componets2/Nab";
import { Men } from "./componets2/Men";
import AddtoCart from "./componets2/AddtoCart";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./componets2/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {/* <Navbar /> */}
      {/* <Timer /> */}
      {/* <Landingpage /> */}

      <Router>
        <Nab />
        {/* {loading && <Spinner />} */}
        <Routes>
          <Route path="/MyShoeStore" element={<MainPage />}></Route>

          <Route path="/men" element={<Men setLoading={setLoading} />} />
          {/* <Route path="/addtoCart" element={<AddtoCart />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
