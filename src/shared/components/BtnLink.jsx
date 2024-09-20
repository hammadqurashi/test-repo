import React from "react";
import { Link } from "react-router-dom";

const BtnLink = ({
  bg = "#F7EE21",
  color = "#000000",
  rounded = "4px",
  href = "",
  type = "button",
  className = "",
  disabled = false,
  children,
}) => {
  return (
    <Link
      to={href}
      className={`flex items-center justify-center gap-2 px-6 py-2 text-base ${className}`}
      style={{
        background: bg,
        color: color,
        opacity: disabled ? "0.7" : "1",
        borderRadius: rounded,
      }}
      type={type}
      disabled={disabled}
    >
      {children}
    </Link>
  );
};

export default BtnLink;
