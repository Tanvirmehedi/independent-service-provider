import React from "react";
import { Link } from "react-router-dom";
import banner from "../../image/banner.png";

const Banner = () => {
  return (
    <div className="md:flex justify-center items-center">
      <div className="grid gap-7 text-section text-left px-5">
        <h4 className="text-lg text-orange-400">
          CONTENT STRATEGY + COPYWRITING
        </h4>
        <h1 className="md:-mt-5 text-5xl font-bold text-slate-3000 uppercase">
          Write WITH
          <br />
          DIRECTION
        </h1>
        <p>Take 2. Its time to create new content.</p>

        <Link
          to="/checkout"
          className=" bg-orange-400 text-slate-50 px-3 py-1 text-2xl my-4 md:inline-block rounded-md drop-shadow-lg font-semibold uppercase"
        >
          GET Muster CONTENT
        </Link>
      </div>
      <div className="image-section">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
