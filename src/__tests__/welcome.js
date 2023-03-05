import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "../Welcome";

it("Welcome Page renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<Welcome />);
});
