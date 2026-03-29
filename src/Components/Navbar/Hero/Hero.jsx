import React from "react";
import bannerImg from "../../../assets/banner.png";
import png from "../../../assets/hello.png";

import { Play } from "lucide-react";
const Hero = () => {
  return (
    <div className="hero  min-h-screen flex items-center w-11/12 mx-auto text-center">
      
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-md rounded-lg shadow-2xl" />

        <div className=" mr-20 w-5/12">
          <h1 className=" text-md font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            <span className="rounded-full border-1 border-gray-200 px-2 flex items-center gap-2"><span className=""><img src={png} /></span> New: AI-Powered Tools Available</span>
          </h1>
          <h2 className="text-5xl font-bold ">Supercharge Your Digital Workflow</h2>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-3">
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>
            <button className="btn  rounded-full">
              <Play /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
