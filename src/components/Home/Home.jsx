import React from "react";
import Button from "../Button/Button.jsx";
import img1 from "../../img/facebook.png";
import img2 from "../../img/paypal.png";
import img3 from "../../img/spotify.png";
import "./Home.scss";

const Home = () => {
  const componentName = "home-component";

  return (
    <div className={componentName}>
      <h1>Home</h1>
      <Button
        text="Select Facebook"
        modifiers="btn-component--border"
        img={img1}
        context="right"
      />
      <Button
        text="Select PayPal"
        modifiers="btn-component--border-thick btn-component--font-bold btn-component--red"
        img={img2}
        context="right"
      />
      <Button
        text="Select Spotify"
        modifiers="btn-component--border btn-component--green"
        img={img3}
      />
    </div>
  );
};

export default Home;
