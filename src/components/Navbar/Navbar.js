import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  let location = window.location.pathname;
  return (
    <div className="w-screen h-[80px] z-10 drop-shadow-lg sticky top-0">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div>
          <h1 className="text-2xl">
            <span className="text-4xl font-bold text-indigo-600">H</span>
            arish <span className="text-4xl font-bold text-indigo-600">G</span>
            uhan!
          </h1>
        </div>
        <div className="flex justify-center">
          <ul className="hidden md:flex items-center">
            <Link to={"/"}>
              <li className={`${location === "/" ? "text-indigo-600" : null}`}>
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li
                className={`${
                  location === "/about" ? "text-indigo-600" : null
                }`}
              >
                About Me
              </li>
            </Link>
            <Link to="/projects">
              <li
                className={`${
                  location === "/project" ? "text-indigo-600" : null
                }`}
              >
                Projects
              </li>
            </Link>
            <li
              className={`${
                location === "/contact" ? "text-indigo-600" : null
              }`}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="hover:bg-indigo-600 p-3 bg-indigo-500 text-white px-6 hover:text-white rounded-lg border mr-8 sm:hidden md:hidden lg:flex">
            Hire Me
          </button>
        </div>
        <div className="md:hidden" onClick={showNav}>
          {nav ? (
            <i class="fa-solid fa-xmark text-2xl mr-4"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl mr-4"></i>
          )}
        </div>
      </div>
      {nav ? (
        <div className="w-full bg-white pl-5 md:hidden pb-3">
          <div className="">
            <ul className="">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Skills</li>
              <li>Education</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <button className="hover:bg-indigo-600 p-3 text-indigo-600 px-6 hover:text-white rounded-lg border border-indigo-600 mr-8">
              Hire Me
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
