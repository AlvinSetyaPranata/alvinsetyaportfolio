import React from "react";
import { HashRouter } from "react-router-dom";
import AnimateRoute from "./PagesTransition";

function Routers() {

  return (
    <HashRouter>
      <AnimateRoute />
    </HashRouter>
  );
}

export default Routers;
