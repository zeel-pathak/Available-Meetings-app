import React from "react";

function RowCell({ children, ...props }) {
  return (
    <div className="m-4 text-black bg-gray-200 text-lg pl-9 pr-9 pt-3 pb-3 rounded-xl">
      {children}
    </div>
  );
}

export default RowCell;
