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
        <Route path="/" element={<Home />}/>

        <Route path="/login" element={<LoginSignUp />}/>

        <Route
          path="/user/delivery"
          element={
            <PrivateRoute>
              <DeliveryParcel />
            </PrivateRoute>
          }
        />

        <Route
          path="/user/list"
          element={
            <PrivateRoute>
              <ParcelList />
            </PrivateRoute>
          }
        />

        <Route
          path="/userId/:userId/list/:parcelId"
          element={
            <PrivateRoute>
              <DetailPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/driver/lockers"
          element={
            <PrivateRoute>
              <LockerPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/driver/generate"
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
