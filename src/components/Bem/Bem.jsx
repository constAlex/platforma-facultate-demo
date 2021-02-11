import React from "react";
import Settings from "../Settings/Settings";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import "./Bem.scss";

const Bem = () => {
  const componentName = "bem-component";

  return (
    <div className={componentName}>
      <Settings />
      {/* <hr /> */}
      <Home />
      {/* <hr /> */}
      <Profile />
    </div>
  );
};

export default Bem;
