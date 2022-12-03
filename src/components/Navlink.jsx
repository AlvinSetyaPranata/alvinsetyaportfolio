import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


// buat style navlink active 

function Navlink({ state }) {
  const classes = "absolute z-20 right-[13px] mt-8 max-h-[140] items-center h-[130px] box-border overflow-hidden flex flex-col justify-between";
    

  const [useClass, setUseClass] = useState("")
  const [path, setPath] = useState("/")


  useEffect(() => {
    if (state == 0) {
      setUseClass("rounded-full w-fit py-3 px-4 bg-lavender-500 animate-navIconLeave")
    } 
    else if (state == -1) {
      setUseClass("rounded-full w-fit py-3 px-4 bg-lavender-500 hidden")
    }
    else {
      setUseClass("rounded-full w-fit py-3 px-4 bg-lavender-500 animate-navIconActive")
    }
  }, [state])

  return (
    <div className={classes}>
      <Link to="/" className={useClass}>
        <FontAwesomeIcon icon={faHome} className="text-lg text-white" />
      </Link>
      <Link to="/about" className={useClass}>
        <FontAwesomeIcon icon={faUser} className="text-lg text-white" />
      </Link>
    </div>
  );
}

export default Navlink;
