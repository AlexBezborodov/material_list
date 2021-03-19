import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ErrorBoundry from "../Error-boundry/ErrorBoundry";

const StartPage = ({ setIsEnter }) => {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [pswDirty, setPswDirty] = useState(false);
  const [emailError, setEmailError] = useState("email can`t be empty");
  const [pwdError, setPwdError] = useState("password can`t be empty");
  const [formValid, setFormValid] = useState (false)
  
  useEffect(() => {
   if (emailError || pwdError) {
     setFormValid(false)
   } else {
    setFormValid(true)
   }
   
  }, [emailError,pwdError])

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("not correct Email");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e) => {
    setPsw(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPwdError("Your password not correct");
      if (!e.target.value) {
        setPwdError("password can`t be empty")
      }
    } else {
      setPwdError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPswDirty(true);
        break;
      default:
        setEmailDirty(false);
        setPswDirty(false);
    }
  };
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
