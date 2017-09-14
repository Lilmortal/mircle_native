import AsyncStorage from "AsyncStorage";
import FormData from "form-data";
import fetchMock from "fetch-mock";

import { URL } from "../../constants";
import * as profileImageApi from "../profileImageApi";

const TOKEN = "qwe";
const HTTP_OK = 200;
const HTTP_HTTP_SERVER_ERROR = 500;

describe("Profile image API test", async () => {
  beforeEach(async () => {
    await AsyncStorage.setItem("token", TOKEN);
  });

  afterEach(async () => {
    await AsyncStorage.removeItem("token");
  });

  it("should get default profile image", async () => {
    const response = {
      url: "http://defaultProfileImage.com"
    };

    const options = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: TOKEN
    };

    fetchMock.get(`${URL}/profileimage/default`, response, options);

    const result = await profileImageApi.getDefaultProfileImage();

    expect(result).toEqual(response);
  });

  it("should upload profile image to Amazon S3", async () => {
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
      Authorization: TOKEN
    };

    fetchMock.post(`${URL}/profileimage/upload/s3?id=${id}`, options);

    const result = await profileImageApi.uploadProfileImageToS3(
      id,
      profileImage
    );

    expect(result.status).toEqual(HTTP_OK);
  });
});

require("../profileImageApi");
