import React from "react";
import ReactDOM from "react-dom/client";
import Login from "../Login";

it("Login Page renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<Login />);
});
