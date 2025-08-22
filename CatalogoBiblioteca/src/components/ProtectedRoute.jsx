import {  Navigate} from "react-router";
import { useAuth } from "../context/AuthProvider";

export default function ProtectedRoute({children}) {
    const {isAuth} = useAuth();

    return isAuth ? children: <Navigate to = "/login" replace/>;
}