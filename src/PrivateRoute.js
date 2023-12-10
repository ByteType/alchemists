import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function PrivateRoute({ children }) {
  const user = useAuth();

  return !!user.id && !!user.username && !!user.roles && !!user.token
    ? children
    : <Navigate to="/alchemists/login" />;
}

export default PrivateRoute;
