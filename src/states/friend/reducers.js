import moment from "moment";

import * as actionTypes from "./actionTypes";

const initialState = {
  id: 0,
  emailAddress: "",
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
  },
  createdOn: "",
  lastLoggedIn: "",
  isLoggedIn: false
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.POPULATE_FRIEND_STATE: {
      return {
        ...state,
        ...payload.friend,
        birthDate: moment.utc(payload.friend.birthDate).toDate(),
        createdOn: moment.utc(payload.friend.createdOn).toDate(),
        lastLoggedIn: moment.utc(payload.friend.lastLoggedIn).toDate()
      };
    }
    case actionTypes.UPDATE_ID: {
      return {
        ...state,
        id: payload.id
      };
    }
    case actionTypes.UPDATE_EMAIL_ADDRESS: {
      return {
        ...state,
        emailAddress: payload.emailAddress
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
    case actionTypes.UPDATE_CREATED_ON: {
      return {
        ...state,
        createdOn: payload.createdOn
      };
    }
    case actionTypes.UPDATE_LAST_LOGGED_IN: {
      return {
        ...state,
        lastLoggedIn: payload.lastLoggedIn
      };
    }
    case actionTypes.UPDATE_IS_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn
      };
    }
    default:
      return state;
  }
};

export default reducer;
