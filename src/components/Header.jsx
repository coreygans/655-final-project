import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { UserAuth } from "../components/context/AuthContext";
//import { RiSpeakFill, RiChat3Fill } from "react-icons/ri";

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

  const handlelogout = async (e) => {
    
    e.preventDefault();
    try {
      await logout(auth);
      console.log(user);
      navigate("/");
    } catch (e) {
      console.error("Error logging out: ", e);
    }
  };

  return (
    <header className="header">
      <Link to="/" className="home-link">
        <img
          alt="rubber ducky"
          className="rdLogo"
          src="/images/rd-high-res.jpg"></img>
        Rubber Ducky
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
            <Link to="/dashboard">Dashboard </Link>
            <a onClick={handlelogout} href="/">
              Logout
            </a>
          </div>
        )}
        <div className="appLinks">
          <Link to="/chat" className="duck-chat">
          Chat with RD
          </Link>
          <Link to="/talk" className="duck-talk">
             Talk with RD
          </Link>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
