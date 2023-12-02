import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import LoginSignUp from "./pages/LoginSignUp.js";
import DeliveryParcel from "./pages/DeliveryParcel.js";
import ParcelList from "./pages/ParcelList.js";
import Driver from "./pages/Driver.js";
import { AuthProvider } from "./contexts/AuthContext";
import DetailPage from "./pages/DetailPage.js";
import PrivateRoute from "./PrivateRoute.js";
function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/alchemists" element={<Home />} />

          <Route path="/alchemists/login" element={<LoginSignUp />} />

          <Route path="/alchemists/driver" element={<Driver />} />

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
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
