import { useState } from "react";

const useValidateInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(enteredValue);
  const inputHasError = !isValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    enteredValue,
    isValid,
    inputHasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useValidateInput;
