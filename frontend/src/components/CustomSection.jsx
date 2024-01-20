import React from "react";

const CustomSection = ({
  tag: Tag = "div",
  title,
  children,
  className,
  ...restProps
}) => {
  return (
    <Tag className={className} {...restProps}>
      <h2>{title}</h2>
      {children}
    </Tag>
  );
};

export default CustomSection;
