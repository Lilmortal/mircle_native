import { URL, populateQueryParam } from "../constants";
import { checkApiStatus } from "../checkApiStatus";

export const register = async user => {
  try {
    const response = await fetch(`${URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
};

export const registerProfileImage = async (id, profileImage = null) => {
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    const query = populateQueryParam(id);

    response = await fetch(`${URL}/register/profileimage${query}`, {
      method: "PATCH",
      body: formData
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const login = async (emailAddress, password) => {
  let response;
  try {
    const response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: emailAddress, password })
    });
    await checkApiStatus(response);
    return response.headers.map.authorization[0];
  } catch (err) {
    return Promise.reject(err);
  }
};
