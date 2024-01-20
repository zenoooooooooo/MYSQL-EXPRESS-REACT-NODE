import React from "react";

const CustomInput = ({ type, className, placeholder, ...restProps}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default CustomInput;
