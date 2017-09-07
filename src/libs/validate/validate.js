const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_REGEX = /^.{6,}$/;
const PHONE_NUMBER_REGEX = /^[0-9]+$/;

const validateEmail = (inputName = "email address", email) => {
  if (email.length === 0) {
    return `${inputName} cannot be empty.`;
  }
  if (!EMAIL_REGEX.test(email)) {
    return `Please enter a valid ${inputName}.`;
  }
  return "";
};

const validatePassword = (inputName = "password", password) => {
  if (password.length === 0) {
    return `${inputName} cannot be empty.`;
  }

  if (!PASSWORD_REGEX.test(password)) {
    return `${inputName} must have at least 6 characters.`;
  }
  return "";
};

const validatePhoneNumber = (inputName = "phone number", phoneNumber) => {
  if (phoneNumber.length === 0) {
    return `${inputName} cannot be empty.`;
  }

  if (!PHONE_NUMBER_REGEX.test(phoneNumber)) {
    return `${inputName} must only have numbers.`;
  }
  return "";
};

const validateGenericInput = (inputName = "input", input) => {
  if (input.length === 0) {
    return `${inputName} cannot be empty.`;
  }
  return "";
};

const validate = (input, medium, inputName) => {
  switch (medium) {
    case "email": {
      const errorMessage = validateEmail(inputName, input);
      return {
        isValid: !errorMessage,
        errorMessage
      };
    }
    case "password": {
      const errorMessage = validatePassword(inputName, input);
      return {
        isValid: !errorMessage,
        errorMessage
      };
    }
    case "phoneNumber": {
      const errorMessage = validatePhoneNumber(inputName, input);
      return {
        isValid: !errorMessage,
        errorMessage
      };
    }
    default: {
      const errorMessage = validateGenericInput(inputName, input);
      return {
        isValid: !errorMessage,
        errorMessage
      };
    }
  }
};

export default validate;
