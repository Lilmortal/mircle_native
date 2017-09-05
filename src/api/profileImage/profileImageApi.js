import { URL } from "../constants";
import { checkApiStatus } from "../checkApiStatus";

export const getDefaultProfileImage = async () => {
  let response;
  try {
    response = await fetch(`${URL}/profileimage/default`, {
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

export const removeProfileImage = async id => {
  let response;
  try {
    response = await fetch(`${URL}/user/${id}/profileimage`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
};

export const uploadProfileImageToS3 = async (profileImage, emailAddress) => {
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);

    response = await fetch(
      `${URL}/profileimage/email/${emailAddress}/upload/s3`,
      {
        method: "POST",
        body: formData
      }
    );
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
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
};
