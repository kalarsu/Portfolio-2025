import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f]"
      aria-label="Home section"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <p className="text-orange-700">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Chi Su
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8992b0] py-4 max-w-[650px]">
          I'm a frontend developer specializing in building exceptional digital
          experiences. I excel at creating responsive, user-friendly designs
          that seamlessly blend functionality and aesthetic appeal.
        </p>
        <div>
          <Link to="experience" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-700 hover:border-orange-700">
              View Work Experience
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight aria-label="External Link Icon" className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
