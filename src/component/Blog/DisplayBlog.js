import React from "react";

const DisplayBlog = ({ data }) => {
  const { question, answer } = data;
  return (
    <div className="border mx-3 my-2 rounded-sm p-3">
      <h3 className="text-lg py-3 rounded-md bg-slate-100">{question}</h3>
      <hr />
      <p className="my-5 overflow-hidden">{answer}</p>
    </div>
  );
};

export default DisplayBlog;
