import * as selectors from "../selectors";
import { NAME } from "../constants";

describe("Registration selectors", () => {
  let registrationState;
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

  beforeEach(() => {
    registrationState = {
      [NAME]: {
        emailAddress,
        password,
        firstName,
        surname,
        gender,
        phoneNumber,
        birthDate,
        occupation,
        profileImage
      }
    };
  });

  it("returns emailAddress", () => {
    expect(selectors.getEmailAddress(registrationState)).toEqual(emailAddress);
  });

  it("returns password", () => {
    expect(selectors.getPassword(registrationState)).toEqual(password);
  });

  it("returns first name", () => {
    expect(selectors.getFirstName(registrationState)).toEqual(firstName);
  });

  it("returns surname", () => {
    expect(selectors.getSurname(registrationState)).toEqual(surname);
  });

  it("returns gender", () => {
    expect(selectors.getGender(registrationState)).toEqual(gender);
  });

  it("returns phone number", () => {
    expect(selectors.getPhoneNumber(registrationState)).toEqual(phoneNumber);
  });

  it("returns birth date", () => {
    expect(selectors.getBirthDate(registrationState)).toEqual(birthDate);
  });

  it("returns occupation", () => {
    expect(selectors.getOccupation(registrationState)).toEqual(occupation);
  });

  it("returns profile image", () => {
    expect(selectors.getProfileImage(registrationState)).toEqual(profileImage);
  });
});
