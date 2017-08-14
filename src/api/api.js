export const registerUser = user => {
  return fetch("http://10.214.12.66:8080/user/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      console.log(response);
      return Promise.resolve(response);
    })
    .catch(exception => {
      console.error(exception);
      return Promise.reject(exception);
    });
};
