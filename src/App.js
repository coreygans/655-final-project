import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (

    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/talk" element={<CheckoutPage />} />
          <Route path="/chat" element={<About />} />
          <Route path="/login" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
