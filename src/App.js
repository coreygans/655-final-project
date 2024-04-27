import { React } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/chat" element={<Chat />} />

          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
