import React from "react";
import * as icons from "../icons";

export const Icon = (props) => {
  const NewComponent = icons[props.icon];
  return <NewComponent className="inline items-center self-center w-5 h-5" />;
};
