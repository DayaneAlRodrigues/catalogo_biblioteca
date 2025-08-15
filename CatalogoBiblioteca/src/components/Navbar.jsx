import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";
export default function Navbar(){

    const { isAuth, logout} = useAuth();

    const linkStyle = ({isActive}) => ({
        marginRigth: 8,
        textDecoration: "none",
        padding: "6px 10px",
        border: "1px solid #ddd",
        borderRadius: 6,
        background: isActive ? "#111" : "#fff",
        color: isActive ? "#fff" : "#111"
    })
    return(
        <nav style= {{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: 12,
            borderBottom: "1px, solid #eee"
        }}>
        
        {isAuth ? (
            <>
                <NavLink style={linkStyle} to="/home">
                    Home
                </NavLink>
                <button onClick={logout}>Sair</button>
            </>
        ) : (
            <>
                <NavLink style={linkStyle} to="/login">
                    Login
                </NavLink>
            </>
        )}

        </nav>
       
    )
}