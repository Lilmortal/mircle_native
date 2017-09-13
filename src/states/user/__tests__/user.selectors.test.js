import * as selectors from "../selectors";
import { NAME } from "../constants";

describe("User selectors", () => {
  let userState;
  const id = 1;
  const emailAddress = "test@test.com";
  const password = "abcdef";
  const firstName = "Max";
  const surname = "Smith";
  const gender = "M";
  const phoneNumber = "12345";
  const birthDate = new Date("01/02/2014");
  const occupation = "Programmer";
  const profileImage = {
    uri: "http://test.com",
    type: "png",
    name: "test",
    isDefault: false
  };
  const createdOn = new Date("01/02/2014");
  const lastLoggedIn = new Date("01/02/2014");
  const isLoggedIn = new Date("01/02/2014");

  beforeEach(() => {
    userState = {
      [NAME]: {
        id,
        emailAddress,
        password,
        firstName,
        surname,
        gender,
        phoneNumber,
        birthDate,
        occupation,
        profileImage,
        createdOn,
        lastLoggedIn,
        isLoggedIn
      }
    };
  });

  it("returns user", () => {
    expect(selectors.getUser(userState)).toEqual(userState[NAME]);
  });

  it("returns id", () => {
    expect(selectors.getId(userState)).toEqual(id);
  });

  it("returns emailAddress", () => {
    expect(selectors.getEmailAddress(userState)).toEqual(emailAddress);
  });

  it("returns emailAddress", () => {
    expect(selectors.getEmailAddress(userState)).toEqual(emailAddress);
  });

  it("returns password", () => {
    expect(selectors.getPassword(userState)).toEqual(password);
  });

  it("returns first name", () => {
    expect(selectors.getFirstName(userState)).toEqual(firstName);
  });

  it("returns surname", () => {
    expect(selectors.getSurname(userState)).toEqual(surname);
  });

  it("returns gender", () => {
    expect(selectors.getGender(userState)).toEqual(gender);
  });

  it("returns phone number", () => {
    expect(selectors.getPhoneNumber(userState)).toEqual(phoneNumber);
  });

  it("returns birth date", () => {
    expect(selectors.getBirthDate(userState)).toEqual(birthDate);
  });

  it("returns occupation", () => {
    expect(selectors.getOccupation(userState)).toEqual(occupation);
  });

  it("returns profile image", () => {
    expect(selectors.getProfileImage(userState)).toEqual(profileImage);
  });

  it("returns when was it created", () => {
    expect(selectors.getCreatedOn(userState)).toEqual(createdOn);
  });

  it("returns last logged in", () => {
    expect(selectors.getLastLoggedIn(userState)).toEqual(lastLoggedIn);
  });

  it("returns is logged in", () => {
    expect(selectors.isLoggedIn(userState)).toEqual(isLoggedIn);
  });
});
