import React from "react";

export const Icon = ({ children, className, onClick }) => {
  return (
    <div className={`icon ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
