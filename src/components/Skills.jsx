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
    <div name="skills" className="w-full h-screen bg-[#020f15]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-8">
          <div className="hover:scale-110 duration-500 text-red-600 flex flex-row gap-4 p-2">
            <AiFillHtml5 className="bg-white text-5xl"></AiFillHtml5>
            <p>HTML</p>
          </div>
          <div className="hover:scale-110 duration-500 text-blue-500 flex flex-row gap-4 p-2">
            <SiTailwindcss className="bg-white text-5xl"></SiTailwindcss>
            <p>TailwindCss</p>
          </div>
          <div className="hover:scale-110 duration-500 text-yellow-400 flex flex-row gap-4 p-2">
            <IoLogoJavascript className="bg-white text-5xl"></IoLogoJavascript>
            <p>Javascript</p>
          </div>
          <div className="hover:scale-110 duration-500 text-white flex flex-row gap-4 p-2">
            <AiFillGithub className="text-5xl">Git</AiFillGithub>
            <p>Git and Github</p>
          </div>
          <div className="flex flex-row gap-4 text-blue-500 hover:scale-110 duration-500 p-2">
            <FaDocker className="bg-white text-5xl "></FaDocker>
            <p>Docker</p>
          </div>
          <div className="flex flex-row gap-4 p-2  text-green-500 hover:scale-110 duration-500">
            <SiMongodb className="text-5xl"></SiMongodb>
            <p>MongoDB</p>
          </div>
          <div className=" flex flex-row gap-4 text-blue-900  p-2 hover:scale-110 duration-500 ">
            <SiPostgresql className="bg-white text-5xl"></SiPostgresql>
            <p>Postgresql</p>
          </div>
          <div className=" flex flex-row gap-4 p-2 hover:scale-110 duration-500">
            <GrMysql className="bg-white text-5xl text-blue-950"></GrMysql>
            <p className="text-yellow-500">MySQL</p>
          </div>
          <div className="flex flex-row gap-4 p-2 text-yellow-600 hover:scale-110 duration-500">
            <SiExpress className="bg-white text-5xl"></SiExpress>
            <p>ExpresJs</p>
          </div>
          <div className=" flex flex-row gap-4 p-2 text-pink-500 hover:scale-110 duration-500">
            <FaReact className="bg-white text-5xl"></FaReact>
            <p>ReactJs</p>
          </div>

          <div className=" flex flex-row gap-4 p-2 text-teal-400 hover:scale-110 duration-500">
            <TbBrandGolang className="bg-white text-5xl"></TbBrandGolang>
            <p>GOlang</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
