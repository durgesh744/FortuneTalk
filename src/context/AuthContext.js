import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null);

  const isLoggedIn = () => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setUser(JSON.parse(res))
        console.log(res, "res, kjankjfjka")
        setIsLoading(true)
      })
      .catch((error) => {
        console.log(`isLogged in error ${error}`)
      })
  }

  useEffect(() => {
    if (!user) {
      isLoggedIn()
    }
  }, [])


  const value = { user, setUser, isLoading };

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}

