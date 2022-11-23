import React from 'react'
import { Link } from "react-router-dom";

function Button(props) {

    var class_name = "py-3 text-center px-6 rounded-md bg-indigo-600 text-white " + props.classname

  return (
    <>
        <Link className={class_name}>
            {props.name}
        </Link>
    </>
)
}

export default Button