import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/index";
import NotfoundPage from "./pages/NotfoundPage";
import HomePage from "./pages/home";
import { Ring } from "react-cssfx-loading";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GridBackground from "./components/GridBackground";

import {Fade, Zoom} from "react-reveal ";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // toast("welcome", {theme: "dark"})
  return (
    <BrowserRouter>
      
      { isLoading ? 
      (<>
        <Fade>
        <GridBackground/>

        <Zoom>
        <div className="flex justify-center items-center h-screen">
          <Ring color="#a0bef7" width="100px" height="100px" duration="3s" />
        </div>
        </Zoom>
        </Fade>

      </>
      ):
        (<>
          <Navbar />
          <ToastContainer />

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </>)
      }
    </BrowserRouter>
  );
}

export default App;
