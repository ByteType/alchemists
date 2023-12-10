import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import LoginSignUp from "./pages/LoginSignUp";
import LockerPage from "./pages/LockerPage";
import DeliveryParcel from "./pages/DeliveryParcel";
import ParcelList from "./pages/ParcelList";
import DetailPage from "./pages/DetailPage";
import Generate from "./pages/Generate";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/alchemists" element={<Home />}/>

        <Route path="/alchemists/login" element={<LoginSignUp />}/>

        <Route
          path="/alchemists/user/delivery"
          element={
            <PrivateRoute>
              <DeliveryParcel />
            </PrivateRoute>
          }
        />

        <Route
          path="/alchemists/user/list"
          element={
            <PrivateRoute>
              <ParcelList />
            </PrivateRoute>
          }
        />

        <Route
          path="/alchemists/userId/:userId/list/:parcelId"
          element={
            <PrivateRoute>
              <DetailPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/alchemists/driver/lockers"
          element={
            <PrivateRoute>
              <LockerPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/alchemists/driver/generate"
          element={
            <PrivateRoute>
              <Generate />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
