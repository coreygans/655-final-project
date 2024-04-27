import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SiteHeader from "../components/Header";
import {auth} from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(auth)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth,email, password);
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      setError(error.message);
    }
  };


  
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect to dashboard after sign up
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