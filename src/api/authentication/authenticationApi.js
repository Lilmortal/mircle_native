import { URL } from "../constants";
import { checkApiStatus } from "../libs";

export const validateUserExist = async emailAddress => {
  let response;
  try {
    response = await fetch(
      `${URL}/register/user/validate?emailaddress=${emailAddress}`,
      {
        method: "GET",
        headers: {
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
  return response.json();
};

export const registerProfileImage = async (id, profileImage = null) => {
  let response;
  try {
    const formData = new FormData();
    formData.append("profileimage", profileImage);

    response = await fetch(`${URL}/register/${id}/profileimage`, {
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
    response = await fetch(`${URL}/login`, {
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
    // a hack for now, find out why login on the backend return 401 when it has bad credentials
    if (response.status === 401) {
      err = "Incorrect username or password.";
    }
    return Promise.reject(err);
  }
  return response;
};
