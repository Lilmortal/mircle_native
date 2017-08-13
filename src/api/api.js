export const registerUser = user => {
  fetch("http://192.168.1.115:8080/user/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      console.log(response);
      return new Promise(resolve => resolve(response));
    })
    .catch(exception => console.error(exception));
};
