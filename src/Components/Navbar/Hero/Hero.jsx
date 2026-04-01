import React from "react";
import bannerImg from "../../../assets/banner.png";
import png from "../../../assets/hello.png";

import { Play } from "lucide-react";
const Hero = () => {
  return (
    <section className="bg-[#F8FBFF] py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 lg:order-2">
            <img
              src={bannerImg}
              alt="Hero banner"
              className="mx-auto w-full rounded-[32px] object-cover shadow-[0_40px_80px_rgba(79,57,246,0.12)]"
            />
          </div>

          <div className="order-2 lg:order-1">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#4F39F6] shadow-sm ring-1 ring-[#D8D8FF]/60">
                <img
                  src={png}
                  alt="New badge"
                  className="h-8 w-8 rounded-full"
                />
                New: AI-Powered Tools Available
              </span>
            </div>

            <h1 className="mt-8 text-center text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-left lg:text-6xl">
              Supercharge Your Digital Workflow
            </h1>

            <p className="mt-6 text-center text-base leading-7 text-slate-600 sm:text-lg lg:text-left lg:max-w-xl">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today and explore products built for modern teams.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <button className="btn btn-primary rounded-full px-8 py-3 text-base">
                Explore Products
              </button>
              <button className="btn btn-outline rounded-full px-8 py-3 text-base">
                <Play className="mr-2 inline-block" /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
