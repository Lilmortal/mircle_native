import * as actionTypes from "./actionTypes";

export const UPDATE_EMAIL_ADDRESS = emailAddress => ({
  type: actionTypes.UPDATE_EMAIL_ADDRESS,
  emailAddress
});

export const UPDATE_PASSWORD = password => ({
  type: actionTypes.UPDATE_PASSWORD,
  password
});

export const UPDATE_FIRST_NAME = firstName => ({
  type: actionTypes.UPDATE_FIRST_NAME,
  firstName
});

export const UPDATE_SURNAME = surname => ({
  type: actionTypes.UPDATE_SURNAME,
  surname
});

export const UPDATE_GENDER = gender => ({
  type: actionTypes.UPDATE_GENDER,
  gender
});

export const UPDATE_PHONE_NUMBER = phoneNumber => ({
  type: actionTypes.UPDATE_PHONE_NUMBER,
  phoneNumber
});

export const UPDATE_BIRTH_DATE = birthDate => ({
  type: actionTypes.UPDATE_BIRTH_DATE,
  birthDate
});

export const UPDATE_OCCUPATION = occupation => ({
  type: actionTypes.UPDATE_OCCUPATION,
  occupation
});

export const UPDATE_PROFILE_IMAGE = profileImage => ({
  type: actionTypes.UPDATE_PROFILE_IMAGE,
  profileImage
});

export const RESET_REGISTER_DETAILS = () => ({
  type: actionTypes.RESET_REGISTER_DETAILS
});
