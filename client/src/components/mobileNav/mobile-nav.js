import "./mobile-nav.styles.scss";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <div className="mobile-nav flex items-center place-content-around">
      <Link to="/search">
        <span className="material-symbols-outlined text-slate-100">search</span>
      </Link>
      <Link to="/">
        <span className="material-symbols-outlined text-slate-100">
          add_circle
        </span>
      </Link>
      <Link to="/profile">
        <span className="material-symbols-outlined text-slate-100">
          account_circle
        </span>
      </Link>
    </div>
  );
}

export default MobileNav;
