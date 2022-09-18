import React from "react";
import Heading1 from "./Heading1";

function Footer() {
  return (
    <div className="h-[100px] bg-purple-100 flex flex-1 mt-16 p-4 pl-8 pr-8 items-center justify-center shadow-green-100 shadow-2xl">
      <div className="flex w-[500px] justify-between items-center">
        <Heading1 tstyle="text-purple-600">Available</Heading1>
        <p>Copyright@2022 by Eartholution</p>
      </div>
    </div>
  );
}

export default Footer;
