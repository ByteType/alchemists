import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Driver from "./page/Driver";
import User from "./page/User";
import Home from "./page/Home.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/alchemists" element={<Home />} />
          <Route path="/alchemists/user" element={<User />} />
          <Route path="/alchemists/driver" element={<Driver />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
