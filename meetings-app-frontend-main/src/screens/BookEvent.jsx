import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { CDate, CSelect, Heading2, CTime, RowCell } from "../components";
import CButton from "../components/CButton";

function BookEvent() {
  const { username } = useParams();
  const bookEventForm = useFormik({
    initialValues: {
      duration: "",
      startTime: "22:00",
      date: "",
    },
    onSubmit: async (values) => {
      alert("TODO: BOOK THE EVENT!");
    },
  });

  const availableTimeslotsForm = useFormik({
    initialValues: {
      date: "",
    },
    onSubmit: async (values) => {
      alert("TODO: GET AVAILABLE TIMESLOTS");
    },
  });

  return (
    <div className="flex flex-col items-center mt-16 flex-1 h-[100vh]">
      <div className="flex">
        <div>
          <Heading2>Book an event with {username}</Heading2>
          <p className="my-4">Select the time & duration for meeting:</p>
          <form onSubmit={bookEventForm.handleSubmit}>
            <div className="flex flex-1 justify-between items-center">
              <label htmlFor="duration">Duration: </label>
              <CSelect
                id="duration"
                name="duration"
                onChange={bookEventForm.handleChange}
                value={bookEventForm.values.duration}
              >
                <option value="1:00">1 hour</option>
              </CSelect>
              <label htmlFor="date">Date: </label>
              <CDate id="date" name="date" value={bookEventForm.values.date} />
            </div>
            <div className="flex flex-1 justify-between items-center">
              <label htmlFor="startTime">Start Time: </label>
              <CTime
                id="startTime"
                name="startTime"
                value={bookEventForm.values.startTime}
              />
              <span>End time: 11:00PM</span>
            </div>
            <CButton type="submit" title={"Book!"} />
          </form>
        </div>
        <div className="bg-gray-300 w-[2px] mx-16"></div>
        <div>
          <Heading2>Available Slots</Heading2>
          <form onSubmit={availableTimeslotsForm.handleSubmit}>
            <div className="flex flex-1 items-between flex-col">
              <div className="flex flex-1 justify-between items-center">
                <label htmlFor="date">Pick a date: </label>
                <CDate
                  id="date"
                  value={availableTimeslotsForm.values.date}
                  name="date"
                />
              </div>
              <CButton type="submit" title={"Get slots"} />
            </div>
          </form>
          <div>
            <RowCell />
            <RowCell />
            <RowCell />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookEvent;
