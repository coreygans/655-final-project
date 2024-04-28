import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { UserAuth } from "../components/context/AuthContext";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

function Dashboard() {
  const { user } = UserAuth();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getCredits(user ? user.uid : "placeholder"); 
  }, []);  


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
  //TODO: Need to fix the user.uid having a null state and remove the hard coding
  const getCredits = async (uid) => {
    const q = query(collection(db, "credits"), where("userId", "==", uid ));
    console.log(q);
    try {
      const querySnapshot = await getDocs(q);
      const creditData = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        creditData.push(doc.data());
      });
      setCredits(creditData);
    } catch (error) {
      console.error("Error getting credits: ", error);
    }
  };


  return (
    <div>
      <h1>Dashboard</h1>

<p>Your userId is {user.uid}</p>
      
  
      <div className="buyCredits"></div>
      <h3>Select number of credits to buy</h3>
      <label>15 min Live person credit - $15</label> <br />
      <button onClick={PurchaseCredits}>Buy</button>
      <div className="creditsTable">
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
                <td>
                  {credit.dateRedeemed
                    ? credit.dateRedeemed
                    : ""}
                </td>
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
