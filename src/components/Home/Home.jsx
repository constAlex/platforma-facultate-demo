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
      <Button text="Select Facebook" img={img1} />
      <Button
        text="Select PayPal"
        modifier="blue"
        img={img2}
        imgPosition="right"
      />
      <Button text="Select Spotify" modifier="green" img={img3} />
    </div>
  );
};

export default Home;
