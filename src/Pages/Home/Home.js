import React from "react";
import homeImg from "../../Assets/Images/home.svg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Project from "../Project/Project";
const Home = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <div
        className={`grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xs:text-center sm:grid-cols-1 h-[90vh]`}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-5xl sm:text-2xl font-black uppercase md:text-center sm:mt-20 xs:mt-20 xs:text-xl sm:text-center xs:text-3xl">
            Hi, iam
            <span className="text-indigo-600 text-6xl sm:text-3xl lg:text-6xl xs:text-3xl">
              {" "}
              H
            </span>
            arish
            <span className="text-indigo-600 text-6xl sm:text-3xl lg:text-6xl xs:text-3xl">
              {" "}
              G
            </span>
            uhan
          </h1>
          <p className="text-grey text-2xl mt-6 sm:text-xl xs:text-xl">
            A Web & Mobile Application Developer
          </p>
          <button className="bg-grey sm:p-3 sm:px-4 xs:p-2 sm:px-3 xs:text-md sm:text-md  p-4 px-6 mt-5 text-xl rounded-md hover:bg-indigo-600 hover:text-white">
            <i className="fa-solid fa-download mx-2"></i>Download CV
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={homeImg} className="" />
        </div>
      </div>
      <Project />
      <div className="flex justify-center mt-5">
      <button className="bg-indigo-600 p-3 text-white mt-4 px-10 rounded-lg font-bold">
        View Projects
      </button></div>
      <Footer />
    </div>
  );
};

export default Home;
