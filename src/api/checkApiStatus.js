export const checkApiStatus = async response => {
  if (response.status >= 400 && response.status < 600) {
    const responseError = await response.json();
    throw new Error(
      " HTTP " +
        responseError.status +
        " " +
        responseError.error +
        ".\n" +
        responseError.exception +
        "\n" +
        responseError.message
    );
  }
  return Promise.resolve(response);
};
