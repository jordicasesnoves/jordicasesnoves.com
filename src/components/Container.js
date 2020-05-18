import React from "react";

export const Container = (props) => {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16">
      {props.children}
    </div>
  );
};
