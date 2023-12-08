import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/UserPage/Sidebar";
import DeliveryForm from "../components/UserPage/DeliveryForm";
import { useAuth } from "../contexts/AuthContext";

import "./DeliveryParcel.css";

export default function DeliveryParcel() {
  const user = useAuth();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="form-container">
        <div className="leftside-box">
          <Sidebar user={user} />
        </div>
        <div className="rightside-box">
          <DeliveryForm />
        </div>
      </div>
    </>
  );
}
