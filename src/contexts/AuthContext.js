"use client";
const { baseUrl } = require("@/config");
const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  let token;

  if (typeof window !== "undefined") {
    // Check if running on the client side
    token = localStorage.token;
  }

  const value = {
    user,
    setUser,
  };

  useEffect(() => {
    if (token) {
      baseUrl
        .get("/profile", {
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setUser(res.data?.user);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
