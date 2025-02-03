import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold">
            <p>Hi, I'm Chi. Nice to meet you! Welcome to my portfolio.</p>
          </div>
          <div>
            <p className="mb-4">
              As a frontend developer, my goal is to create pixel-perfect,
              accessible user interfaces that combine thoughtful design and
              solid engineering. Using HTML, CSS, JavaScript, React, and
              Tailwind CSS, I work to create seamless, inclusive digital
              experiences while adhering to online accessibility guidelines,
              motivated by my love of performance and design.
            </p>
            <p className="mb-4">
              Having worked for both large organizations and startups, my varied
              experience has sharpened my ability to combine technical execution
              with creative vision. I'm dedicated to creating cutting-edge,
              approachable solutions and pushing the boundaries of front-end
              programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
