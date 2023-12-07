import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/UserPage/Sidebar";
import ParcelCard from "../components/UserPage/ParcelCard";
import "./ParcelList.css";

export default function ParcelList() {
  const user = useAuth();
  const [authenticated, setauthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    const isUserAuthenticated = loggedInUser === "true";
    setauthenticated(isUserAuthenticated);

    if (!isUserAuthenticated) {
      navigate("/alchemists/login");
    }
  }, [navigate]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="list-container">
        <div className="leftside-box">
          <Sidebar user={user} />
        </div>
        <div className="rightside-box">
          <ParcelCard />
        </div>
      </div>
    </>
  );
}
