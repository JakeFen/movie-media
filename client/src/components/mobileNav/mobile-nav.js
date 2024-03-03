import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function MobileNav() {
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

export default MobileNav;
