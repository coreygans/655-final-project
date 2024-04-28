import React, { useState } from "react";
import { auth, db } from "../firebase";
import { UserAuth } from "../components/context/AuthContext";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Dashboard() {
  const { user } = UserAuth();
//TODO: Need to format this to record the correct timestamp
  const PurchaseCredits = async (e) => {
    try {
      const docRef = await addDoc(collection(db, "credits"), {
        dateRedeemed: null,
        userId: user.uid,
        purchaseDate: Date.now(),
        redeemed: false,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("Purchase complete! See your credits in the table.");
  };
//TODO: Need to filter this query to include the userId
  const getCredits = async (e) => {
    const querySnapshot = await getDocs(collection(db, "credits"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  getCredits();
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
