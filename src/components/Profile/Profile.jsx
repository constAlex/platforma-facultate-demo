import React from "react";
import classnames from "classnames";
import Button from "../Button/Button.jsx";
import img1 from "../../img/facebook.png";
import img2 from "../../img/paypal.png";
import img3 from "../../img/spotify.png";
import "./Profile.scss";

const Profile = () => {
  const componentName = "profile-component";
  const buttonProfileContextblue = classnames(
    ` ${componentName}__button-settings ${componentName}__button-settings--blue`
  );
  const buttonProfileContextRed = classnames(
    ` ${componentName}__button-settings ${componentName}__button-settings--red`
  );
  const buttonProfileContextLargeBlue = classnames(
    ` ${componentName}__button-settings-large ${componentName}__button-settings-large--blue`
  );

  return (
    <div className={componentName}>
      <h1>Profile</h1>
      <div className="flex-container">
        <Button
          text="Select Facebook"
          modifier={` ${componentName}__button-settings`}
          img={img1}
          imgPosition="right"
        />
        <Button
          text="Select PayPal"
          modifier={buttonProfileContextblue}
          img={img2}
        />
        <Button
          text="Select Spotify"
          modifier={buttonProfileContextRed}
          img={img3}
        />
      </div>
      <Button
        text="Select Newest PayPal"
        modifier={buttonProfileContextLargeBlue}
        img={img2}
      />
    </div>
  );
};

export default Profile;
