import "./App.css";
import { Routes, Route } from "react-router-dom";
import Driver from "./page/Driver";
import User from "./page/User";
import Home from "./page/Home.js";
import LoginSignUp from "./page/LoginSignUp.js";
import DeliveryParcel from "./page/DeliveryParcel.js";
import ParcelList from "./page/ParcelList.js";

function App({ RouterComponent }) {
  return (
    <div>
      <RouterComponent>
        <Routes>
          <Route path="/alchemists" element={<Home />} />
          <Route path="/alchemists/user" element={<User />} />
          <Route path="/alchemists/driver" element={<Driver />} />
          <Route path="/alchemists/login" element={<LoginSignUp />} />
          <Route
            path="/alchemists/user/delivery"
            element={<DeliveryParcel />}
          />
          <Route path="/alchemists/user/list" element={<ParcelList />} />
        </Routes>
      </RouterComponent>
    </div>
  );
}

export default App;
