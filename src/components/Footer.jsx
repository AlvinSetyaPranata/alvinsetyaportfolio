import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-evenly w-screen box-border overflow-hidden py-[40px]">
      <h2 className="text-lg font-semibold mb-[30px]">
        Designed and Created by Alvinsetya
      </h2>
      <div className="flex justify-evenly max-w-[400px] min-w-[350px] py-2">
        <button>
          <img src="../../public/github.png" alt="icon" />
        </button>
        <button>
          <img src="../../public/ig.png" alt="icon" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
