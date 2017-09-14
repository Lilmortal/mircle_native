import { URL } from "../constants";
import { checkApiStatus, getToken, populateQueryParam } from "../libs";

export const getUserById = async id => {
  const token = await getToken();
  let response;
  try {
    response = await fetch(`${URL}/user/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
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

export const getUserByEmailAddress = async emailAddress => {
  const token = await getToken();
  let response;
  try {
    response = await fetch(`${URL}/user/email/${emailAddress}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
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

export const updateUser = async (emailAddress, key, value) => {
  const token = await getToken();
  let response;
  try {
    response = await fetch(
      `${URL}/user?emailAddress=${emailAddress}&${key}=${value}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          Authorization: token
        }
      }
    );
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
  return response;
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
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
  return response;
};

export const setUserProfileImage = async (id, profileImage = undefined) => {
  const token = await getToken();
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", JSON.stringify(profileImage));
    const query = populateQueryParam(id);

    response = await fetch(`${URL}/user/profileimage${query}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: token
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
  return response;
};

export const addFriend = async (id, friendId) => {
  const token = await getToken();
  try {
    const response = await fetch(`${URL}/user/${id}/friend/${friendId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getListOfFriends = async id => {
  const token = await getToken();
  let response;
  try {
    response = await fetch(`${URL}/user/${id}/friends`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    await checkApiStatus(respones);
  } catch (err) {
    return Promise.reject(err);
  }
  return response.json();
};

export const deleteFriend = async (id, friendId) => {
  const token = await getToken();
  try {
    const response = await fetch(`${URL}/user/${id}/friend/${friendId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    await checkApiStatus(respones);
  } catch (err) {
    return Promise.reject(err);
  }
};
