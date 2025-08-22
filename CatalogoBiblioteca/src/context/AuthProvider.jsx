import { useEffect } from "react";
import { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children})=> {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuth");
        if (storedAuth === "true"){
            setIsAuth(true);
        }
    }, []);

    const login = (email, password) => {

        if(email && password) {
            setIsAuth(true);
            localStorage.setItem("isAuth", "true");
            return true;
        }
        return false;
    } 
    const logout = () => {
        setIsAuth(false);
    }

    const value = useMemo(() => ({isAuth, login, logout}))

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


