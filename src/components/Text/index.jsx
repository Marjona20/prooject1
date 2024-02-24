import React from "react";

const sizeClasses = {
  txtCircularStdBold85: "font-bold font-circularstd",
  txtRobotoMedium18: "font-medium font-roboto",
  txtCircularStdBook2995: "font-circularstd font-normal",
  txtCircularStdBold36: "font-bold font-circularstd",
  txtCircularStdBold55: "font-bold font-circularstd",
  txtOswaldBold2396: "font-bold font-oswald",
  txtRobotoRegular1198: "font-normal font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular36: "font-normal font-roboto",
  txtOswaldBold1198: "font-bold font-oswald",
  txtCircularStdBold36WhiteA700: "font-bold font-circularstd",
  txtRobotoRegular18WhiteA700: "font-normal font-roboto",
  txtRobotoRegular12Bluegray900: "font-normal font-roboto",
  txtOswaldBold1398: "font-bold font-oswald",
  txtRobotoRegular18: "font-normal font-roboto",
  txtVarelaRoundRegular1198: "font-normal font-varelaround",
  txtCircularStdBook1198: "font-circularstd font-normal",
  txtCircularStdBook267: "font-circularstd font-normal",
  txtRobotoBold14: "font-bold font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoRegular12WhiteA700: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
