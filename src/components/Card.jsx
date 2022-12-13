import React from "react";
import { Link } from "react-router-dom";
// import Button from "./Button";

function Card({ img, title, desc }) {
  return (
    <div className="grid place-items-center bg-white rounded-md max-w-[300px] py-6 px-4">
      <img
        src={img}
        alt="image"
      />
      <div className="mt-[15px] text-center">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-center max-w-[100ch] text-xl font-[400] mt-2 leading-6">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
