import MockDate from "mockdate";

import * as actions from "../actions";
import reducer from "../reducers";

describe("Registration reducer", () => {
  beforeEach(() => {
    MockDate.set("6/19/2017");
  });

  afterEach(function() {
    MockDate.reset();
  });

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

  it("should return initial state", () => {
    const registrationReducer = reducer(undefined, {});

    expect(registrationReducer).toEqual(initialState);
  });

  it("should handle UPDATE_EMAIL_ADDRESS action", () => {
    const emailAddress = "test@test.com";
    const registrationReducer = reducer(
      undefined,
      actions.UPDATE_EMAIL_ADDRESS(emailAddress)
    );
    const expectedState = {
      ...initialState,
      emailAddress
    };
    expect(registrationReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_PASSWORD action", () => {
    const password = "abcdef";
    const registrationReducer = reducer(
      undefined,
      actions.UPDATE_PASSWORD(password)
    );
    const expectedState = {
      ...initialState,
      password
    };
    expect(registrationReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_FIRST_NAME action", () => {
    const firstName = "Max";
    const registrationReducer = reducer(
      undefined,
      actions.UPDATE_FIRST_NAME(firstName)
    );
    const expectedState = {
      ...initialState,
      firstName
    };
    expect(registrationReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_SURNAME action", () => {
    const surname = "Smith";
    const registrationReducer = reducer(
      undefined,
      actions.UPDATE_SURNAME(surname)
    );
    const expectedState = {
      ...initialState,
      surname
    };
    expect(registrationReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_GENDER action", () => {
    const gender = "M";
    const registrationReducer = reducer(
      undefined,
      actions.UPDATE_GENDER(gender)
    );
    const expectedState = {
      ...initialState,
      gender
    };
    expect(registrationReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_PHONE_NUMBER action", () => {
    const phoneNumber = "12345";
    const registrationReducer = reducer(
      undefined,
      actions.UPDATE_PHONE_NUMBER(phoneNumber)
    );
    const expectedState = {
      ...initialState,
      phoneNumber
    };
    expect(registrationReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_BIRTH_DATE action", () => {
    const birthDate = new Date(2014, 11, 17);
    const registrationReducer = reducer(
      undefined,
      actions.UPDATE_BIRTH_DATE(birthDate)
    );
    const expectedState = {
      ...initialState,
      birthDate
    };
    expect(registrationReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_OCCUPATION action", () => {
    const occupation = "Programmer";
    const registrationReducer = reducer(
      undefined,
      actions.UPDATE_OCCUPATION(occupation)
    );
    const expectedState = {
      ...initialState,
      occupation
    };
    expect(registrationReducer).toEqual(expectedState);
  });

  it("should handle UPDATE_PROFILE_IMAGE action", () => {
    const profileImage = {
      uri: "http://test.com",
      type: "png",
      name: "test",
      isDefault: false
    };
    const registrationReducer = reducer(
      undefined,
      actions.UPDATE_PROFILE_IMAGE(profileImage)
    );
    const expectedState = {
      ...initialState,
      profileImage
    };
    expect(registrationReducer).toEqual(expectedState);
  });
});
