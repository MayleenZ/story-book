import {useState} from 'react';
import {signUp} from '../../utilities/users-service'

function SignUpForm({setUser}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: "",
    });

    const disable = formData.password !== formData.confirm;

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(formData);
        } catch (error) {
            setFormData({
                ...formData, error: "Sign Up Failed - Try Again"
            })
        }
    }



  return (
    <div className = "form-container">
      <form>
        <label>Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" readonly/>

        <label>Password</label>
        <input type="password" />

        <label>Confirm Password</label>
        <input type="password" />
      </form>
    </div>
  );
}

export default SignUpForm;

// Sign up - name, email, password , confirm password, error
//login - email, password
//logout - simple exit session
