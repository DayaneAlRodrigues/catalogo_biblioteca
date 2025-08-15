import { Outlet, Navigate } from "react-router";
import { useAuth } from "./AuthProvider";

export default function ProtectedRoute() {
    const {isAuth} = useAuth();

    return isAuth ? <Outlet/> : <Navigate to = "/" replace />;
}