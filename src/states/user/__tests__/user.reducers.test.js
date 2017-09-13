import MockDate from "mockdate";

import * as actions from "../actions";
import reducer from "../reducers";

describe("User reducer", () => {
  beforeEach(() => {
    MockDate.set("6/19/2017");
  });

  afterEach(function() {
    MockDate.reset();
  });

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
    isLoggedIn: false
  };

  it("should return initial state", () => {
    const userReducer = reducer(undefined, {});

    expect(userReducer).toEqual(initialState);
  });

  it("should handle UPDATE_EMAIL_ADDRESS action", () => {
    const emailAddress = "test@test.com";
    const userReducer = reducer(
      undefined,
      actions.UPDATE_EMAIL_ADDRESS(emailAddress)
    );
    const expectedState = {
      ...initialState,
      emailAddress
    };
    expect(userReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_PASSWORD action", () => {
    const password = "abcdef";
    const userReducer = reducer(undefined, actions.UPDATE_PASSWORD(password));
    const expectedState = {
      ...initialState,
      password
    };
    expect(userReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_FIRST_NAME action", () => {
    const firstName = "Max";
    const userReducer = reducer(
      undefined,
      actions.UPDATE_FIRST_NAME(firstName)
    );
    const expectedState = {
      ...initialState,
      firstName
    };
    expect(userReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_SURNAME action", () => {
    const surname = "Smith";
    const userReducer = reducer(undefined, actions.UPDATE_SURNAME(surname));
    const expectedState = {
      ...initialState,
      surname
    };
    expect(userReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_GENDER action", () => {
    const gender = "M";
    const userReducer = reducer(undefined, actions.UPDATE_GENDER(gender));
    const expectedState = {
      ...initialState,
      gender
    };
    expect(userReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_PHONE_NUMBER action", () => {
    const phoneNumber = "12345";
    const userReducer = reducer(
      undefined,
      actions.UPDATE_PHONE_NUMBER(phoneNumber)
    );
    const expectedState = {
      ...initialState,
      phoneNumber
    };
    expect(userReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_BIRTH_DATE action", () => {
    const birthDate = new Date("01/02/2014");
    const userReducer = reducer(
      undefined,
      actions.UPDATE_BIRTH_DATE(birthDate)
    );
    const expectedState = {
      ...initialState,
      birthDate
    };
    expect(userReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_OCCUPATION action", () => {
    const occupation = "Programmer";
    const userReducer = reducer(
      undefined,
      actions.UPDATE_OCCUPATION(occupation)
    );
    const expectedState = {
      ...initialState,
      occupation
    };
    expect(userReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_PROFILE_IMAGE action", () => {
    const profileImage = {
      uri: "http://test.com",
      type: "png",
      name: "test",
      isDefault: false
    };
    const userReducer = reducer(
      undefined,
      actions.UPDATE_PROFILE_IMAGE(profileImage)
    );
    const expectedState = {
      ...initialState,
      profileImage
    };
    expect(userReducer).toEqual(expectedState);
  });
});
