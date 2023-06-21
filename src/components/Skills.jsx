import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaDocker } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { TbBrandGolang } from "react-icons/tb";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-8">
          <div className="hover:scale-110 duration-500 text-red-600 flex flex-row gap-4">
            <AiFillHtml5 className="bg-white text-3xl"></AiFillHtml5>
            <p>HTML</p>
          </div>
          <div className="hover:scale-110 duration-500 text-blue-500 flex flex-row gap-4">
            <SiTailwindcss className="bg-white text-3xl"></SiTailwindcss>
            <p>TailwindCss</p>
          </div>
          <div className="hover:scale-110 duration-500 text-yellow-400 flex flex-row gap-4">
            <IoLogoJavascript className="bg-white text-3xl"></IoLogoJavascript>
            <p>Javascript</p>
          </div>
          <div className="hover:scale-110 duration-500 text-white flex flex-row gap-4 p-1">
            <AiFillGithub className="text-3xl">Git</AiFillGithub>
            <p>Git and Github</p>
          </div>
          <div className="flex flex-row gap-4 text-blue-500 hover:scale-110 duration-500">
            <FaDocker className="bg-white text-3xl "></FaDocker>
            <p>Docker</p>
          </div>
          <div className="flex flex-row gap-4 p-1  text-green-500 hover:scale-110 duration-500">
            <SiMongodb className="text-3xl"></SiMongodb>
            <p>MongoDB</p>
          </div>
          <div className=" flex flex-row gap-4 text-blue-900  p-1 hover:scale-110 duration-500">
            <SiPostgresql className="bg-white text-3xl"></SiPostgresql>
            <p>Postgresql</p>
          </div>
          <div className=" flex flex-row gap-4 p-1 hover:scale-110 duration-500">
            <GrMysql className="bg-white text-3xl text-blue-950"></GrMysql>
            <p className="text-yellow-500">MySQL</p>
          </div>
          <div className="flex flex-row gap-4 p-1 text-yellow-600 hover:scale-110 duration-500">
            <SiExpress className="bg-white text-3xl"></SiExpress>
            <p>ExpresJs</p>
          </div>
          <div className=" flex flex-row gap-4 p-1 text-pink-500 hover:scale-110 duration-500">
            <FaReact className="bg-white text-3xl"></FaReact>
            <p>ReactJs</p>
          </div>

          <div className=" flex flex-row gap-4 p-1 text-teal-400 hover:scale-110 duration-500">
            <TbBrandGolang className="bg-white text-3xl"></TbBrandGolang>
            <p>GOlang</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
