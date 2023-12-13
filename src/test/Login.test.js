import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "../components/HomePage/Form";
import { AuthProvider } from "../contexts/AuthContext";

// Mock the fetch API
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test("submits the Login form and handles the response correctly", async () => {
  fetch.mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          id: 5,
          username: "test",
          email: "test@test.com",
          roles: ["ROLE_USER"],
          token: "fake-token",
        }),
    })
  );

  render(
    <AuthProvider>
      <Form />
    </AuthProvider>
  );

  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "testuser" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "password" },
  });

  fireEvent.click(screen.getByText("Submit"));

  // Wait for the async actions
  await waitFor(() => {
    expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
  });

  await waitFor(() => {
    expect(screen.getByText(/successful!/i)).toBeInTheDocument();
  });
});
afterEach(() => {
  global.fetch.mockRestore();
});
