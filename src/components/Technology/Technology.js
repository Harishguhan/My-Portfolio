import React from "react";
const Technology = ({ img }) => {
  return (
    <div className="p-10 xs:mt-10 shadow-2xl rounded-xl mb-10">
      <img
        src={img}
        alt="..."
        className="md:h-52 sm:h-48 xs:h-40 h-64 xs:mt-0 mx-auto"
      />
    </div>
  );
};

export default Technology;
