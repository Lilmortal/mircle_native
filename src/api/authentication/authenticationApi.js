import { URL } from "../constants";
import { checkApiStatus, populateQueryParam } from "../libs";

export const validateUserExist = async emailAddress => {
  let response;
  try {
    response = await fetch(
      `${URL}/register/user/validate?emailAddress=${emailAddress}`,
      {
        method: "GET",
        headers: {
          Accept: "text/plain",
          "Content-Type": "application/json"
        }
      }
    );
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
  return response;
};

export const register = async user => {
  let response;
  try {
    response = await fetch(`${URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
  return response;
};

export const registerProfileImage = async (id, profileImage = null) => {
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", JSON.stringify(profileImage));
    const query = populateQueryParam(id);

    response = await fetch(`${URL}/register/profileimage${query}`, {
      method: "POST",
      body: formData
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
  return response;
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
    console.log(response.headers._headers);
    await checkApiStatus(response);
    return response.headers.map.authorization[0];
  } catch (err) {
    return Promise.reject(err);
  }
};
