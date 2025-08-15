import {Routes, Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";
import NotFound from "../pages/NotFound";
import { useAuth } from "./AuthProvider";

export default function AppRoutes(){

    const {isAuth} = useAuth();

    return (
        <Routes>

          <Route path="/" element={<RootLayout/>}>

            <Route index 
            element={isAuth ? <Navigate to="/home" replace /> :
            <Login/>} />

            <Route element={<ProtectedRoute/>} >
              < Route path="home" element={<Home />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>

            <Route path="*" elemente={<NotFound/>}/>
          </Route>
        </Routes>
    )
}