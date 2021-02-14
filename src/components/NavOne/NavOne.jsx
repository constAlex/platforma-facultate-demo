import React from "react";
import RoundedButton from "../RoundedButton/RoundedButton.jsx";
import img1 from "../../img/facebook.png";
import img2 from "../../img/paypal.png";
import img3 from "../../img/spotify.png";

const NavOne = () => {
  return (
    <div>
      <RoundedButton
        text="Select Facebook"
        img={img1}
        modifiers="rounded-btn-component--profile-context"
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
    </div>
  );
};

export default NavOne;
