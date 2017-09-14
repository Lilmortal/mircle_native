import AsyncStorage from "AsyncStorage";
import FormData from "form-data";
import fetchMock from "fetch-mock";

import { URL } from "../../constants";
import * as userApi from "../userApi";

const TOKEN = "qwe";
const HTTP_OK = 200;
const HTTP_HTTP_SERVER_ERROR = 500;

describe("User API test", () => {
  beforeEach(async () => {
    await AsyncStorage.setItem("token", TOKEN);
  });

  afterEach(async () => {
    await AsyncStorage.removeItem("token");
  });

  it("should get user by id", async () => {
    const id = 1;

    const response = {
      firstName: "Max",
      surname: "Smith"
    };

    const options = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: TOKEN
    };

    fetchMock.get(`${URL}/user/${id}`, response, options);

    const result = await userApi.getUserById(id);
    expect(result).toEqual(response);
  });

  it("should get user by email address", async () => {
    const emailAddress = "test@test.com";

    const response = {
      firstName: "Max",
      surname: "Smith"
    };

    const options = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: TOKEN
    };

    fetchMock.get(`${URL}/user/email/${emailAddress}`, response, options);

    const result = await userApi.getUserByEmailAddress(emailAddress);
    expect(result).toEqual(response);
  });

  it("should update user", async () => {
    const emailAddress = "test@test.com";
    const key = "firstName";
    const value = "John";

    const options = {
      Accept: "application/json",
      Authorization: TOKEN
    };

    fetchMock.patch(
      `${URL}/user?emailAddress=${emailAddress}&${key}=${value}`,
      options
    );

    const result = await userApi.updateUser(emailAddress, key, value);
    expect(result.status).toEqual(HTTP_OK);
  });

  it("should update user password", async () => {
    const id = 1;
    const oldPassword = "abc";
    const newPassword = "def";

    const options = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: TOKEN
    };

    fetchMock.patch(
      `${URL}/user/password?id=${id}&oldPassword=${oldPassword}&newPassword=${newPassword}`,
      options
    );

    const result = await userApi.updateUserPassword(
      id,
      oldPassword,
      newPassword
    );
    expect(result.status).toEqual(HTTP_OK);
  });

  it("should update user profile image", async () => {
    const id = 1;
    const profileImage = {
      url: "http://test.com",
      type: "png",
      name: "test",
      isDefault: false
    };

    const formData = new FormData();
    formData.append("profileImage", JSON.stringify(profileImage));

    const options = {
      body: formData,
      headers: {
        Authorization: TOKEN
      }
    };

    fetchMock.post(`${URL}/user/profileimage?id=${id}`, options);

    const result = await userApi.setUserProfileImage(id, profileImage);
    expect(result.status).toEqual(HTTP_OK);
  });
});
