import React from "react";

function CInput(props) {
  return (
    <input
      className="m-4 pt-8 pb-8 pl-5 rounded-2xl text-2xl border-solid border-purple-200 border-2 text-purple-700 hover:border-purple-600 focus:outline-purple-600 placeholder:text-purple-200"
      {...props}
    />
  );
}

export default CInput;
