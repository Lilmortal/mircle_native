import { URL } from "../constants";
import { checkApiStatus, getToken, populateQueryParam } from "../libs";

export const getUserById = async id => {
  let response;
  try {
    response = await fetch(`${URL}/user/${id}`, {
      method: "GET",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
  return response.json();
};

export const getUserByEmailAddress = async emailAddress => {
  let response;
  try {
    response = await fetch(`${URL}/user/email/${emailAddress}`, {
      method: "GET",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
  return response.json();
};

export const updateUser = async (emailAddress, key, value) => {
  const token = await getToken();
  let response;
  try {
    response = await fetch(
      `${URL}/user?emailAddress=${emailAddress}&${key}=${value}`,
      {
        method: "PATCH",
        headers: {
          Accept: "text/plain",
          Authorization: token
        }
      }
    );
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateUserPassword = async (id, oldPassword, newPassword) => {
  const token = await getToken();
  let response;
  try {
    let query = populateQueryParam(id);
    query += `&oldPassword=${oldPassword}&newPassword=${newPassword}`;

    response = await fetch(`${URL}/user/password${query}`, {
      method: "PATCH",
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
};

export const setUserProfileImage = async (id, profileImage = undefined) => {
  const token = await getToken();
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    const query = populateQueryParam(id);

    response = await fetch(`${URL}/user/profileimage${query}`, {
      method: "PATCH",
      body: formData,
      Authorization: token
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const addFriend = async (id, friendId) => {
  try {
    const response = await fetch(`${URL}/user/${id}/friend/${friendId}`, {
      method: "POST",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getListOfFriends = async id => {
  let response;
  try {
    response = await fetch(`${URL}/user/${id}/friends`, {
      method: "GET",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(respones);
  } catch (err) {
    return Promise.reject(err);
  }
  return response.json();
};

export const deleteFriend = async (id, friendId) => {
  try {
    const response = await fetch(`${URL}/user/${id}/friend/${friendId}`, {
      method: "DELETE",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(respones);
  } catch (err) {
    return Promise.reject(err);
  }
};
