import React, { useState } from "react";
import SiteHeader from "../components/Header";

function Talk() {
  const [isChecked, setIsChecked] = useState(false);
  const toggleListening = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="talk-to-ducky">
        <img
          alt="rubber ducky"
          className={isChecked ? "bounceDuck" : ""} 
          src="/images/rd-high-res.jpg"></img>

        <div className="rdTalkMessage">
          Hi! Welcome to Rubber Ducky! I'm here to listen to any ideas,
          problems, or proposals that you need to work through. I won't
          interrupt, provide feedback, or judge. I'm here just to listen. With
          that said, what do you want to talk about?
        </div>
        <div className="rdTalkButtons">
          Activate Listening Mode: 
          <label className="switch activeListening">
            <input type="checkbox" checked={isChecked} onChange={toggleListening} />
            <span className="slider round"></span>
          </label>
  
        </div>
      </div>
    </div>
  );
}

export default Talk;
