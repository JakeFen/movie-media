import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <div>
      <Link to="/search">
        <Button>Search</Button>
      </Link>
      <Link to="/">
        <Button>Feed</Button>
      </Link>
      <Link to="/profile">
        <Button>Profile</Button>
      </Link>
    </div>
  );
}

export default Header;
