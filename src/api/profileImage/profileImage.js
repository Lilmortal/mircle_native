import { URL } from "../constants";
import { checkApiStatus } from "../checkApiStatus";

export const getDefaultProfileImage = async () => {
  let response;
  try {
    response = await fetch(`${URL}/profileimage/default/get`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
  return response.json();
};

export const setProfileImageToDefault = async id => {
  let response;
  try {
    response = await fetch(`${URL}/profileimage/default/set?id=${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
  return response.json();
};

export const uploadProfileImageToS3 = async (profileImage, id) => {
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("id", id);

    response = await fetch(`${URL}/profileimage/s3upload`, {
      method: "POST",
      body: formData
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
  return response.json();
};

export const setProfileImageUri = async (id, uri) => {
  let response;
  try {
    response = await fetch(`${URL}/profileimage/set?id=${id}&uri=${uri}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
  return response.json();
};
