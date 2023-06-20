import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';

import HomePage from './pages/HomePage'


// import { getUser } from './utilities/users-service';
//used to initilaize the user state

import './App.css';


function App() {
  function getToken() {
        const token = localStorage.getItem('token');
        // if there is no token
        console.log(token);
        if (!token) return null;
    
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log(payload);
    
        // if token is expired
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            return null;
        }
    
        // token is valid
        return token;
    
    }
  function getUser() {
        const token = getToken();
        console.log("get user");
        return token ? JSON.parse(atob(token.split('.')[1])).user : null;
    }
  const [user, setUser] = useState(getUser()); 
  //the user is initialized with the getUser() function , meaning if getUser return user object is it a truthy value 


  //getUser() retrieves user data from a token stored in browsers local storage 
  //*the getUser function decodes the token to extract the user information and return it


  return (
    <main className="App">
     { user ? 
     //terneary operation: if user logs in (truthy), the component renders everything below, if the user is not logged in, it will render the authentication page
      <>
      <NavBar user={user} setUser={setUser}/>
      {/* user prop can be used to display user-specific content from the form inputs collected as User Data
      setUser function prop is passed to allow the navbar component to update user state, for ex logout button updates user state to null setUser(null) brings them back to auth page*/}
      <Routes>
        <Route path='/' element={ <HomePage user={user} /> }/>
        {/* can customize homepage with user data */}
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      //handle user authentication , when a login or signup is successful it will update the user state 
      }
    </main>
  );
}

export default App;
