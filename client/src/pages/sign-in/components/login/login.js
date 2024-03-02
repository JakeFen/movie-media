import "./login.styles.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useLogin } from "../../../../hooks/useLogin";

function Login({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="sign-in-container">
      <h1 className="text-center">Sign In To Movie Media</h1>

      <form className="form" onSubmit={handleSubmit}>
        <Form.Control
          className="form__control mb-2"
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Form.Control
          className="form__control mb-2"
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button className="w-full mb-2" type="submit" variant="success">
          Log In
        </Button>
        {error && <p className="text-white">{error}</p>}
      </form>
      <div className="extra-btns">
        <Button className="w-full no-underline" size="sm" variant="link">
          Reset Password
        </Button>
        <hr />
        <Button
          className="w-full no-underline"
          size="sm"
          variant="link"
          onClick={toggleForm}
        >
          Create New Account
        </Button>
      </div>
    </div>
  );
}

export default Login;
