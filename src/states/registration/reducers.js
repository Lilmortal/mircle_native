import * as actionTypes from "./actionTypes";

const initialState = {
  emailAddress: "",
  password: "",
  firstName: "",
  surname: "",
  gender: "M",
  phoneNumber: "",
  birthDate: new Date(),
  occupation: "",
  profileImage: {
    uri: "",
    type: "",
    name: "",
    isDefault: true
  }
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.UPDATE_EMAIL_ADDRESS: {
      return {
        ...state,
        emailAddress: payload.emailAddress
      };
    }
    case actionTypes.UPDATE_PASSWORD: {
      return {
        ...state,
        password: payload.password
      };
    }
    case actionTypes.UPDATE_FIRST_NAME: {
      return {
        ...state,
        firstName: payload.firstName
      };
    }
    case actionTypes.UPDATE_SURNAME: {
      return {
        ...state,
        surname: payload.surname
      };
    }
    case actionTypes.UPDATE_GENDER: {
      return {
        ...state,
        gender: payload.gender
      };
    }
    case actionTypes.UPDATE_PHONE_NUMBER: {
      return {
        ...state,
        phoneNumber: payload.phoneNumber
      };
    }
    case actionTypes.UPDATE_BIRTH_DATE: {
      return {
        ...state,
        birthDate: payload.birthDate
      };
    }
    case actionTypes.UPDATE_OCCUPATION: {
      return {
        ...state,
        occupation: payload.occupation
      };
    }
    case actionTypes.UPDATE_PROFILE_IMAGE: {
      return {
        ...state,
        profileImage: payload.profileImage
      };
    }
    case actionTypes.RESET_REGISTER_DETAILS: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
