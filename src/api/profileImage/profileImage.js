import { URL } from "../constants";
import { checkApiStatus } from "../checkApiStatus";

export const getDefaultProfileImage = async () => {
  const response = await fetch(`${URL}/profileimage/default/get`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  await checkApiStatus(response);
  return response.json();
};

export const setDefaultProfileImage = async id => {
  const response = await fetch(`${URL}/profileimage/default/set?id=${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  await checkApiStatus(response);
  return response.json();
};

export const uploadProfileImageToS3 = async (profileImage, id) => {
  const formData = new FormData();
  formData.append("profileImage", profileImage);
  formData.append("id", id);

  const response = await fetch(`${URL}/profileimage/s3upload`, {
    method: "POST",
    body: formData
  });
  await checkApiStatus(response);
  return response.json();
};

export const setProfileImageUri = async (id, uri) => {
  const response = await fetch(`${URL}/profileimage/set?id=${id}&uri=${uri}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  await checkApiStatus(response);
  return response.json();
};
