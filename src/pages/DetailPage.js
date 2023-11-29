import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/UserPage/Sidebar";
import ParcelDetail from "../components/UserPage/ParcelDetail";
import { useAuth } from "../contexts/AuthContext";

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
          <ParcelDetail user={user} />
        </div>
      </div>
    </>
  );
}
