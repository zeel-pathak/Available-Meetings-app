import React, { Children } from "react";

function Heading1({ children, tstyle, ...props }) {
  return (
    <h1 className={"text-5xl font-prompt " + tstyle} {...props}>
      {children}
    </h1>
  );
}

export default Heading1;
