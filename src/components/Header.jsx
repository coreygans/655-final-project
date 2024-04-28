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
        <h1>Welcome to Rubber Ducky!</h1>
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
            Welcome {user.email}!
            <a onClick={handlelogout} href="#">
              Logout
            </a>
          </div>
        )}
      </div>
      <hr></hr>
      <p className="siteOverview">
        Here you can sound board ideas either through a chat or by talking out
        loud to a listening head. There is no AI, no capturing of your audio or
        camera. This is an interactive application that allows you to think out
        loud and process what you are trying to figure out.
      </p>
      <div className="rdButtons">
        <Link to="/chat" className="duck-chat">
          <button>Rubber Ducky Chat </button>
        </Link>
        <Link to="/talk" className="duck-talk">
          <button> Rubber Ducky Talk</button>{" "}
        </Link>
      </div>
    </header>
  );


}

export default SiteHeader;
