import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user, "coming from AUTH CONTEXT")
    if(user){
        console.log("coming from auth context")
        console.log(user.username, user.isLoggedin)
    }
    
    const login = (userData) => setUser(userData)
    const logout = () => setUser(null)

    return <AuthContext.Provider value={{user,login, logout}}>{children}</AuthContext.Provider>
}