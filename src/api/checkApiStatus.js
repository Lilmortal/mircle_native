export const checkApiStatus = async response => {
  if (response.status >= 400 && response.status < 600) {
    const responseError = await response.json();
    return Promise.reject(
      `HTTP ${responseError.status} ${responseError.error}.\n 
      ${responseError.exception}.\n 
      ${responseError.message}.\n 
      This function is called by ${checkApiStatus.caller}`
    );
  }
  return response;
};
