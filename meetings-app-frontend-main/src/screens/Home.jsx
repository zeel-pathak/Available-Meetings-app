import React from "react";
import homeBg from "../assets/home-bg.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-[100vh]">
      <h1 className="text-[200px] text-purple-600 font-bold">AVAILABLE</h1>
      <p className="absolute top-[55%] left-[50%] text-xl">for meetings...</p>
      <img src={homeBg} alt="" className="absolute bottom-0 right-0 -z-10" />

      <div className="ml-52 w-[300px] flex justify-between text-purple-600">
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

export default Home;
