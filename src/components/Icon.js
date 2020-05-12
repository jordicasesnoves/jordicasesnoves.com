import React from "react";
import * as icons from "../icons";

export const Icon = ({
  className = " ",
  size = " w-5 h-5 ",
  tooltip = false,
  ...props
}) => {
  const NewComponent = icons[props.icon];
  return (
    <>
      <NewComponent
        className={
          "relative inline-flex items-center self-center " +
          size +
          " " +
          className
        }
      >
        {props.tooltip && (
          <div className="absolute w-10 h-10 bg-black">hey</div>
        )}
      </NewComponent>
    </>
  );
};
