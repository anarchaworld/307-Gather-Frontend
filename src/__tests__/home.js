import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("render home page - Gather", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Gather/i);
  expect(linkElement).toBeInTheDocument();
});

test("render home page - Cal Poly", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Cal Poly/i);
  expect(linkElement).toBeInTheDocument();
});
