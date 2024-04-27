import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SiteHeader from "../components/Header";
import {auth} from "../firebase";
import {UserAuth} from "../components/context/AuthContext";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {createUser, signIn, logout, user} = UserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };


  
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
     await createUser(email, password);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div>
    <SiteHeader />
 
    <div>
      <form>
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp}>Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>

 </div>

 
  )
}

export default Login;