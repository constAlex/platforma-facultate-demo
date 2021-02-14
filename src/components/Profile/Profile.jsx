import React from "react";
import RoundedButton from "../RoundedButton/RoundedButton.jsx";
import Button from "../Button/Button.jsx";
import img1 from "../../img/facebook.png";
import img2 from "../../img/paypal.png";
import img3 from "../../img/spotify.png";
import "./Profile.scss";

const Profile = () => {
  const componentName = "profile-component";

  return (
    <div className={componentName}>
      <h1>Profile</h1>
      <RoundedButton
        text="Select Facebook"
        img={img1}
        modifiers="rounded-btn-component--profile-context"
        context="right"
      />
      <RoundedButton
        text="Select PayPal"
        modifiers="rounded-btn-component--profile-context rounded-btn-component--blue"
        img={img2}
      />
      <RoundedButton
        text="Select Spotify"
        modifiers="rounded-btn-component--profile-context rounded-btn-component--green"
        img={img3}
      />
      <div>
        <Button
          text="Select Newest PayPal"
          style="profile-component__button"
          img={img2}
        />
      </div>
    </div>
  );
};

export default Profile;
