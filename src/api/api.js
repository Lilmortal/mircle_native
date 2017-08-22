const URL = "http://192.168.1.115:8080";

export const getDefaultProfileImage = () => {
  return fetch(`${URL}/profileimage/default`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const uploadProfileImage = (profileImage, id) => {
  console.log(profileImage, id);
  return fetch(`${URL}/profileimage/upload`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: {
      profileImage: JSON.stringify(profileImage),
      id
    }
  });
};

export const registerUser = user => {
  console.log(JSON.stringify(user));
  return fetch(`${URL}/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
};
