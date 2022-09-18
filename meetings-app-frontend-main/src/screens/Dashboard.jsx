import React from "react";
import { useFormik } from "formik";
import { updateFreeSlot } from "../api";
import {
  CDate,
  CTime,
  Heading1,
  CButton,
  Heading3,
  RowCell,
} from "../components";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();

  const { fullName, freeSlot } = location.state;

  const freeTimeForm = useFormik({
    initialValues: {
      startTime: freeSlot[0] || "",
      endTime: freeSlot[1] || "",
    },
    onSubmit: async (values) => {
      const token = localStorage.getItem("token");
      const payload = { data: [values.startTime, values.endTime], token };

      updateFreeSlot(payload);
    },
  });

  return (
    <div className="flex flex-col items-center mt-16 flex-1 h-[100vh]">
      <Heading1>Welcome {fullName}</Heading1>
      <div>
        <p className="my-4 text-center">
          let people know when you're available:{" "}
        </p>
        <form
          className="flex flex-col items-center"
          onSubmit={freeTimeForm.handleSubmit}
        >
          <div>
            <label htmlFor="startTime">from: </label>
            <CDate
              id="startTime"
              name="startTime"
              type="time"
              onChange={freeTimeForm.handleChange}
              value={freeTimeForm.values.startTime}
            />
            <label htmlFor="startTime">to: </label>
            <CTime
              id="endTime"
              name="endTime"
              type="time"
              onChange={freeTimeForm.handleChange}
              value={freeTimeForm.values.endTime}
            />
          </div>
          <CButton type="submit" title="Submit" />
        </form>
      </div>
      <div>
        <Heading3>Your Events: </Heading3>
        <RowCell>10PM - Person - EmailID</RowCell>
        <RowCell>10PM - Person - EmailID</RowCell>
        <RowCell>10PM - Person - EmailID</RowCell>
      </div>
    </div>
  );
}

export default Dashboard;
