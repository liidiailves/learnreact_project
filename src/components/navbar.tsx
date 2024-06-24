import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  // const [user, loading, error] = useAuthState(auth)
  const [user] = useAuthState(auth);

  return (
    <div className="nav">
      <div className="navEl navLink">
        <Link to="/">HOME</Link>
      </div>
      <div className="navEl navLink">
        <Link to="/login">Login</Link>
      </div>
      <div className="navEl navName">
        <p>{user?.displayName}</p>
      </div>
      <div className="navEl">
        <img
          src={user?.photoURL || ""}
          width="60"
          height="60"
          alt="profilePicture"
        />
      </div>
    </div>
  );
};
