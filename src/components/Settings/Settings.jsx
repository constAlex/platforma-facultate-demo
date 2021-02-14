import React from "react";
import Button from "../Button/Button.jsx";
import img1 from "../../img/facebook.png";
import img2 from "../../img/paypal.png";
import img3 from "../../img/spotify.png";
import "./Settings.scss";

const Settings = () => {
  const componentName = "settings-component";

  return (
    <div className={componentName}>
      <h1>Settings</h1>
      <div className="flex-container">
        <Button
          text="Select Facebook"
          modifiers="btn-component--border"
          img={img1}
          context="right"
        />
        <Button
          text="Select PayPal"
          modifiers="btn-component--border btn-component--blue"
          img={img2}
        />
        <Button
          text="Select Spotify"
          modifiers="btn-component--border btn-component--green"
          img={img3}
        />
      </div>
    </div>
  );
};

export default Settings;
