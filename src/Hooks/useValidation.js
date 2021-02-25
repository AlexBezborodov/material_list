const useValidation = (
  setIsError,
  setIsDisabled,
  setErrorText,
  name,
  surname
) => {
  let onlyLetter = "[0-9]";
  
  const buttonValidate = (name, surname) => {
    if (name.length > 0 && surname.length > 0) {
      setIsDisabled(false);

    }
  };
  

  const validation = (value, e) => {
    let field = `Field must be greater then zero`;
    if (value.length < 1) {
      setIsError(true);
      setErrorText(field);
      e.target.classList = "form-control transparent-input danger";
    } else if (name.match(onlyLetter) || surname.match(onlyLetter)) {
      setIsError(true);
      setErrorText("Name or Surname cant`t includes figures");
      e.target.classList = "form-control transparent-input danger";
    } else {
      setIsError(false);
      setErrorText("");
      e.target.classList = "form-control transparent-input";
    }
  };

  return [validation];
};
export default useValidation;
