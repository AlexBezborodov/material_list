import { useState, useEffect } from "react";

const useEnterValid = (setFormValid, setEmail, setPsw) => {
  const [emailDirty, setEmailDirty] = useState(false);
  const [pswDirty, setPswDirty] = useState(false);
  const [emailError, setEmailError] = useState("email can`t be empty");
  const [pwdError, setPwdError] = useState("password can`t be empty");

  useEffect(() => {
    if (emailError || pwdError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, pwdError]);

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
      setPwdError("Password must be 4-8 symbols");
      if (!e.target.value) {
        setPwdError("password can`t be empty");
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
  return [
    emailDirty,
    pswDirty,
    emailError,
    pwdError,
    emailHandler,
    passwordHandler,
    blurHandler,
  ];
};

export default useEnterValid;
