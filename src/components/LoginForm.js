import { useState } from 'react';
import * as usersApi from '../utilities/users-api';

export default function LoginForm({ setUser }) {

const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});

const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return null;
  }
  return token;

}

function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

async function login(credentials) {
  const token = await usersApi.loginAPI(credentials)
  localStorage.setItem('token', token);
  return getUser();
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await login(credentials);
    console.log(user);
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div>
    <div className="form-container" onSubmit={handleSubmit}>
  <h1>Login</h1>
      <form autoComplete="off" >
        <label>Email</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button type="submit">LOG IN</button>
      </form>

    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}