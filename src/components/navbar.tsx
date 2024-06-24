import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/login" className="nav">
        Login
      </Link>
    </div>
  );
};
