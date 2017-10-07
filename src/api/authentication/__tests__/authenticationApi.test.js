import Response from "http-response-object";
import FormData from "form-data";
import fetchMock from "fetch-mock";

import { URL } from "../../constants";
import * as AuthenticationApi from "../authenticationApi";

const HTTP_OK = 200;
const HTTP_SERVER_ERROR = 500;

describe("Authentication API test", () => {
  beforeEach(() => {
    global.FormData = FormData;
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("should validate that the user exist", async () => {
    const emailAddress = "test@test.com";
    const response = { validated: true };
    fetchMock.get(
      `${URL}/register/user/validate?emailaddress=${emailAddress}`,
      response
    );

    const result = await AuthenticationApi.validateUserExist(emailAddress);
    const json = await result.json();
    expect(result.status).toEqual(HTTP_OK);
    expect(json).toEqual(response);
  });

  it("should validate that the user does not exist", async () => {
    const emailAddress = "test@test.com";
    const response = { throws: HTTP_SERVER_ERROR };
    fetchMock.get(
      `${URL}/register/user/validate?emailaddress=${emailAddress}`,
      response
    );

    try {
      const result = await AuthenticationApi.validateUserExist(emailAddress);
    } catch (err) {
      expect(err).toEqual(HTTP_SERVER_ERROR);
    }
  });

  it("should register a user.", async () => {
    const user = {
      firstName: "Max",
      surname: "Smith"
    };
    fetchMock.post(`${URL}/register`, { body: user });

    const result = await AuthenticationApi.register(user);
    expect(result).toEqual(user);
  });

  it("should register the user profile image to be default.", async () => {
    const id = 1;
    const response = {};

    const formData = new FormData();
    formData.append("profileimage", {});
    const options = {
      body: formData
    };

    fetchMock.post(`${URL}/register/profileimage?id=${id}`, response, options);

    const result = await AuthenticationApi.registerProfileImage(id);
    expect(result.status).toEqual(HTTP_OK);
  });

  it("should register the user profile image.", async () => {
    const id = 1;
    const response = {};

    const profileImage = {
      url: "http://test.com",
      type: "png",
      name: "test",
      isDefault: "false"
    };
    const formData = new FormData();
    formData.append("profileImage", JSON.stringify(profileImage));
    const options = {
      body: formData
    };

    fetchMock.post(`${URL}/register/profileimage?id=${id}`, response, options);

    const result = await AuthenticationApi.registerProfileImage(
      id,
      profileImage
    );
    expect(result.status).toEqual(HTTP_OK);
  });

  it("should login given an email address and a password", async () => {
    const token = "123";
    const emailAddress = "test@test.com";
    const password = "abcdef";

    const header = {
      map: {
        authorization: [token]
      }
    };

    const response = new Response(HTTP_OK, header);

    fetchMock.post(`${URL}/login`, response);

    const result = await AuthenticationApi.login(emailAddress, password);
    const json = await result.json();

    expect(json).toEqual(token);
  });
});
