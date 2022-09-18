import React from "react";
import { Link } from "react-router-dom";
import Heading1 from "./Heading1";

function Header() {
  return (
    <div className="mb-16 h-[100px] bg-purple-100 text-white flex flex-1 p-4 pl-8 pr-8 items-center justify-between shadow-green-100 shadow-2xl">
      <Heading1 tstyle="text-purple-600">Available</Heading1>
      <div className="w-[300px] flex justify-between text-purple-600">
        <Link
          to="register"
          className="m-4 text-purple-600 text-lg pl-9 pr-9 pt-3 pb-3 rounded-xl border-purple-600 border-2 border-solid"
        >
          Register
        </Link>
        <Link
          to="login"
          className="m-4 text-white text-lg pl-9 pr-9 pt-3 pb-3 rounded-xl bg-purple-600"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
