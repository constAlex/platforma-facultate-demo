import React from "react";
import Settings from "../Settings/Settings";
import Home from "../Home/Home";
import "./Bem.scss";

const Bem = () => {
  const componentName = "bem-component";

  return (
    <div className={componentName}>
      <Settings />
      <hr />
      <Home context="home" />
    </div>
  );
};

export default Bem;
