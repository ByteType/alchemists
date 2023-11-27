import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/UserPage/Sidebar";
import ParcelDetail from "../components/UserPage/ParcelDetail";
import { useAuth } from "../contexts/AuthContext";
import "./DetailPage.css";

export default function DetailPage() {
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
          <ParcelDetail />
        </div>
      </div>
    </>
  );
}
