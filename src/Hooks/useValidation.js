const useValidation = (
  setIsError,
  setIsDisabled,
  setErrorText,
  name,
  surname
) => {
  let onlyLetter = "[0-9]";

  const validation = (value, e) => {
    let field = `Field must be greater then zero`;
    if (name.length < 1 && surname.length < 1) {
      setIsError(true);
      setIsDisabled(true);
      setErrorText(field);
      e.target.classList = "form-control transparent-input danger";
    } else if (value < 1) {
      setIsError(true);
      setIsDisabled(true);
      setErrorText(field);
      e.target.classList = "form-control transparent-input danger";
    } else if (value.match(onlyLetter)) {
      setIsError(true);
      setIsDisabled(true);
      setErrorText("Name or Surname cant`t includes figures");
      e.target.classList = "form-control transparent-input danger";
    } else {
      setIsError(false);
      setIsDisabled(false);
      setErrorText("");
      e.target.classList = "form-control transparent-input";
    }
  };
  return [validation];
};
export default useValidation;
