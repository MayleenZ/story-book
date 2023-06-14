import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';

import HomePage from './pages/HomePage'


import { getUser } from './utilities/users-service';

import './App.css';
import Storybook from './pages/Storybook';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={ <HomePage user={user} /> }/>
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
      <Storybook></Storybook>
    </main>
  );
}

export default App;
