import React from "react";
import notFound from "../../image/error-404.png";
const Notfound = () => {
  return (
    <div className="max-h-screen">
      <img src={notFound} className="mx-auto " alt="Not Found" />
    </div>
  );
};

export default Notfound;
