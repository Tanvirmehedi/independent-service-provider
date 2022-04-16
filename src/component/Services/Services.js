import React, { useEffect, useState } from "react";
import DisplayServices from "./DisplayServices";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        alert(err, "data Missing");
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl uppercase">Our services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-3">
        {data.map((service, index) => (
          <DisplayServices key={index} service={service}></DisplayServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
