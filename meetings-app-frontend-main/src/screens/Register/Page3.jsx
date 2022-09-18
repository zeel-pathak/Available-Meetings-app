import React from "react";
import { CInput } from "../../components";

function Page2({ form }) {
  return (
    <div className="flex flex-col">
      <CInput
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={form.handleChange}
        value={form.values.password}
      />
    </div>
  );
}

export default Page2;
