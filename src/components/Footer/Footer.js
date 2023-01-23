import React from "react";

const Footer = () => {
  return (
    <div className="sm:mt-0 md:mt-10 lg:mt-20 shadow-xl shadow-zinc-800 p-4 md:shadow-xl">
      <h1 className="text-4xl text-center font-semibold">Follow me</h1>
        <div className="flex justify-center xs:mt-5 sm:mt-10 lg:mt-20">
          <i className="fa-brands fa-github sm:mx-10 xs:mx-3 text-4xl bg-grey p-3 mb-10 rounded-md hover:text-indigo-600 cursor-pointer"></i>
          <i className="fa-brands fa-twitter sm:mx-10 xs:mx-3 text-4xl bg-grey p-3 mb-10 rounded-md hover:text-indigo-600 cursor-pointer"></i>
          <i className="fa-brands fa-linkedin-in sm:mx-10 xs:mx-3 text-4xl bg-grey p-3 mb-10 rounded-md hover:text-indigo-600 cursor-pointer"></i>
          <i className="fa-brands fa-instagram sm:mx-10 xs:mx-3 text-4xl bg-grey p-3 mb-10 rounded-md hover:text-indigo-600 cursor-pointer"></i>
        </div>
    </div>
  );
};

export default Footer;
