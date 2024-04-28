import { React } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Talk from "./pages/Talk";
import Dashboard from "./pages/Dashboard";
import { AuthContextProvider } from "./components/context/AuthContext";
import SiteHeader from "./components/Header";
import { UserAuth } from "./components/context/AuthContext";



function App(props) {
  const user = UserAuth();

  function isEmpty(obj) {
    // Check for null or undefined
    if (obj == null) return true;
  
    // Check for zero length (arrays or strings)
    if (typeof obj === 'object' && obj.length === 0) {
      return true;
    }
  
    // Check for enumerable own properties (excluding inherited properties)
    return Object.keys(obj).length === 0;
  }
//TODO: Clean up all unused vars across files
//TODO: Need to get the conditional routing working with Dashboard
  return (
    <AuthContextProvider >
      <BrowserRouter>
      
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/chat" element={<Chat />} />

          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={ <Dashboard /> } />

          <Route path="/dashboard" element={ isEmpty(user) ? (<Login />) : (<Dashboard />) } />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
