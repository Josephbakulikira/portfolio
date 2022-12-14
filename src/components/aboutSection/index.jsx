import React from "react";
import {Slide, Fade} from "react-reveal";

function AboutSection() {
  return (
    <Fade>
      <div name="about" className="w-full h-screen text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-3xl font-bold inline border-b-4 border-teal-400">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <Slide left>
            <div className="sm:text-right text-3xl font-bold ">
              <p>
                Hello, nice to meet you, please take a look
                around.
              </p>
            </div>
            </Slide>
            <Slide right>
            <div>
              <p>
                I am passionnate about building excellent software that improves
                the lives of those around me. I specialize in creating games and websites
                ranging from individuals and small-businesses all
                the way to large enterprise corporations. <b>Innovation is my passion.</b>
              </p>
            </div>
            </Slide>
            
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default AboutSection;
