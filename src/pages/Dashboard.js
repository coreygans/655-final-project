import React, { useState } from "react";
import { auth } from "../firebase";
import { UserAuth } from "../components/context/AuthContext";

function Dashboard() {
  const { user } = UserAuth();
  
  
  function PurchaseCredits(num) {

    alert("Purchase complete! See your credits in the table.");
  }

  return (
    <div>
      <h1>Dashboard</h1>
        Your userId is {user.uid}
      <div className="buyCredits"></div>

      <h3>Select number of credits to buy</h3>
      <label>15 min Live person credit - $15</label>
      <input id="talkQty" type="text"></input> <br />
      <button onClick={PurchaseCredits}>Buy</button>
    </div>
  );
}

export default Dashboard;
