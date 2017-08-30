import { URL } from "../constants";
import { checkApiStatus } from "../checkApiStatus";

export const setUserImage = async (emailAddress, profileImage = null) => {
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("emailAddress", emailAddress);

    response = await fetch(`${URL}/user/profileimage`, {
      method: "POST",
      body: formData
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const registerUser = async user => {
  try {
    const response = await fetch(`${URL}/user`, {
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

export const getUserById = async id => {
  let response;
  try {
    response = await fetch(`${URL}/user/${id}`, {
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

export const getUserByEmailAddress = async (emailAddress, password) => {
  let response;
  try {
    response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ emailAddress, password })
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
  return response.json();
};

export const addFriend = async (id, friendId) => {
  try {
    const response = await fetch(`${URL}/user/${id}/friend/${friendId}`, {
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

export const getListOfFriends = async id => {
  let response;
  try {
    response = await fetch(`${URL}/user/${id}/friends`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(respones);
  } catch (err) {
    return err;
  }
  return response.json();
};

export const deleteFriend = async (id, friendId) => {
  try {
    const response = await fetch(`${URL}/user/${id}/friend/${friendId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(respones);
  } catch (err) {
    return err;
  }
};
