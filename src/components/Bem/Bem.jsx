import React from "react";
import Settings from "../Settings/Settings";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import "./Bem.scss";

const Bem = () => {
  const componentName = "bem-component";

  return (
    <div className={componentName}>
      <h1 className={`${componentName}__title`}>BEM</h1>
      <h1 className={`${componentName}__subtitle`}>block element modifier</h1>
      <Settings />
      <Home />
      <Profile />
    </div>
  );
};

export default Bem;
