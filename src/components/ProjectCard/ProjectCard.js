import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ img, title, domain, path }) => {
  return (
    <div className="shadow-xl shadow-zinc-800 p-4 mb-10 md:shadow-xl rounded-lg">
      <img src={img} className="rounded-md h-72 w-screen " />
      <h1 className="text-center mt-4 text-3xl font-medium">{title}</h1>
      <h3 className="text-center text-xl mt-3">{domain}</h3>
      <div className="flex justify-center py-5">
        <a href={path} target="_blank">
          <button className="bg-indigo-600 p-3 text-white mt-4 px-10 rounded-lg font-bold">
            View
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
