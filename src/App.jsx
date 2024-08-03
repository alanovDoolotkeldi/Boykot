import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const location = useLocation();
  const [isIF, setIsIf] = useState(false);
  // async function getService () {
  //   try {
  //     const res = await axios.get("/api/v1/products/count")
  //     console.log(res)

      
  //   } catch (error) {
  //     console.log(error)
      
  //   }
  // }
  // useEffect(() => {

  //   getService()
  //   const islocation = location.pathname === "/";
  //   setIsIf(islocation);
  // }, []);

  return (
    <>
      <div >

        <Outlet />
        {/* <img className="body-image" src="../public/logo.svg" alt="" /> */}

      </div>
    </>
  );
}

export default App;
