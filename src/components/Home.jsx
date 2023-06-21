import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
function Home() {
  const [click, viewSkill] = useState(false);

  return (
    <div className="w-full h-screen bg-[#020f15] home">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl mb-5 text-white">Hi,my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Anjali Singh
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#55e1ce]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#cbe9e5] py-4 max-w-[700px] text-2xl sm:text-xl">
          I am a motivated third-year student at NIT-Bhopal with a strong
          curiosity for technology and a passion for open source contributions.
          I actively seek opportunities to apply my skills and contribute to
          meaningful projects. Here are some of my skills
        </p>
        <div>
          <button
            onClick={() => {
              viewSkill(!click);
            }}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            View Skills
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
