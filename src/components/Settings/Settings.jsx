import React from "react";
import classnames from "classnames";
import Button from "../Button/Button.jsx";
import img1 from "../../img/facebook.png";
import img2 from "../../img/paypal.png";
import img3 from "../../img/spotify.png";
import "./Settings.scss";

const Settings = () => {
  const componentName = "settings-component";
  const buttonSettingsContextblue = classnames(
    ` ${componentName}__button-settings ${componentName}__button-settings--blue`
  );
  const buttonSettingsContextRed = classnames(
    ` ${componentName}__button-settings ${componentName}__button-settings--red`
  );

  return (
    <div className={componentName}>
      <h1>Settings</h1>
      <div className="flex-container">
        <Button
          text="Select Facebook"
          modifier={` ${componentName}__button-settings`}
          img={img1}
          imgPosition="right"
        />
        <Button
          text="Select PayPal"
          modifier={buttonSettingsContextblue}
          img={img2}
        />
        <Button
          text="Select Spotify"
          modifier={buttonSettingsContextRed}
          img={img3}
        />
      </div>
    </div>
  );
};

export default Settings;
