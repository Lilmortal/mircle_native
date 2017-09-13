import MockDate from "mockdate";

import * as actions from "../actions";
import reducer from "../reducers";

describe("Friend reducer", () => {
  beforeEach(() => {
    MockDate.set("6/19/2017");
  });

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

  it("should return initial state", () => {
    const friendReducer = reducer(undefined, {});

    expect(friendReducer).toEqual(initialState);
  });

  it("should handle POPULATE_FRIEND_STATE action", () => {
    const friend = {
      id: 0,
      emailAddress: "test@test.com",
      firstName: "Max",
      surname: "Smith",
      gender: "M",
      phoneNumber: "12345",
      birthDate: new Date(2017, 1, 2),
      occupation: "Programmer",
      profileImage: {
        uri: "http://test.com",
        type: "png",
        name: "test",
        isDefault: false
      },
      createdOn: new Date(2017, 1, 2),
      lastLoggedIn: new Date(2017, 1, 2),
      isLoggedIn: true
    };

    const friendReducer = reducer(
      undefined,
      actions.POPULATE_FRIEND_STATE(friend)
    );
    const expectedState = friend;
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_ID action", () => {
    const id = 1;
    const friendReducer = reducer(undefined, actions.UPDATE_ID(id));
    const expectedState = {
      ...initialState,
      id
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_EMAIL_ADDRESS action", () => {
    const emailAddress = "test@test.com";
    const friendReducer = reducer(
      undefined,
      actions.UPDATE_EMAIL_ADDRESS(emailAddress)
    );
    const expectedState = {
      ...initialState,
      emailAddress
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_FIRST_NAME action", () => {
    const firstName = "Max";
    const friendReducer = reducer(
      undefined,
      actions.UPDATE_FIRST_NAME(firstName)
    );
    const expectedState = {
      ...initialState,
      firstName
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_SURNAME action", () => {
    const surname = "Smith";
    const friendReducer = reducer(undefined, actions.UPDATE_SURNAME(surname));
    const expectedState = {
      ...initialState,
      surname
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_GENDER action", () => {
    const gender = "M";
    const friendReducer = reducer(undefined, actions.UPDATE_GENDER(gender));
    const expectedState = {
      ...initialState,
      gender
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_PHONE_NUMBER action", () => {
    const phoneNumber = "12345";
    const friendReducer = reducer(
      undefined,
      actions.UPDATE_PHONE_NUMBER(phoneNumber)
    );
    const expectedState = {
      ...initialState,
      phoneNumber
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_BIRTH_DATE action", () => {
    const birthDate = new Date(2014, 11, 16);
    const friendReducer = reducer(
      undefined,
      actions.UPDATE_BIRTH_DATE(birthDate)
    );
    const expectedState = {
      ...initialState,
      birthDate
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_OCCUPATION action", () => {
    const occupation = "Programmer";
    const friendReducer = reducer(
      undefined,
      actions.UPDATE_OCCUPATION(occupation)
    );
    const expectedState = {
      ...initialState,
      occupation
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_PROFILE_IMAGE action", () => {
    const profileImage = {
      uri: "http://test.com",
      type: "png",
      name: "test",
      isDefault: false
    };
    const friendReducer = reducer(
      undefined,
      actions.UPDATE_PROFILE_IMAGE(profileImage)
    );
    const expectedState = {
      ...initialState,
      profileImage
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_CREATED_ON action", () => {
    const createdOn = new Date(2014, 11, 17);
    const friendReducer = reducer(
      undefined,
      actions.UPDATE_CREATED_ON(createdOn)
    );
    const expectedState = {
      ...initialState,
      createdOn
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_LAST_LOGGED_IN action", () => {
    const lastLoggedIn = new Date(2014, 11, 17);
    const friendReducer = reducer(
      undefined,
      actions.UPDATE_LAST_LOGGED_IN(lastLoggedIn)
    );
    const expectedState = {
      ...initialState,
      lastLoggedIn
    };
    expect(friendReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_IS_LOGGED_IN action", () => {
    const isLoggedIn = true;
    const friendReducer = reducer(
      undefined,
      actions.UPDATE_IS_LOGGED_IN(isLoggedIn)
    );
    const expectedState = {
      ...initialState,
      isLoggedIn
    };
    expect(friendReducer).toEqual(expectedState);
  });
});
