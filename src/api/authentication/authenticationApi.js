export const login = async (emailAddress, password) => {
  let response;
  response = await fetch(`${URL}/login`, {
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

export const getToken = async () => {
  let response;
  response = await fetch(`${URL}/oauth/token_key`, {
    method: "GET"
  });
  await checkApiStatus(response);
  return response.json();
};
