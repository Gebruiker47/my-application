import React from "react";

const AppButton = ({ className, id, children, customClick }) => {
  return (
    <div>
      <button
        id={id}
        className={`app-button ${className}`}
        onClick={customClick}
      >
        {children}
      </button>
    </div>
  );
};

export default AppButton;
