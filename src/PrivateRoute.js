import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const user = useAuth();

  if (!user) {
    return <Navigate to="/alchemists/login" />;
  }

  return children;
};
export default PrivateRoute;
