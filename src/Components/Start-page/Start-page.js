import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ErrorBoundry from "../Error-boundry/ErrorBoundry";
import useEnterValid from "../../Hooks/useEnterValid";

const StartPage = ({ setIsEnter }) => {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [
    emailDirty,
    pswDirty,
    emailError,
    pwdError,
    emailHandler,
    passwordHandler,
    blurHandler,
  ] = useEnterValid(setFormValid, setEmail, setPsw);

  useEffect(() => {
    if (emailError || pwdError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, pwdError]);

  return (
    <div className="wrapper">
      <Container className="d-flex justify-content-center align-items-center mt-2">
        <Form className="border bg-dark text-light rounded  mt-5 my-2 p-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => emailHandler(e)}
              onBlur={(e) => blurHandler(e)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={psw}
              placeholder="Password"
              onChange={(e) => passwordHandler(e)}
              onBlur={(e) => blurHandler(e)}
            />
          </Form.Group>

          <Button
            disabled={!formValid}
            variant="info"
            type="button"
            onClick={() => setIsEnter(false)}
          >
            Login
          </Button>
          <div className="mt-4">
            {emailDirty && emailError && (
              <ErrorBoundry errorText={emailError} />
            )}
            {pswDirty && pwdError && <ErrorBoundry errorText={pwdError} />}
          </div>
        </Form>
      </Container>
    </div>
  );
};
export default StartPage;
