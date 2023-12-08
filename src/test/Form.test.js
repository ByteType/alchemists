import React, { useRef } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from "../components/HomePage/Form";

describe("Form", () => {
  test("renders Form Dom", () => {
    render(<Form />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });

  test("renders Sign Up of Form component", () => {
    render(<Form />);
    const title = screen.getByText("Sign Up");
    expect(title).toBeInTheDocument();
    const usernameInput = screen.getByPlaceholderText("Username");
    expect(usernameInput).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();

    const addressInput = screen.getByPlaceholderText("Address");
    expect(addressInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();

    const switchToLogin = screen.getByText("Login");
    expect(switchToLogin).toBeInTheDocument();
  });

  test("switch to Login", async () => {
    render(<Form />);
    const toLoginButton = screen.getByTestId("toLoginButton");
    user.click(toLoginButton);

    await waitFor(() => {
      expect(screen.queryByPlaceholderText("Email")).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByPlaceholderText("Address")).not.toBeInTheDocument();
    });

    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("switch to Sign Up", async () => {
    render(<Form />);
    const toLoginButton = screen.getByTestId("toLoginButton");
    user.click(toLoginButton);

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
