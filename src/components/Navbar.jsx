import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navlink from "./Navlink";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  
  const [click, setClick] = useState(-1)


  const handleClick = () => {
    if (click == -1 || click == 1) {
      setClick(0)
    } else if (click == 0 ){
      setClick(1)
    }
  }

  return (
    <div className="flex flex-grow justify-between w-full box-border items-center py-3 px-5 bg-white">
      <div className="">
        <img src="/logo.png" alt="icon" />
      </div>

      <div className="px-2">
        <FontAwesomeIcon icon={faBars} className="fa-xl text-lavender-600" onClick={() => handleClick()}/>
        <Navlink state={click}/>
      </div>
    </div>
  );
}

export default Navbar;
