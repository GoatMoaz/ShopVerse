import useValidateInput from "../hooks/use-validate-input";
import SignupForm from "../components/Login/SignupForm";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignupPage = () => {
  const {
    enteredValue: enteredFirstName,
    isValid: FirstNameIsValid,
    inputHasError: FirstNameHasError,
    valueChangeHandler: FirstNameChangeHandler,
    inputBlurHandler: FirstNameBlurHandler,
  } = useValidateInput((value) => value.trim() !== "" && value.length > 2);

  const {
    enteredValue: enteredLastName,
    isValid: LastNameIsValid,
    inputHasError: LastNameHasError,
    valueChangeHandler: LastNameChangeHandler,
    inputBlurHandler: LastNameBlurHandler,
  } = useValidateInput((value) => value.trim() !== "" && value.length > 2);

  const {
    enteredValue: enteredEmail,
    isValid: EmailIsValid,
    inputHasError: EmailHasError,
    valueChangeHandler: EmailChangeHandler,
    inputBlurHandler: EmailBlurHandler,
  } = useValidateInput((value) => emailRegex.test(value));

  const {
    enteredValue: enteredPassword,
    isValid: PasswordIsValid,
    inputHasError: PasswordHasError,
    valueChangeHandler: PasswordChangeHandler,
    inputBlurHandler: PasswordBlurHandler,
  } = useValidateInput((value) => value.trim() !== "" && value.length > 5);

  const {
    enteredValue: enteredPasswordConfirmation,
    isValid: PasswordConfirmationIsValid,
    inputHasError: PasswordConfirmationHasError,
    valueChangeHandler: PasswordConfirmationChangeHandler,
    inputBlurHandler: PasswordConfirmationBlurHandler,
  } = useValidateInput(
    (value) =>
      value.trim() !== "" && value.length > 5 && value === enteredPassword
  );

  let formIsValid = false;

  if (
    FirstNameIsValid &&
    LastNameIsValid &&
    EmailIsValid &&
    PasswordIsValid &&
    PasswordConfirmationIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");

    const signupData = {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };

    console.log(signupData);
  };

  return (
    <SignupForm
      submitHandler={submitHandler}
      FirstName={{
        hasError: FirstNameHasError,
        changeHandler: FirstNameChangeHandler,
        blurHandler: FirstNameBlurHandler,
      }}
      LastName={{
        hasError: LastNameHasError,
        changeHandler: LastNameChangeHandler,
        blurHandler: LastNameBlurHandler,
      }}
      Email={{
        hasError: EmailHasError,
        changeHandler: EmailChangeHandler,
        blurHandler: EmailBlurHandler,
      }}
      Password={{
        hasError: PasswordHasError,
        changeHandler: PasswordChangeHandler,
        blurHandler: PasswordBlurHandler,
      }}
      PasswordConfirmation={{
        hasError: PasswordConfirmationHasError,
        changeHandler: PasswordConfirmationChangeHandler,
        blurHandler: PasswordConfirmationBlurHandler,
      }}
    />
  );
};

export default SignupPage;
