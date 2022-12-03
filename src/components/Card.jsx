import React from "react";
import { Link } from "react-router-dom";
// import Button from "./Button";

function Card({ img, title, desc }) {
  return (
    <div className="grid place-items-center bg-white rounded-md max-w-[250px] py-6 px-4">
      <img
        src={img}
        alt="image"
      />
      <div className="mt-[25px] text-center">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-center max-w-[100ch] text-lg font-[400] mt-[10px] leading-6 text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
