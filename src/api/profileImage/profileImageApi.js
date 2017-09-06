import { URL, populateQueryParam } from "../constants";
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

export const uploadProfileImageToS3 = async (id, profileImage) => {
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    const query = populateQueryParam(id);

    response = await fetch(`${URL}/profileimage/upload/s3${query}`, {
      method: "POST",
      body: formData
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
};
