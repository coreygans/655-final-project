import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Talk from "./pages/Talk";
const { env } = require('node:process');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.firebase_api,
  authDomain: env.firebase_auth,
  projectId: env.firebase_projectId,
  storageBucket: env.firebase_storageBucket,
  messagingSenderId: env.firebase_messagingSenderId,
  appId: env.firebase_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App(props) {
  return (

 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
