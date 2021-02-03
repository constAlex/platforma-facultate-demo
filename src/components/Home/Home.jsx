import React from "react";
import classnames from "classnames";
import img1 from "../../img/facebook.png";
import img2 from "../../img/paypal.png";
import img3 from "../../img/spotify.png";
import "./Home.scss";

const Home = (props) => {
  const componentName = "home-component";
  const homeClasses = classnames(
    props.context ? `${componentName}__button-${props.context}` : `${componentName}__button`
  );

  return (
    <div className={componentName}>
      <h1>Home</h1>
      <button className={homeClasses}>
        <img
          className={`${componentName}__icon`}
          src={img1}
          alt="facebook icon"
        />
        Select facebook
      </button>
      <button className={`${homeClasses} ${homeClasses}--blue`} id="btn-red">
        <img
          className={`${componentName}__icon`}
          src={img2}
          alt="paypal icon"
        />
        Select paypal
      </button>
      <button className={`${homeClasses} ${homeClasses}--green`} id="btn-blue">
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

export default Home;
