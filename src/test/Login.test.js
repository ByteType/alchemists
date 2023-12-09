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

it("submits the form and handles the response correctly", async () => {
  // Set up the mock implementation for fetch
  fetch.mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          /// USER DATA
          token: "fake-token",
        }),
    })
  );

  // Render the component with the mock dispatch
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

  // Simulate form submission
  fireEvent.click(screen.getByText("Submit"));

  // Wait for the async actions to complete
  await waitFor(() => {
    // Check if fetch was called correctly
    expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
  });

  await waitFor(() => {
    // Check for successful message display
    expect(screen.getByText(/successful!/i)).toBeInTheDocument();
  });
});
afterEach(() => {
  global.fetch.mockRestore();
});
