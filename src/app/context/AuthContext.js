"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");

  return (
    <AuthContext.Provider value={{ selectedPlan, setSelectedPlan, user, setUser, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
