import React from "react";
import ReactDOM from "react-dom/client";
import Signup from "../Signup";

it("Signup Page renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<Signup />);
});
