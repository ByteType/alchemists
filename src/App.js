import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home.js";
import LoginSignUp from "./pages/LoginSignUp.js";
import DeliveryParcel from "./pages/DeliveryParcel.js";
import ParcelList from "./pages/ParcelList.js";
import Driver from "./pages/Driver.js";
import { AuthProvider } from "./contexts/AuthContext";
import DetailPage from "./pages/DetailPage.js";

function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/alchemists" element={<Home />} />

          <Route path="/alchemists/user" element={<User />} />
          <Route path="/alchemists/login" element={<LoginSignUp />} />

          <Route path="/alchemists/driver" element={<Driver />} />

          <Route
            path="/alchemists/user/delivery"
            element={<DeliveryParcel />}
          />
          <Route path="/alchemists/user/list" element={<ParcelList />} />
          <Route
            path="/alchemists/user/list/:parcelId"
            element={<DetailPage />}
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
