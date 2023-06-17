import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function logOut() {
    localStorage.removeItem('token')
}
  //the props on user state are being drilled down from parent componenet: App.js
  const handleLogOut = () => {
    logOut()
    setUser(null);
  };
  //the logout function happens and then below updates the user state to null causing the page to go back to authentication page 
  return (
    <div>
    <nav id="nav-bar">
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
      <p>Email: {user.email}</p>
      </div>
  );
}

export default NavBar;