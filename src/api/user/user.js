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

export const getUserById = async (id, password) => {
  const response = await fetch(`${URL}/user?id=${id}&password=${password}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  await checkApiStatus(response);
  return response.json();
};

export const getUserByEmailAddress = async (emailAddress, password) => {
  const response = await fetch(
    `${URL}/user?emailAddress=${emailAddress}&password=${password}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  );
  await checkApiStatus(response);
  return response.json();
};
