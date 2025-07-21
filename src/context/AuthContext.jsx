import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    console.log(user, "coming from AUTH CONTEXT")

    if(user){
        console.log("coming from auth context")
        console.log(user.username, user.isLoggedin)
    }

   
    const login = (userData) => {
        
        localStorage.setItem("user", JSON.stringify(userData))
        setUser(JSON.parse(localStorage.getItem("user")))
    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return <AuthContext.Provider value={{user,login, logout}}>{children}</AuthContext.Provider>
}