import React from "react";
import NavOne from "../NavOne/NavOne";
import NavTwo from "../NavTwo/NavTwo";
import Button from "../Button/Button.jsx";
import img2 from "../../img/paypal.png";
import "./Profile.scss";

const Profile = () => {
  const componentName = "profile-component";

  return (
    <div className={componentName}>
      <h1>Profile</h1>
      <NavOne />
      <NavTwo />
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
