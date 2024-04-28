import React from 'react'
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
<p className="siteOverview">
Welcome to Rubber Ducky! Here you can sound board ideas either through a chat or by talking out
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

    </div>
  )
}

export default Homepage