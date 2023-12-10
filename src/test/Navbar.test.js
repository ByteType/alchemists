import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

test("renders Navbar component", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const icon = screen.getByTestId("bsboxseam-icon");
  expect(icon).toBeInTheDocument();

  expect(screen.getByText("HOME")).toBeInTheDocument();
  expect(screen.getByText("LOGIN")).toBeInTheDocument();
});

test("responsive button click in Navbar", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const menuButton = screen.getByRole("button");

  userEvent.click(menuButton);

  const mediaQuerymenu = screen.getByRole("navigation");
  expect(mediaQuerymenu).toHaveClass("navbar");
});
