import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ParcelCard from "../components/UserPage/ParcelCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
jest.mock("../contexts/AuthContext", () => ({
  useAuth: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ parcels: [] }),
  })
);

describe("ParcelCard Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ parcels: [] }),
      })
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("redirects to login if user is not authenticated", () => {
    useAuth.mockImplementation(() => null);
    const navigate = jest.fn();
    useNavigate.mockImplementation(() => navigate);

    render(<ParcelCard />);
    expect(navigate).toHaveBeenCalledWith("/login");
  });

  test("fetches parcel data", async () => {
    useAuth.mockImplementation(() => ({ id: "123", token: "token" }));

    render(<ParcelCard />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining("/user/123"),
        expect.anything()
      );
    });
  });
});
