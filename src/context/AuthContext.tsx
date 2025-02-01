"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { mockUsers } from "./MockUser"; // Import data dummy

interface User {
  id: number;
  email: string;
  role: "admin" | "user";
  name: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulasi mengambil user dari data dummy
  useEffect(() => {
    const user = mockUsers[0] as User; // Ubah ini untuk memilih user yang berbeda
    setUser(user);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth harus digunakan dalam AuthProvider");
  return context;
};
