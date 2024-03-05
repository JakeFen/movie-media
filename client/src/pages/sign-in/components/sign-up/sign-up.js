import "./sign-up.styles.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useSignUp } from "../../../../hooks/useSignup";

function SignUp({ toggleForm }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(firstName, lastName, email, password);
  };

  return (
    <div className="sign-in-container">
      <h1 className="text-center">Sign Up Now</h1>

      <form action="" className="form" onSubmit={handleSubmit}>
        <Form.Control
          className="form__control mb-2"
          id="firstName"
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
        />
        <Form.Control
          className="form__control mb-2"
          id="lastName"
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setlastName(e.target.value);
          }}
          value={lastName}
        />
        <Form.Control
          className="form__control mb-2"
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <Form.Control
          className="form__control mb-2"
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <Button className="w-full mb-2" type="submit" variant="success">
          Sign Up
        </Button>
        {error && <p className="text-slate-100">{error}</p>}
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
