import { useState } from "react";

import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

function AuthPage({ setUser }) {
  //setUser function that updates user is passed down from App.js 
  
  const [showLogin, setShowLogin] = useState(true);
  //determines whether to render login or signup form
  //sets showLogin as a truthy value for terneary operation below

  return (
    <main className="AuthPage">
      <button onClick={() => setShowLogin(!showLogin)}>
        {/* onClick updates setShowLogin and toggles between false and true using the !showLogin, updates the state as well which affects the terneary operation below with the forms*/}
        {showLogin ? "Join Storybook! " : "Already a member?"}
        {/* if showLogin is true: the text for signup shows, if showLogin is false: text for login shows */}
      </button>


      {showLogin ? (
        //showLogin is set to True, so if its true it will show the login
        // depending on value of showLogin, either loginForm or signup form is shown. setUser is passed to both components to update user state if need be
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
