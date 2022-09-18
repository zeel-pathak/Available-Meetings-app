import React from "react";
import { CInput } from "../../components";

function Page2({ form }) {
  return (
    <div className="flex flex-col">
      <CInput
        id="userName"
        name="userName"
        type="text"
        placeholder="Username"
        onChange={form.handleChange}
        value={form.values.userName}
      />

      <CInput
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={form.handleChange}
        value={form.values.email}
      />
    </div>
  );
}

export default Page2;
