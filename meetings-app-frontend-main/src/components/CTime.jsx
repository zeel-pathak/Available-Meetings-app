import React from "react";

function CTime(props) {
  return (
    <input
      type="time"
      className="m-4 pt-2 pb-2 pl-2 pr-2 rounded-2xl text-lg border-solid border-purple-200 border-2 text-purple-700 hover:border-purple-600 focus:outline-purple-600 placeholder:text-purple-200"
      {...props}
    />
  );
}

export default CTime;
