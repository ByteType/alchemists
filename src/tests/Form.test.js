import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from "../components/HomePage/Form";

describe("Form", () => {
  test("renders Form Dom", () => {
    render(<Form />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });

  test("renders Sign up of Form component", async () => {
    render(<Form />);
    const toSignUpButton = screen.getByTestId("toSignUpButton");
    user.click(toSignUpButton);

    await waitFor(() => {
      const title = screen.getByText("Sign Up");
      expect(title).toBeInTheDocument();
    });
    await waitFor(() => {
      const usernameInput = screen.getByPlaceholderText("Username");
      expect(usernameInput).toBeInTheDocument();
    });
    await waitFor(() => {
      const emailInput = screen.getByPlaceholderText("Email");
      expect(emailInput).toBeInTheDocument();
    });
    await waitFor(() => {
      const passwordInput = screen.getByPlaceholderText("Password");
      expect(passwordInput).toBeInTheDocument();
    });
    const addressInput = screen.getByPlaceholderText("Address");
    expect(addressInput).toBeInTheDocument();
    await waitFor(() => {
      const submitButton = screen.getByRole("button");
      expect(submitButton).toBeInTheDocument();
    });
  });

  test("renders Sign in of Form component", async () => {
    render(<Form />);

    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("switch", async () => {
    render(<Form />);
    const toSignUpButton = screen.getByTestId("toSignUpButton");
    user.click(toSignUpButton);

    await waitFor(() => {
      expect(screen.getByTestId("toSignUpButton")).toBeInTheDocument();
    });
  });

  test("user input", async () => {
    render(<Form />);

    const input = screen.getByPlaceholderText("Username");
    await user.type(input, "Entered text");

    expect(input).toHaveValue("Entered text");
  });
});
