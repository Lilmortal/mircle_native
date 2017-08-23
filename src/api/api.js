const URL = "http://10.214.12.66:8080";

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
  const formData = new FormData();
  formData.append("file", profileImage);

  console.log(formData);
  return fetch(`${URL}/profileimage/upload`, {
    method: "POST",
    body: formData
  });
};

export const registerUser = user => {
  return fetch(`${URL}/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
};
