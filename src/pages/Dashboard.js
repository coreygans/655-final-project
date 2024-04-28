import React, { useState, useEffect, useCallback } from "react";
import { db } from "../firebase";
import { UserAuth } from "../components/context/AuthContext";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

function Dashboard() {
  const { user } = UserAuth();
  const [credits, setCredits] = useState([]);

  const PurchaseCredits = async (e) => {
    try {
      const docRef = await addDoc(collection(db, "credits"), {
        dateRedeemed: null,
        userId: user.uid,
        purchaseDate: Date.now(),
        redeemed: false,
      });
      console.log("Document written with ID: ", docRef.id);
      getCredits(user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("Purchase complete! See your credits in the table.");
  };
  const formatDate = (timestamp) => {
    const date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(timestamp);
    return date;
  };
  const getCredits = useCallback(async (user) => {
    if (!user) return;
    const q = query(collection(db, "credits"), where("userId", "==", user.uid));
    console.log(q);
    try {
      const querySnapshot = await getDocs(q);
      const creditData = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const fbresponse = doc.data();
        fbresponse.purchaseDate = formatDate(fbresponse.purchaseDate);
        fbresponse.dateRedeemed = fbresponse.dateRedeemed
          ? formatDate(fbresponse.dateRedeemed)
          : "Not Redeemed";
        console.log(fbresponse);
        creditData.push(fbresponse);
      });
      setCredits(creditData);
    } catch (error) {
      console.error("Error getting credits: ", error);
    }
  }, []);
  useEffect(() => {
    if (user) {
      getCredits(user);
    }
  }, [user, getCredits]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your userId is {user.uid}</p>
      <div className="buyCredits"></div>
      <h3>Buy Credits to Talk to a Person</h3>
      <label>15 min Live person credit</label> <br />
      <button onClick={PurchaseCredits}>Buy for $15</button>
      <div className="creditsTable">
        <h3>Credit Status</h3>

        <table>
          <thead>
            <tr>
              <th>Date Purchased</th>
              <th>Date Redeemed</th>
              <th>Redeemed</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((credit) => (
              <tr>
                <td>{credit.purchaseDate}</td>
                <td>{credit.dateRedeemed ? credit.dateRedeemed : ""}</td>
                <td>{credit.redeemed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
