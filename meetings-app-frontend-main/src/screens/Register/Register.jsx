import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import CButton from "../../components/CButton";
import Heading3 from "../../components/Heading3";
import decor from "../../assets/decor.png";

function Register() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.userName) {
      errors.userName = "Required";
    } else if (values.userName.length > 15) {
      errors.userName = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const registerForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await axios.post(`${BASE_URL}/auth/regi`, values);

      if (res.status === 200) {
        navigate("/login");
      }
    },
    validate,
  });

  const pages = [
    <Page1 form={registerForm}></Page1>,
    <Page2 form={registerForm}></Page2>,
    <Page3 form={registerForm}></Page3>,
  ];

  return (
    <div className="flex flex-1 flex-col justify-center items-center mt-[2%]">
      <div className="w-[50%] border-2 border-gray-400 border-b-0 pl-24 pr-24 pt-16 pb-16 rounded-t-3xl">
        <Heading3>Set your availability</Heading3>
        <p className="text-gray-400">Let us know who you are</p>
        <img
          src={decor}
          alt=""
          className="absolute top-[190px] right-[400px] w-52"
        />
      </div>
      <div className="w-[50%] border-2 border-t-gray-300 border-gray-400 pl-16 pr-16 pt-20 pb-16 rounded-b-3xl">
        <form onSubmit={registerForm.handleSubmit} className="">
          {pages[page]}
          <CButton
            type={page === pages.length - 1 ? "submit" : "button"}
            onClick={() => {
              if (page < pages.length - 1) {
                setPage(page + 1);
              }
            }}
            title={page === pages.length - 1 ? "Submit" : "Next"}
          />
          {page > 0 && (
            <CButton
              type="button"
              onClick={() => {
                if (page > 0) {
                  setPage(page - 1);
                }
              }}
              title="Back"
              tstyle="bg-gray-300 hover:bg-gray-400 text-black"
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
