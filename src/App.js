import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home.js";
import LoginSignUp from "./pages/LoginSignUp.js";
import DeliveryParcel from "./pages/DeliveryParcel.js";
import ParcelList from "./pages/ParcelList.js";
import Driver from "./pages/Driver.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/alchemists" element={<Home />} />

        <Route path="/alchemists/user" element={<User />} />
        <Route path="/alchemists/login" element={<LoginSignUp />} />

        <Route path="/alchemists/driver" element={<Driver />} />

        <Route path="/alchemists/user/delivery" element={<DeliveryParcel />} />
        <Route path="/alchemists/user/list" element={<ParcelList />} />
      </Routes>
    </div>
  );
}

export default App;
