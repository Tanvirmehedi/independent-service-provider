import React from "react";
import { Link } from "react-router-dom";
import homeSnd from "../../image/Home_second.png";
const Questions = () => {
  return (
    <div className="md:flex container mx-auto my-20">
      <div className="px-5 mt-10 text-left ">
        <h2 className="text-3xl font-semibold">
          But first, let's ask some tough
          <br />
          questions.
        </h2>
        <p className="pt-3 md:w-1/2 text-slate-500">
          Is your website a little underwhelming? Do you believe in the power of
          content marketing, but are you short on writing resources? Are you
          struggling to get leads online? If you answered yes to any of these
          questions…
        </p>
        <Link
          to="/checkout"
          className="mt-8 inline-block text-orange-400 text-lg"
        >
          ITS TIME TO PULL IN A PROFESSIONAL. ↓
        </Link>
      </div>
      <div className="text-left flex items-center justify-around mt-6">
        <img src={homeSnd} className="w-1/2" alt="" />
        <span className="bg-orange-400 p-5 inline-block -ml-6 rounded-md text-slate-200">
          <h2 className="text-2xl font-bold">LET ME HELP YOU.</h2>
          <hr />
          <p className="mt-5">
            Hi there, I'm Emiclo. I've been a writer, editor, and blogger for
            10+ years (whos counting?). I spend my days wearing slippers and
            writing everything from website content to video scripts to sales
            brochures.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Questions;
