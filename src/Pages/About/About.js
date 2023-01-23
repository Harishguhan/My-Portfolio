import React from "react";
import Footer from "../../components/Footer/Footer"
import myImg from "../../Assets/Images/myImg.jpg";
import Technology from "../../components/Technology/Technology";
import html from "../../Assets/Images/html.png";
import css from "../../Assets/Images/css.png";
import javaScript from "../../Assets/Images/js.png";
import react from "../../Assets/Images/react.png";
import bootstrap from "../../Assets/Images/bootstrap.png";
import tailWind from "../../Assets/Images/tailwind.png";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div class="grid md:grid-cols-5 gap-3 md:mx-10 xs:mt-10">
        <div class="">
          <div>
            <img
              src={myImg}
              alt="..."
              className="rounded-lg xs:h-70 flex xs:mx-auto xs:p-4 xs:mx-auto md:p-0 xs:my-0 sm:mx-16 md:mx-auto xs:m-20 md:cols-span-1"
            />
          </div>
        </div>
        <div class="md:col-span-4 mt-10 sm:p-10 xs:p-10 md:p-0 xs:my-0">
          <h1 className="md:mx-10 lg:text-2xl mt-6">
            <span className="mr-4">❖</span>
            Frontend Developer with 1+ years of professional experience in Web
            Designing and User Interface Development.
          </h1>
          <h1 className="md:mx-10 lg:text-2xl mt-4">
            <span className="mr-4">❖</span>Experts in Responsive Web Design and
            analyzing and fixing UI bugs quickly.
          </h1>
          <h1 className="md:mx-10 lg:text-2xl mt-4">
            <span className="mr-4">❖</span> Strong knowledge and working
            experience in developing single-page applications using the ReactJS
            library.
          </h1>
          <h1 className="md:mx-10 lg:text-2xl mt-4">
            <span className="mr-4">❖</span>Experts in creating custom reusable
            components using React js
          </h1>
          <h1 className="md:mx-10 lg:text-2xl mt-4">
            <span className="mr-4">❖</span>Experts in client-side designing and
            validations in modern third-party libraries Formik and Yup.
          </h1>
          <h1 className="md:mx-10 lg:text-2xl mt-4">
            <span className="mr-4">❖</span>Handling and maintaining the source
            code using Github.
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-10 text-4xl font-bold">
          Some of the Technologies I have worked with
        </h1>
        <div className="grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xs:p-10 md:p-10 lg:p-10">
          <Technology img={html} />
          <Technology img={css} />
          <Technology img={javaScript} />
          <Technology img={bootstrap} />
          <Technology img={tailWind} />
          <Technology img={react} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
