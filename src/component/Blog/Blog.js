import React, { useEffect, useState } from "react";
import DisplayBlog from "./DisplayBlog";

const Blog = () => {
  const [qa, setQa] = useState([]);

  useEffect(() => {
    fetch("qn.json")
      .then((res) => res.json())
      .then((data) => setQa(data));
  }, []);

  return (
    <div className="container mx-auto md:grid grid-cols-3 gap-3">
      {qa.map((data) => (
        <DisplayBlog key={data.id} data={data}></DisplayBlog>
      ))}
    </div>
  );
};

export default Blog;
