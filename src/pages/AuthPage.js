import { useState } from "react";

import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LoginForm";

function AuthPage({ setUser }) {
  //setUser function that updates user is passed down from App.js 
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Click here to Sign up " : "Click here to login"}
      </button>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
