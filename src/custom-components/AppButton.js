import React from "react";

const AppButton = ({ className, id, children, customClick, style }) => {
  return (
    <div>
      <button
        id={id}
        className={`app-button ${className}`}
        style={style}
        onClick={customClick}
      >
        {children}
      </button>
    </div>
  );
};

export default AppButton;
