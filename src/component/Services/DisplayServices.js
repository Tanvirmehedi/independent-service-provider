import React from "react";
import { Link } from "react-router-dom";

const DisplayServices = ({ service }) => {
  const { name, image, price, shortDescription, id } = service;
  return (
    <div className="mt-10 border p-4 rounded-lg">
      <div className="w-full my-4">
        <img className="w-1/2 mx-auto" src={image} alt="" />
      </div>
      <div> Name Of Service: {name} </div>
      <div>Price : ${price}</div>
      <div className="text-slate-500">
        <span className="text-orange-400 font-bold px-3">Description :</span>
        {shortDescription}
      </div>
      <div>
        <Link
          className="px-2 py-1 bg-orange-400 inline-block rounded-md uppercase mt-4 text-slate-50 font-semibold"
          to={`/checkout/${id}`}
        >
          Check Out Now
        </Link>
      </div>
    </div>
  );
};

export default DisplayServices;
