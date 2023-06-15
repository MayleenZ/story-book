import { useState } from "react";

import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LoginForm";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign up here" : "Sign in here"}
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
