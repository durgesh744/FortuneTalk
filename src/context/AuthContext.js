import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null);

  const Login = (email, password) => {
    // AuthService.login(email, password)
    //   .then((res) => {
    //     console.log("Login Successfully")
    //     AsyncStorage.setItem("user", JSON.stringify(res))
    //     setrolesAndPermissions(res.data.rolesAndPermissions);
    //     setUser(res)
    //     setIsLoading(true)
    //   }).catch((err) => {
    //     console.log(err)
    //   })
  }

  const Logout = () => {
    AsyncStorage.removeItem("user")
  }

  const isLoggedIn = () => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setUser(JSON.parse(res))
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

  const value = { Login, Logout, user, setUser, isLoading };

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}

