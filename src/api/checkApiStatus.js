export const checkApiStatus = response => {
  if (response.status >= 400 && response.status < 600) {
    throw new Error("Bad response from server. HTTP " + response.status);
  }
  return Promise.resolve(response);
};
