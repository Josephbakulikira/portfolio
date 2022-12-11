import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import GridBackground from "../GridBackground";
import "./style.css";
import Zoom from "react-reveal/Zoom.js";


function HeroSection() {
  return (
    <>
      <GridBackground />
      <Zoom right>
      <div name="home" className="w-full h-screen " >
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full" >
          <p className="text-teal-400 tagfamily">
            {"<p>"} Hi, my name is {"</p>"}
          </p>
          <h1 className="titleText text-3xl sm:text-7xl font-bold text-[#ccd6f6]">
            Joseph Bakulikira
          </h1>
          <h2 className="titleText text-3xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Game/Web developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I'm a full stack web developer and a game developer specializing in building exceptional digital experiences.
          </p>
          <div>
            <Link to="projects" duration={500} smooth={true}>
              <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-600 hover:border-teal-600">
                View Work
                <span>
                  <HiArrowNarrowRight className="ml-4 group-hover:rotate-90 duration-300 " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      </Zoom>
      
    </>
  );
}

export default HeroSection;
