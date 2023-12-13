import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Sidebar from "../components/UserPage/Sidebar";

global.fetch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Sidebar Component", () => {
  const mockUser = {
    id: "123",
    username: "testuser",
    roles: ["user"],
    token: "token123",
  };

  beforeEach(() => {
    localStorage.setItem("id", mockUser.id);
    localStorage.setItem("username", mockUser.username);
    localStorage.setItem("roles", mockUser.roles.join(","));
    localStorage.setItem("token", mockUser.token);
    fetch.mockClear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("renders user info", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Sidebar />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(mockUser.username)).toBeInTheDocument();
  });

  test("logout button", async () => {
    fetch.mockResolvedValueOnce({ ok: true });

    render(
      <BrowserRouter>
        <AuthProvider>
          <Sidebar />
        </AuthProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/Log out/i));
    expect(fetch).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ method: "POST" })
    );
  });

  test("delete account button", async () => {
    fetch.mockResolvedValueOnce({ ok: true });

    render(
      <BrowserRouter>
        <AuthProvider>
          <Sidebar />
        </AuthProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/Delete account/i));
    expect(fetch).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ method: "DELETE" })
    );
  });
});
