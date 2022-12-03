import React from "react";


function Footer() {
  return (
    <div className="flex flex-col items-center justify-evenly w-screen box-border overflow-hidden py-[40px]">
      <h2 className="text-lg font-semibold mb-[30px]">
        Designed and Created by Alvinsetya
      </h2>
      <div className="flex justify-evenly max-w-[400px] min-w-[350px] py-2">
        <a href="https://github.com/AlvinSetyaPranata/">
          <img src="/github.png" alt="icon" />
        </a>
        <a href="https://instagram.com/alvinsetya__p/">
          <img src="/ig.png" alt="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
