import { URL, GET_TOKEN } from "../constants";
import { checkApiStatus } from "../checkApiStatus";

export const setUserImage = async (emailAddress, profileImage = null) => {
  let response;
  try {
    const formData = new FormData();
    formData.append("profileImage", profileImage);

    response = await fetch(`${URL}/email/${emailAddress}`, {
      method: "POST",
      body: formData
    });
    await checkApiStatus(response);
  } catch (err) {
    return Promise.reject(err);
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

export const getUserByEmailAddress = async emailAddress => {
  const token = await GET_TOKEN();
  let response;
  try {
    response = await fetch(
      `${URL}/user/email/${encodeURIComponent(emailAddress)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token
        }
      }
    );
    console.log(encodeURIComponent(emailAddress), token);
    //console.log(response);
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
