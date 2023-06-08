import AuthPage from './pages/AuthPage';
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <h1>Storybook</h1>
      <AuthPage/>
    </div>
  );
}

export default App;
