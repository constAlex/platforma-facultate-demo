import React from "react";
import RoundedButton from "../RoundedButton/RoundedButton.jsx";
import img1 from "../../img/facebook.png";
import img2 from "../../img/paypal.png";
import img3 from "../../img/spotify.png";

const NavTwo = () => {
  return (
    <div>
      <RoundedButton
        text="Select Facebook"
        img={img1}
        modifiers="rounded-btn-component--profile-context rounded-btn-component--font-arial rounded-btn-component--font-bold"
        context="right"
      />
      <RoundedButton
        text="Select PayPal"
        modifiers="rounded-btn-component--profile-context rounded-btn-component--font-arial rounded-btn-component--font-bold rounded-btn-component--blue"
        img={img2}
        context="right"
      />
      <RoundedButton
        text="Select Spotify"
        modifiers="rounded-btn-component--profile-context rounded-btn-component--font-arial rounded-btn-component--font-bold rounded-btn-component--green"
        img={img3}
        context="right"
      />
    </div>
  );
};

export default NavTwo;
