import * as actions from "../actions";
import * as actionTypes from "../actionTypes";

describe("User actions", () => {
  it("should create a POPULATE_USER_STATE action", () => {
    const user = {
      id: 0,
      emailAddress: "test@test.com",
      firstName: "Max",
      surname: "Smith",
      gender: "M",
      phoneNumber: "12345",
      birthDate: new Date("01/02/2014"),
      occupation: "Programmer",
      profileImage: {
        uri: "http://test.com",
        type: "png",
        name: "test",
        isDefault: false
      },
      createdOn: new Date("01/02/2014"),
      lastLoggedIn: new Date("01/02/2014"),
      isLoggedIn: true
    };

    const expectedAction = {
      type: actionTypes.POPULATE_USER_STATE,
      user
    };

    expect(actions.POPULATE_USER_STATE(user)).toEqual(expectedAction);
  });

  it("should create a UPDATE_ID action", () => {
    const id = 1;
    const expectedAction = {
      type: actionTypes.UPDATE_ID,
      id
    };

    expect(actions.UPDATE_ID(id)).toEqual(expectedAction);
  });

  it("should create a UPDATE_EMAIL_ADDRESS action", () => {
    const emailAddress = "test@test.com";
    const expectedAction = {
      type: actionTypes.UPDATE_EMAIL_ADDRESS,
      emailAddress
    };

    expect(actions.UPDATE_EMAIL_ADDRESS(emailAddress)).toEqual(expectedAction);
  });

  it("should create a UPDATE_PASSWORD action", () => {
    const password = "abcdef";
    const expectedAction = {
      type: actionTypes.UPDATE_PASSWORD,
      password
    };

    expect(actions.UPDATE_PASSWORD(password)).toEqual(expectedAction);
  });

  it("should create a UPDATE_FIRST_NAME action", () => {
    const firstName = "Max";
    const expectedAction = {
      type: actionTypes.UPDATE_FIRST_NAME,
      firstName
    };

    expect(actions.UPDATE_FIRST_NAME(firstName)).toEqual(expectedAction);
  });

  it("should create a UPDATE_SURNAME action", () => {
    const surname = "Smith";
    const expectedAction = {
      type: actionTypes.UPDATE_SURNAME,
      surname
    };

    expect(actions.UPDATE_SURNAME(surname)).toEqual(expectedAction);
  });

  it("should create a UPDATE_GENDER action", () => {
    const gender = "M";
    const expectedAction = {
      type: actionTypes.UPDATE_GENDER,
      gender
    };

    expect(actions.UPDATE_GENDER(gender)).toEqual(expectedAction);
  });

  it("should create a UPDATE_PHONE_NUMBER action", () => {
    const phoneNumber = "12345";
    const expectedAction = {
      type: actionTypes.UPDATE_PHONE_NUMBER,
      phoneNumber
    };

    expect(actions.UPDATE_PHONE_NUMBER(phoneNumber)).toEqual(expectedAction);
  });

  it("should create a UPDATE_BIRTH_DATE action", () => {
    const birthDate = new Date("01/02/2014");
    const expectedAction = {
      type: actionTypes.UPDATE_BIRTH_DATE,
      birthDate
    };

    expect(actions.UPDATE_BIRTH_DATE(birthDate)).toEqual(expectedAction);
  });

  it("should create a UPDATE_OCCUPATION action", () => {
    const occupation = "Programmer";
    const expectedAction = {
      type: actionTypes.UPDATE_OCCUPATION,
      occupation
    };

    expect(actions.UPDATE_OCCUPATION(occupation)).toEqual(expectedAction);
  });

  it("should create a UPDATE_PROFILE_IMAGE action", () => {
    const profileImage = {
      uri: "http://test.com",
      type: "png",
      name: "test",
      isDefault: false
    };

    const expectedAction = {
      type: actionTypes.UPDATE_PROFILE_IMAGE,
      profileImage
    };

    expect(actions.UPDATE_PROFILE_IMAGE(profileImage)).toEqual(expectedAction);
  });

  it("should create a UPDATE_CREATED_ON action", () => {
    const createdOn = new Date("01/02/2014");
    const expectedAction = {
      type: actionTypes.UPDATE_CREATED_ON,
      createdOn
    };

    expect(actions.UPDATE_CREATED_ON(createdOn)).toEqual(expectedAction);
  });

  it("should create a UPDATE_LAST_LOGGED_IN action", () => {
    const lastLoggedIn = new Date("01/02/2014");
    const expectedAction = {
      type: actionTypes.UPDATE_LAST_LOGGED_IN,
      lastLoggedIn
    };

    expect(actions.UPDATE_LAST_LOGGED_IN(lastLoggedIn)).toEqual(expectedAction);
  });

  it("should create a UPDATE_IS_LOGGED_IN action", () => {
    const isLoggedIn = new Date("01/02/2014");
    const expectedAction = {
      type: actionTypes.UPDATE_IS_LOGGED_IN,
      isLoggedIn
    };

    expect(actions.UPDATE_IS_LOGGED_IN(isLoggedIn)).toEqual(expectedAction);
  });
});
