import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="lg:grid grid-cols-2">
        <div className="flex flex-col justify-center md:mt-1 w-full md:p-20 sm:mt-5 sm:p-10 xs:p-7 xs:mt-3">
          <h1 className="text-2xl">Contact Form</h1>
          <form className="bg-white shadow-lg px-8 pt-6 pb-8 p-7 ">
            <div className="mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="rounded-lg mt-3 w-full bg-form-bg py-3 border-none"
                placeholder="Full Name"
              />
            </div>
            <div className="mt-8">
              <label>Email</label>
              <input
                type="text"
                className="rounded-lg mt-3 w-full bg-form-bg py-3 border-none"
                placeholder="Email"
              />
            </div>
            <div className="mt-8">
              <label>Subject</label>
              <input
                type="text"
                className="rounded-lg mt-3 w-full bg-form-bg py-3 border-none"
                placeholder="Subject"
              />
            </div>
            <div className="mt-8">
              <label>Message</label>
              <textarea
                className="rounded-lg mt-3 w-full bg-form-bg py-3 border-none"
                rows={5}
                placeholder="Message"
              ></textarea>
            </div>
            <button className="bg-indigo-600 mt-5 px-5 py-5 rounded-lg text-white">
              Send Message
            </button>
          </form>
        </div>
        <div className="mx-20 my-20 sm:my-10 md:my-10 xs:my-7 xs:mx-10 md:mx-14">
          <h1 className="xs:mt-0 sm:mt-0 md:mt-0 lg:mt-10 text-2xl">
            Contact Details
          </h1>
          <p className="text-xl">
            <i class="fa-sharp fa-solid fa-location-dot mt-10 mr-4"></i>
            3/7A,North Street, Keelavarappan Kurichy Ariyalur 621-715
          </p>
          <p className="text-xl"><i class="fa-solid fa-envelope mt-10 mr-4"></i>harishguhan@dorustree.in</p>
          <p className="text-xl"><i class="fa-solid fa-phone mt-10 mr-4"></i>9025099853</p>

        </div>
      </div>
    </>
  );
};

export default Contact;
