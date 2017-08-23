import { URL } from "../constants";

export const registerUser = async user => {
  const response = await fetch(`${URL}/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
  return response.json();
};
