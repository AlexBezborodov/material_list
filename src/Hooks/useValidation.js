import { useState, useEffect } from "react";

const useValidation = (setFormValid, setName, setSurname) => {
  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const numbers = /[0-9]$/;

  useEffect(() => {
    if (nameError || surnameError) {
      console.log("name error", nameError);
      console.log("surname error", surnameError);
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, surnameError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    console.log("name", e.target.value);
    let figures = e.target.value.match(numbers);
    if (figures) {
      e.target.classList = "form-control transparent-input danger";
      setNameError("Name can`t includes figures");
    } else if (e.target.value < 1) {
      setNameError("Name mast be greater then 0");
      e.target.classList = "form-control transparent-input danger";
    } else {
      e.target.classList = "form-control transparent-input";
      setNameError("");
    }
  };
  const surnameHandler = (e) => {
    setSurname(e.target.value);
    let figures = e.target.value.match(numbers);
    if (figures) {
      setSurnameError("Surname can`t includes figures");
      e.target.classList = "form-control transparent-input danger";
    } else if (e.target.value < 1) {
      setSurnameError("Surname mast be greater then 0");
      e.target.classList = "form-control transparent-input danger";
    } else {
      setSurnameError("");
      e.target.classList = "form-control transparent-input";
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "surname":
        setSurnameDirty(true);
        break;
      default:
        setNameDirty(false);
        setSurnameDirty(false);
    }
  };
  return [
    nameDirty,
    surnameDirty,
    nameError,
    surnameError,
    nameHandler,
    surnameHandler,
    blurHandler,
  ];
};
export default useValidation;
