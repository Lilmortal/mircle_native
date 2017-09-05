import { URL } from "../constants";
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

export const registerProfileImage = async (
  emailAddress,
  profileImage = null
) => {
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);

    response = await fetch(
      `${URL}/register/email/${emailAddress}/profileimage`,
      {
        method: "POST",
        body: formData
      }
    );
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
