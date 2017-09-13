import * as selectors from "../selectors";
import { NAME } from "../constants";

describe("Friend selectors", () => {
  let friendState;
  const id = 1;
  const emailAddress = "test@test.com";
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
  const isLoggedIn = true;

  beforeEach(() => {
    friendState = {
      [NAME]: {
        id,
        emailAddress,
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

  it("returns friend id", () => {
    expect(selectors.getId(friendState)).toEqual(id);
  });

  it("returns emailAddress", () => {
    expect(selectors.getEmailAddress(friendState)).toEqual(emailAddress);
  });

  it("returns first name", () => {
    expect(selectors.getFirstName(friendState)).toEqual(firstName);
  });

  it("returns surname", () => {
    expect(selectors.getSurname(friendState)).toEqual(surname);
  });

  it("returns gender", () => {
    expect(selectors.getGender(friendState)).toEqual(gender);
  });

  it("returns phone number", () => {
    expect(selectors.getPhoneNumber(friendState)).toEqual(phoneNumber);
  });

  it("returns birth date", () => {
    expect(selectors.getBirthDate(friendState)).toEqual(birthDate);
  });

  it("returns occupation", () => {
    expect(selectors.getOccupation(friendState)).toEqual(occupation);
  });

  it("returns profile image", () => {
    expect(selectors.getProfileImage(friendState)).toEqual(profileImage);
  });

  it("returns when was it created", () => {
    expect(selectors.getCreatedOn(friendState)).toEqual(createdOn);
  });

  it("returns last logged in", () => {
    expect(selectors.getLastLoggedIn(friendState)).toEqual(lastLoggedIn);
  });

  it("returns is logged in", () => {
    expect(selectors.isLoggedIn(friendState)).toEqual(isLoggedIn);
  });
});
