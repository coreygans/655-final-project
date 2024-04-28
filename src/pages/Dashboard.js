import React, { useState } from "react";
import {auth} from "../firebase";
import {UserAuth} from "../components/context/AuthContext";

function Dashboard() {

    const {user} = UserAuth();

  return (
   
    <div>
        <h1>Dashboard</h1>
        
        Welcome {user?.email}!
        
        </div>
  )
}

export default Dashboard