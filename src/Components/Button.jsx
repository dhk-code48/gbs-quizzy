import React from "react";
import "./_components.css";

const Button = ({ children, rest, onClick }) => {
  return (
    <button className="button" onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
