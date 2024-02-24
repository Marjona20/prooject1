import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded" };
const variants = {
  outline: {
    white_A700: "border-2 border-solid border-white-A700 text-white-A700",
  },
  fill: {
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
    light_green_A700: "bg-light_green-A700 text-white-A700",
    gray_100: "bg-gray-100 text-blue_gray-400",
  },
};
const sizes = {
  xs: "p-[9px]",
  sm: "p-3.5",
  md: "p-[21px] sm:px-5",
  lg: "p-[25px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "white_A700",
    "deep_purple_A200",
    "light_green_A700",
    "gray_100",
  ]),
};

export { Button };
