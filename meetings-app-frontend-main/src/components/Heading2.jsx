import React, { Children } from "react";

function Heading2({ children, ...props }) {
  return (
    <h2 className="text-4xl font-bold my-4" {...props}>
      {children}
    </h2>
  );
}

export default Heading2;
