import "./header.styles.scss";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useLogout } from "../../hooks/useLogout";

function Header() {
  const { logout } = useLogout();

  return (
    <nav className="header">
      <div className="container h-[64px] flex justify-between items-center">
        <div>
          <Link to="/" className="header__logo">
            Movie Media
          </Link>
        </div>
        <ul className="flex items-center m-0">
          <li>
            <Link to="/search" className="header__link">
              Search
            </Link>
          </li>
          <li>
            <Link to="/" className="header__link">
              Feed
            </Link>
          </li>
          <li className="ml-[28px]">
            <Dropdown as={ButtonGroup} size="md">
              <Button href="/profile" variant="success">
                Split Button
              </Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="/" onClick={logout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
