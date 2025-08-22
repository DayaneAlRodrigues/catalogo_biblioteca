import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import CriarConta from "./pages/CriarConta";


function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createuser" element={<CriarConta/>}/>

          <Route path="/"
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            } />
        </Routes>
      </Router>
    </AuthProvider>
    
  );
}

export default App
