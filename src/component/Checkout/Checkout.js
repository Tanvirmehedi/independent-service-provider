import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "../../image/contact.png";
import "./Checkout.css";
const Checkout = () => {
  const handelSubmit = () => {
    toast("Thank You For Your Booking.");
  };
  return (
    <div className="m-5">
      <ToastContainer />
      <div className="container mx-auto">
        <div className="md:flex justify-around items-center">
          <div>
            <img src={contact} className="w-[400px] mx-auto" alt="contact" />
          </div>
          <div className="md:-ml-20">
            <h2 className="text-2xl font-bold text-orange-500">
              Lets Make Hi Hello
            </h2>
            <p className="text-lg text-orange-400">
              I WILL GIVE YOU A RING. <br /> (ON AN ACTUAL IPHONE)
            </p>
          </div>
        </div>
        <div className="md:w-1/2 mx-auto">
          <div className="form-group">
            <input
              className="mb-4 pl-1"
              type="text"
              name=""
              id=""
              placeholder="First Name"
            />
            <input
              type="text"
              className="pl-1"
              name=""
              id=""
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name=""
              className="w-full pl-1"
              id=""
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              className="pl-1 w-full border-2"
              placeholder="Type Your Message"
            ></textarea>
          </div>
          <button
            onClick={handelSubmit}
            className="w-full bg-orange-400 rounded-md text-lg font-semibold text-slate-50 py-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
