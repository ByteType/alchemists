import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/UserPage/Sidebar";
import DeliveryForm from "../components/UserPage/DeliveryForm";

import "./DeliveryParcel.css";

export default function DeliveryParcel() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="form-container">
        <div className="leftside-box">
          <Sidebar />
        </div>
        <div className="rightside-box">
          <DeliveryForm />
        </div>
      </div>
    </>
  );
}
