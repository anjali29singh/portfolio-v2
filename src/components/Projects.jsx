import React from "react";
import { data } from "../data/data.js";
import { AiOutlineLink } from "react-icons/ai";
const Projects = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="projects" className="w-full md:h-screen text-white bg-[#020f15]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-pink-600">
            Projects
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              className=" group container rounded-md 
              flex  flex-col justify-center text-center items-start mx-auto  gap-4 "
            >
              <img src={item.image} alt="shrinkyImg" className="w-4/5"></img>
              <p className="text-cyan-300 ">
                {item.name} {item.intro}
              </p>
              <a href={item.github}>
                <AiOutlineLink className="hover cursor-pointer text-yellow-200"></AiOutlineLink>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
