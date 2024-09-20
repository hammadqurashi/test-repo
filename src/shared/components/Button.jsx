import React from "react";

const Button = ({
  bg = "#F7EE21",
  color = "#000000",
  rounded = "4px",
  handleClick,
  type = "button",
  className = "",
  disabled = false,
  children,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 text-base ${className}`}
      onClick={handleClick}
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
    </button>
  );
};

export default Button;
