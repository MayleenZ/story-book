import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <div>
    <nav id="nav-bar">
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
      <p>Welcome, {user.name}</p>
      </div>
  );
}

export default NavBar;