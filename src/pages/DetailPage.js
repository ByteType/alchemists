import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/UserPage/Sidebar";
import ParcelDetail from "../components/UserPage/ParcelDetail";

export default function DetailPage() {
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
          <ParcelDetail />
        </div>
      </div>
    </>
  );
}
