import React from "react";
import { CInput } from "../../components";

function Page1({ form }) {
  return (
    <div className="flex flex-col">
      <CInput
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First name"
        onChange={form.handleChange}
        value={form.values.firstName}
      />

      <CInput
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last name"
        onChange={form.handleChange}
        value={form.values.lastName}
      />
    </div>
  );
}

export default Page1;
