import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "../components/HomePage/Form";
import { AuthProvider } from "../contexts/AuthContext";
import user from "@testing-library/user-event";

// Mock the fetch API
global.fetch = jest.fn();

it("submits the sign up form and handles the response correctly", async () => {
  // Set up the mock implementation for fetch
  fetch.mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        id: 5,
        username: "test",
        email: "test@test.com",
        roles: ["ROLE_USER"],
        token: "fake-token"
      }),
    })
  );

  // Render the component
  render(
    <AuthProvider>
      <Form />
    </AuthProvider>
  );
  const toSignUpButton = screen.getByTestId("toSignUpButton");
  user.click(toSignUpButton);

  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "testuser" },
  });
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "testuser@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "testpassword" },
  });
  fireEvent.change(screen.getByPlaceholderText("Address"), {
    target: { value: "testaddress" },
  });

  // Simulate form submission
  fireEvent.click(screen.getByText("Submit"));

  // Wait for the async actions to complete
  await waitFor(() => {
    // Check if fetch was called correctly
    expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
  });

  await waitFor(() => {
    expect(screen.getByText(/sign up successful!/i)).toBeInTheDocument();
  });
});

afterEach(() => {
  global.fetch.mockRestore();
});
