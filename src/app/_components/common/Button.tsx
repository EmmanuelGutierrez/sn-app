import { colors } from "@/@types/colors";
import clsx from "clsx";
import React from "react";

interface ButtonPropsI {
  text: string;
  textColor?: colors;
  bgColor?: colors;
  type?: "button" | "submit" | "reset";
}

const Button = ({className,type,children}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const backgroundColor = clsx(
    `text-white bg-primary hover:opacity-90 focus:ring-4 focus:ring-primary focus:ring-opacity-40 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 `,className
  );
  // const classN = clsx({ [`bg-${colors.PRIMARY_DARK}`]: bgColor });
  // console.log(classN);
  return (
    <button type={type} className={backgroundColor}>
      {children}
    </button>
  );
};

export default Button;
