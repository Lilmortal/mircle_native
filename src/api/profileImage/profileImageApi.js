import { URL } from "../constants";
import { checkApiStatus, getToken, populateQueryParam } from "../libs";

export const getDefaultProfileImage = async () => {
  const token = await getToken();
  let response;
  try {
    response = await fetch(`${URL}/profileimage/default`, {
      method: "GET",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
  return response.json();
};

export const uploadProfileImageToS3 = async (id, profileImage) => {
  const token = await getToken();
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    const query = populateQueryParam(id);

    response = await fetch(`${URL}/profileimage/upload/s3${query}`, {
      method: "POST",
      body: formData,
      Authorization: token
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};
