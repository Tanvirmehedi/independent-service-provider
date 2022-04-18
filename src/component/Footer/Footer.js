import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="py-2 bg-orange-100">
      <p>
        All Right Reserve <Link to="/">Write Way </Link> &copy;{" "}
        {year.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
