import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiOutlineLinkedin,
  AiFillGithub,
  // AiOutlineMail,
} from "react-icons/ai";
import { Link } from "react-scroll";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed- w-full h-[80px] flex justify-between items-center px-4 bg-[#020f15] text-white">
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#030520] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl sm:text-3xl">
          <Link onClick={handleClick} to="home " smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl sm:text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl sm:text-3xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className=" hidden lg:flex fixed  flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-cyan-300 "
              href="https://twitter.com/anjali29singh"
            >
              twitter
              <AiFillTwitterCircle size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-cyan-300 "
              href="https://www.linkedin.com/in/anjali-singh-0b3519202/"
            >
              Linkedin
              <AiOutlineLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-cyan-300 "
              href="https://github.com/anjali29singh"
            >
              Github
              <AiFillGithub size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-cyan-300 "
              href="/"
            >
              Mail
              <AiOutlineMail size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
