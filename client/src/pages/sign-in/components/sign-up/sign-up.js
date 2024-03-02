import "./sign-up.styles.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp({ toggleForm }) {
  return (
    <div className="sign-in-container">
      <h1 className="text-center">Sign Up Now</h1>

      <form action="" className="form">
        <Form.Control
          className="form__control mb-2"
          id="firstName"
          type="text"
          placeholder="First Name"
        />
        <Form.Control
          className="form__control mb-2"
          id="lastName"
          type="text"
          placeholder="Last Name"
        />
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
          Sign Up
        </Button>
      </form>
      <div className="extra-btns">
        <Button
          className="w-full no-underline"
          size="sm"
          variant="link"
          onClick={toggleForm}
        >
          Already Have An Account
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
