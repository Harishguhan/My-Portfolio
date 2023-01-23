import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import course from "../../Assets/Images/carousel.jpg";
import pharmacy from "../../Assets/Images/pharmacy.avif";
import login from "../../Assets/Images/login.avif";
const Project = () => {
  const projects = [
    {
      title: "Ecourse",
      tools: "Html,css,Bootstrap",
      domain: "Web Application",
      img: course,
      path: "https://html-css-bs-responsive-website.vercel.app/",
    },
    {
      title: "Pharmacy",
      tools: "Html,css,Bootstrap,React Js",
      img: pharmacy,
      domain: "Web Application",
      path: "https://my-app-psi-nine.vercel.app/",
    },
    {
      title: "Authentication",
      tools: "Html,css,Bootstrap,React Js",
      img: login,
      domain: "Web Application",
      path: "https://auth-app-puce.vercel.app/",
    },
  ];
  return (
    <div className="w-screen">
      <div className="sm:pt-10 lg:pt-0 md:pt-0">
        <h1 className="flex justify-center sm:text-3xl xs:text-3xl md:text-4xl text-6xl font-semibold lg:mt-0 sm:mt-36 xs:mt-20 md:mt-0 mmd:mt-36 xl:mt-0 sm:text-center sm:text-4xl">
          Projects Portfolio
        </h1>
        <div className="w-screen mt-5">
          <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-7">
            {projects.map((item) => {
              return (
                <ProjectCard
                  img={item.img}
                  title={item.title}
                  domain={item.domain}
                  tools={item.tools}
                  path={item.path}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
