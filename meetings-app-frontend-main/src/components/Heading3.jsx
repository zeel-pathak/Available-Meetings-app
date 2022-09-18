import React, { Children } from "react";

function Heading3({ children, ...props }) {
  return (
    <h3 className="text-3xl font-bold my-4" {...props}>
      {children}
    </h3>
  );
}

export default Heading3;
