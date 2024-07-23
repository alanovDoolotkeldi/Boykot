import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
function App() {
  const location = useLocation();
  const [isIF, setIsIf] = useState(false);

  useEffect(() => {
    const islocation = location.pathname === "/";
    setIsIf(islocation);
  }, [location.pathname]);
  
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
