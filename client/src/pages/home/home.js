import Button from "react-bootstrap/esm/Button";
import { useLogout } from "../../hooks/useLogout";

function Home() {
  const { logout } = useLogout();

  return (
    <div className="page-container">
      <p className="text-slate-100">Home</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}

export default Home;
