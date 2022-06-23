// register form validation
export const isRegisterValid = (fields, setRegisterError) => {
  const { email, name, password, password2 } = fields;
  let isValid = true;

  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    setRegisterError((prevState) => ({
      ...prevState,
      email: "Email not valid",
    }));
    isValid = false;
  }

  if (name === "" || name[0] === " ") {
    setRegisterError((prevState) => ({
      ...prevState,
      name: "Please check this field",
    }));
    isValid = false;
  }

  if (password.length < 6 || password === "" || password.includes(" ")) {
    setRegisterError((prevState) => ({
      ...prevState,
      password: "Invalid password (Note: atleast 6 characters)",
    }));
    isValid = false;
  }

  if (password2.length < 6 || password2 === "" || password2.includes(" ")) {
    setRegisterError((prevState) => ({
      ...prevState,
      password2: "Invalid password (Note: atleast 6 characters)",
    }));
    isValid = false;
  }

  if (!isValid) {
    return false;
  }

  return true;
};

// login form validation
export const isLoginValid = (fields, setLoginError) => {
  const { email, password } = fields;
  let isValid = true;
  
  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    setLoginError((prevState) => ({
      ...prevState,
      email: "Email not valid",
    }));
    isValid = false;
  }

  if (password === "" || password.includes(" ")) {
    setLoginError((prevState) => ({
      ...prevState,
      password: "Please check this field",
    }));
    isValid = false;
  }

  if (!isValid) {
    return false;
  }

  return true;
};
