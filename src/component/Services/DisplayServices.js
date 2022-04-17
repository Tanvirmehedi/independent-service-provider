import React from "react";
import { Link } from "react-router-dom";

const DisplayServices = ({ service }) => {
  const { name, image, price, shortDescription } = service;
  return (
    <div className="mt-10 border p-4 rounded-lg hover:shadow-2xl transition-all">
      <div className="h-40 my-4 overflow-hidden">
        <img
          className="w-full  mx-auto border-2 hover:border-orange-300 rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="text-lg uppercase"> {name} </div>
      <div className="text-2xl font-semibold my-4">Price : ${price}</div>
      <div className="text-slate-500">
        <span className="text-orange-400 font-bold px-3">Description :</span>
        {shortDescription}
      </div>
      <div>
        <Link
          className="px-2 py-1 bg-orange-400 inline-block rounded-md uppercase mt-4 text-slate-50 font-semibold"
          to={`/checkout`}
        >
          Check Out Now
        </Link>
      </div>
    </div>
  );
};

export default DisplayServices;
