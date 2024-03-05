import "./header.styles.scss";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

function Header() {
  const { user } = useAuthContext();
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
              <Button
                href="/profile"
                variant="success"
                className="header__profile-btn"
              >
                <span class="material-symbols-outlined text-slate-100">
                  account_circle
                </span>
                {user.userData.firstName} {user.userData.lastName}
              </Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item
                  href="/profile"
                  className="header__dropdown-item"
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Item
                  href="/user/following"
                  className="header__dropdown-item"
                >
                  Following
                </Dropdown.Item>
                <Dropdown.Item
                  href="/user/watched"
                  className="header__dropdown-item"
                >
                  Watched
                </Dropdown.Item>
                <hr className="m-1" />
                <Dropdown.Item
                  href="/user/settings"
                  className="header__dropdown-item"
                >
                  Settings
                </Dropdown.Item>
                <Dropdown.Item
                  href="/"
                  onClick={logout}
                  className="header__dropdown-item"
                >
                  Sign Out
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
