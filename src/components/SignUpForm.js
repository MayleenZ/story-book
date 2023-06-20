import { useState } from "react";
import * as usersApi from '../utilities/users-api';


function SignUpForm({setUser}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = formData.password !== formData.confirm;
  


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



  async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
   // which will ultimately return a JSON Web Token (JWT)
   console.log('[From SignUP function]', userData);
   const token = await usersApi.signUpAPI(userData);
   // saves token to localStorage
   localStorage.setItem('token', token);
   
   return getUser();
}
  
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    
    try {
      console.log(formData)
      // data to be send to the backend to create a new user
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      }
      // returns a token with the user info
      const user = await signUp(userData); // users service
      setUser(user);

    } catch (error) {
      setFormData({...formData, error: "Sign Up Failed - Try Again"})
    }
};

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value, error: ''})
  };

  return (
    <div>
      <div className="form-container">
        <h1>Sign Up</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
            
            <label>Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} required/>
            
            <label>password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
            
            <label>Confirm</label>
            <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required/>

            <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>

      <p className="error-message">{formData.error}</p>
    </div>
  );
}

export default SignUpForm;
