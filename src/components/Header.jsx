import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { UserAuth } from "../components/context/AuthContext";

function SiteHeader() {
  const { user, logout } = UserAuth();

  function isEmpty(obj) {
    // Check for null or undefined
    if (obj == null) return true;

    // Check for zero length (arrays or strings)
    if (typeof obj === "object" && obj.length === 0) {
      return true;
    }

    // Check for enumerable own properties (excluding inherited properties)
    return Object.keys(obj).length === 0;
    
  }
  console.log(isEmpty(user));

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handlelogout = async (e) => {
    e.preventDefault();
    try {
      await logout(auth);
      console.log(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <header className="header">
      <Link to="/" className="home-link">
      <img
          alt="rubber ducky"
          className="rdLogo"
          src="/images/rd-high-res.jpg"></img> Rubber Ducky
      </Link>
      <div className="header-links">
        {isEmpty(user) ? (
          <div className="signupin">
            <Link to="/login" className="header-link">
              Sign up / Sign in
            </Link>
          </div>
        ) : (
          <div className="logout">
            Welcome {user.email}! <br />
            <a href="/dashboard">Dashboard </a>
            <a onClick={handlelogout} href="#">
              Logout
            </a>
          </div>
        )}
      </div>
      <hr></hr>
      
    </header>
  );


}

export default SiteHeader;
