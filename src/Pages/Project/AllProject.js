import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Ecourse from "../../Assets/Images/carousel.jpg";
import pharmacy from "../../Assets/Images/pharmacy.avif";
import auth from "../../Assets/Images/login.avif";
import Footer from "../../components/Footer/Footer";
const AllProject = () => {
  return (
    <div className="">
      <Navbar />
      <div className="grid lg:grid-cols-3 gap-3 m-10 shadow-lg p-5">
        <div className="lg:cols-span-1">
          <img src={Ecourse} className="rounded-lg h-80 w-screen" />
        </div>
        <div className="lg:col-span-2 mx-5 mt-5 text-xl">
          <h1>Project Title: Ecourse Web Application</h1>
          <div className="flex">
            <h2 className="mt-4 text-xl">
              <i class="fa-solid fa-clock mr-2"></i>Jun 10,2022
            </h2>
            <h2 className="mt-4 ml-4 text-xl">
              <i class="fa-solid fa-thumbtack mr-2"></i>UI/Frontend
            </h2>
          </div>
          <h1 className="mt-4">
            Website:https://html-css-bs-responsive-website.vercel.app/
          </h1>
          <h2 className="mt-4">Tools & Technologies: Html,Css,Bootstrap</h2>
          <h3 className="mt-4">Objective:</h3>
          <p className="lg:indent-28">
            Aliquluptua duo dolores et sit ipsum rebum, sadipscing et erat
            eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum
            clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 m-10 shadow-lg p-5">
        <div className="lg:cols-span-1">
          <img src={pharmacy} className="rounded-lg h-80 w-screen" />
        </div>
        <div className="lg:col-span-2 mx-5 mt-5 text-xl">
          <h1>Project Title: Pharmacy Inventory system</h1>
          <div className="flex">
            <h2 className="mt-4 text-xl">
              <i class="fa-solid fa-clock mr-2"></i>Sep 30,2022
            </h2>
            <h2 className="mt-4 ml-4 text-xl">
              <i class="fa-solid fa-thumbtack mr-2"></i>UI/Frontend
            </h2>
          </div>
          <h1 className="mt-4">Website:https://my-app-psi-nine.vercel.app/</h1>
          <h2 className="mt-4">
            Tools & Technologies: Html,Css,Bootstrap,React Js,Redux
          </h2>
          <h3 className="mt-4">Objective:</h3>
          <p className="lg:indent-28">
            Aliquluptua duo dolores et sit ipsum rebum, sadipscing et erat
            eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum
            clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 m-10 shadow-lg p-5">
        <div className="lg:cols-span-1">
          <img src={auth} className="rounded-lg h-80 w-screen" />
        </div>
        <div className="lg:col-span-2 mx-5 mt-5 text-xl">
          <h1>Project Title: Authentication</h1>
          <div className="flex">
            <h2 className="mt-4 text-xl">
              <i class="fa-solid fa-clock mr-2"></i>Oct 18,2022
            </h2>
            <h2 className="mt-4 ml-4 text-xl">
              <i class="fa-solid fa-thumbtack mr-2"></i>UI/Frontend
            </h2>
          </div>
          <h1 className="mt-4">Website:https://auth-app-puce.vercel.app/</h1>
          <h2 className="mt-4">
            Tools & Technologies: Html,Css,Bootstrap,React Js
          </h2>
          <h3 className="mt-4">Objective:</h3>
          <p className="lg:indent-28">
            Aliquluptua duo dolores et sit ipsum rebum, sadipscing et erat
            eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum
            clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProject;
