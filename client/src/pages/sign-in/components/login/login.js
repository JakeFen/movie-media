import "./login.styles.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login({ toggleForm }) {
  return (
    <div className="sign-in-container">
      <h1 className="text-center">Sign In To Movie Media</h1>

      <form action="" className="form">
        <Form.Control
          className="form__control mb-2"
          id="email"
          type="email"
          placeholder="Email"
        />
        <Form.Control
          className="form__control mb-2"
          id="password"
          type="password"
          placeholder="Password"
        />
        <Button className="w-full mb-2" type="submit" variant="success">
          Log In
        </Button>
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
