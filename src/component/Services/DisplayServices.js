import React from "react";

const DisplayServices = ({ service }) => {
  const { name, image, price } = service;
  return (
    <div>
      <h1> {name} </h1>
    </div>
  );
};

export default DisplayServices;
