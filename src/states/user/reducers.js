import moment from "moment";

import * as actionTypes from "./actionTypes";

const initialState = {
  id: 0,
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
  },
  createdOn: "",
  lastLoggedIn: "",
  isLoggedIn: false,
  feeds: [],
  friends: []
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.RESET_USER_STATE: {
      return initialState;
    }
    case actionTypes.POPULATE_USER_STATE: {
      return {
        ...state,
        ...payload.user,
        birthDate: moment.utc(payload.user.birthDate).toDate(),
        createdOn: moment.utc(payload.user.createdOn).toDate(),
        lastLoggedIn: moment.utc(payload.user.lastLoggedIn).toDate(),
        isLoggedIn: true
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
    case actionTypes.UPDATE_FRIENDS: {
      if (!payload.friends) {
        return state;
      }

      let updatedFriends;

      if (Array.isArray(payload.friends)) {
        updatedFriends = payload.friends.concat(state.friends);
      } else {
        updatedFriends = [payload.friends, ...state.friends];
      }

      return {
        ...state,
        friends: updatedFriends
      };
    }
    case actionTypes.UPDATE_FEEDS: {
      if (!payload.feeds) {
        return state;
      }
      let updatedFeeds;

      if (Array.isArray(payload.feeds)) {
        updatedFeeds = payload.feeds.concat(state.feeds);
      } else {
        updatedFeeds = [payload.feeds, ...state.feeds];
      }
      return {
        ...state,
        feeds: updatedFeeds
      };
    }
    default:
      return state;
  }
};

export default reducer;
