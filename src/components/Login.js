import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";


import Cookies from "universal-cookie";
const cookies = new Cookies();


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
        method: "post",
        url: "https://nodejs-mongodb-auth-app.herokuapp.com/login",
        data: {
          email,
          password,
        },
      };
      axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
       
        window.location.href = "/auth";

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>

        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </Form>
    </>
  );
};

export default Login;
