import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Navbar from './components/Navigation/Navbar'
import { PasswordRecovery } from './pages/passwordRecovery/PasswordRecovery'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthContext";


function App() {
  const { token } = useContext(AuthContext);
  
  return (
    
    <Router >
      <Navbar />
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="/register" element= {!token ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path="/password-recovery" element={!token ? <PasswordRecovery /> : <Navigate to="/" />} />
        <Route path="/feed/:feedId">
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;