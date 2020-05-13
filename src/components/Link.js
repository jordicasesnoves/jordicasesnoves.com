import React from "react";

export const TextLink = (props) => {
  return (
    <a
      href={props.href}
      className="cursor-pointer text-accent hover:text-green-900 transition-all duration-200 font-medium"
    >
      {props.children}
    </a>
  );
};
