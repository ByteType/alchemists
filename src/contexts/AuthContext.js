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
        return action.payload;
      case "logout":
        return null;
      default:
        return user;
    }
  }, null);

  return (
    <AuthContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
