import { URL } from "../constants";
import { checkApiStatus } from "../checkApiStatus";

export const registerUser = async user => {
  const response = await fetch(`${URL}/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
  await checkApiStatus(response);
  return response.json();
};

export const getUserById = async id => {
  const response = await fetch(`${URL}/user/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  await checkApiStatus(response);
  return response.json();
};

export const getUserByEmailAddress = async (emailAddress, password) => {
  const response = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ emailAddress, password })
  });
  await checkApiStatus(response);
  return response.json();
};

export const addFriend = async (id, friendId) => {
  const response = await fetch(`${URL}/user/${id}/friend/${friendId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  await checkApiStatus(response);
  return response.json();
};

export const getListOfFriends = async id => {
  const response = await fetch(`${URL}/user/${id}/friends`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  await checkApiStatus(respones);
  return response.json();
};

export const deleteFriend = async (id, friendId) => {
  const response = await fetch(`${URL}/user/${id}/friend/${friendId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  await checkApiStatus(respones);
  return response.json();
};
