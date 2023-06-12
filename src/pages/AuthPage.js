import { useState } from "react";

import SignUpForm from "../components/SignUpForm/SignUp";
import LoginForm from "../components/LoginForm";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign up" : "Sign in"}
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
