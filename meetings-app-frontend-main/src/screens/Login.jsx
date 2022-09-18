import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import CButton from "../components/CButton";
import Heading3 from "../components/Heading3";
import { CInput } from "../components";
import decor from "../assets/loginDecor.png";

function Login() {
  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      userName: "",
      password: "",
      isEmail: false,
    },
    onSubmit: async (values) => {
      const res = await axios.post(`${BASE_URL}/auth/login`, values);

      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/dashboard", {
          state: {
            fullName: res.data.fullName,
            freeSlot: res.data.freeSlot.freeSlot,
          },
        });
      }
    },
  });

  return (
    <div className="flex flex-1 flex-col justify-center items-center mt-[2%]">
      <div className="w-[50%] border-2 border-gray-400 border-b-0 pl-24 pr-24 pt-16 pb-16 rounded-t-3xl">
        <Heading3>Lets sign in here</Heading3>
        <p className="text-gray-400">Enter into available</p>
        <img
          src={decor}
          alt=""
          className="absolute top-[202px] right-[400px] w-52"
        />
      </div>
      <div className="w-[50%] border-2 border-gray-400 border-t-gray-300 pl-16 pr-16 pt-20 pb-16 rounded-b-3xl">
        <form onSubmit={loginForm.handleSubmit} className="">
          <div className="flex flex-col">
            <CInput
              id="userName"
              name="userName"
              type="text"
              placeholder="Username"
              onChange={loginForm.handleChange}
              value={loginForm.values.userName}
            />

            <CInput
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
            />
          </div>
          <CButton type="submit" title="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
