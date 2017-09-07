import { URL, getToken, populateQueryParam } from "../constants";
import { checkApiStatus } from "../checkApiStatus";

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
    return err;
  }
  return response.json();
};

export const updateUser = async user => {
  const token = await getToken();
  let response;
  try {
    response = await fetch(`${URL}/user`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(user)
    });
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

export const setUserProfileImage = async (id, profileImage = undefined) => {
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    const query = populateQueryParam(id);

    response = await fetch(`${URL}/user/profileimage${query}`, {
      method: "PATCH",
      body: formData
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeProfileImage = async id => {
  let response;
  const query = populateQueryParam(id);
  try {
    response = await fetch(`${URL}/user/profileimage${query}`, {
      method: "DELETE",
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
