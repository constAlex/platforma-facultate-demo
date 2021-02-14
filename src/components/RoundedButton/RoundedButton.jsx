import React from "react";
import classnames from "classnames";
import "./RoundedButton.scss";

const RoundedButton = (props) => {
  const { modifiers, text, img, context } = props;
  const componentName = "rounded-btn-component";
  const buttonClasses = classnames(
    componentName,
    modifiers,
    context && `${componentName}--${context}`
  );
  const iconClasses = classnames(
    `${componentName}__icon`,
    context && `${componentName}__icon--${context}`
  );
  const wrapperContent = classnames(
    `${componentName}__wrapper-content`,
    context && `${componentName}__wrapper-content--${context}`
  );

  return (
    <button className={buttonClasses}>
      <div className={wrapperContent}>
        <img className={iconClasses} src={img} alt="default icon" />
        {text}
      </div>
    </button>
  );
};

export default RoundedButton;
