import React from "react";

function CButton({ title, tstyle, ...props }) {
  return (
    <button
      className={
        "m-4 text-white text-lg pl-9 pr-9 pt-3 pb-3 rounded-xl bg-purple-600 hover:bg-purple-700 " +
        tstyle
      }
      {...props}
    >
      {title}
    </button>
  );
}

export default CButton;
