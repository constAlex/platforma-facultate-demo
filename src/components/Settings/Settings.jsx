import React from "react";
import img1 from "../../img/facebook.png";
import img2 from "../../img/paypal.png";
import img3 from "../../img/spotify.png";
import "./Settings.scss";

const Settings = () => {
  const componentName = "settings-component";

  return (
    <div className={componentName}>
      <h1>Settings</h1>
      <button className={`${componentName}__button`}>
        <img
          className={`${componentName}__icon`}
          src={img1}
          alt="facebook icon"
        />
        Select facebook
      </button>
      <button
        className={`${componentName}__button ${componentName}__button--blue`}
        id="btn-red"
      >
        <img
          className={`${componentName}__icon`}
          src={img2}
          alt="paypal icon"
        />
        Select paypal
      </button>
      <button
        className={`${componentName}__button ${componentName}__button--green`}
        id="btn-blue"
      >
        <img
          className={`${componentName}__icon`}
          src={img3}
          alt="spotify icon"
        />
        Select spotify
      </button>
    </div>
  );
};

export default Settings;
