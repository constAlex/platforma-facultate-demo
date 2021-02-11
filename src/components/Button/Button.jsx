import React from "react";
import classnames from "classnames";
import "./Button.scss";

const Button = (props) => {
  const { modifier, text, img, imgPosition } = props;
  const componentName = "btn-component";

  const buttonClasses = classnames(
    `${componentName}__button`,
    modifier && `${componentName}__button--${modifier}`,
    imgPosition && `${componentName}__button--${imgPosition}`
  );
  const iconClasses = classnames(
    `${componentName}__icon`,
    imgPosition && `${componentName}__icon--${imgPosition}`
  );

  return (
    <div className={componentName}>
      <button className={buttonClasses}>
        {imgPosition === "right" && text}
        <img className={iconClasses} src={img} alt="default icon" />
        {imgPosition !== "right" && text}
      </button>
    </div>
  );
};

export default Button;
