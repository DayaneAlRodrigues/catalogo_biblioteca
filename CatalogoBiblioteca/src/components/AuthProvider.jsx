import { useEffect } from "react";
import { createContext, useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider ({children}){
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuth");
        if (storedAuth === "true"){
            setIsAuth(true);
        }
    }, []);

    const login = (email, password) => {

        if(!email && !password) {
            setIsAuth(true);
            localStorage.setItem("isAuth", "true");
            navigate("/home");
            return true;
        }
        return false;
    } 
    const logout = () => {
        setIsAuth(false);
        navigate("/login");
    }

    const value = useMemo(() => ({isAuth, login, logout}), [user])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if(!ctx) {
         throw new Error ("useAuth deve ser usado dentro de <AuthProvider>");
    }
    return ctx;
}