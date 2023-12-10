import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(null);

const AuthDispatchContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthDispatch() {
  return useContext(AuthDispatchContext);
}

export function AuthProvider({ children }) {
  const [user, dispatch] = useReducer((user, action) => {
    switch (action.type) {
      case "login":
        localStorage.setItem("id", action.payload.id);
        localStorage.setItem("username", action.payload.username);
        localStorage.setItem("roles", action.payload.roles.join(","))
        localStorage.setItem("token", action.payload.token);
        return { ...action.payload };
      case "logout":
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        localStorage.removeItem("roles")
        localStorage.removeItem("token");
        return { };
      default:
        return user;
    }
  }, {
    id: localStorage.getItem("id"),
    username: localStorage.getItem("username"),
    roles: localStorage.getItem("roles")?.split(","),
    token: localStorage.getItem("token")
  });

  return (
    <AuthContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
