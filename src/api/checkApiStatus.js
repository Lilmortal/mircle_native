export const checkApiStatus = async response => {
  if (!response.ok) {
    let caller;
    if (checkApiStatus.caller) {
      caller = `This function is called by ${checkApiStatus.caller}.`;
    } else {
      caller = `Could not find this function caller.`;
    }
    const json = await response.json();
    console.log(response, json);
    return Promise.reject(
      `HTTP ${response.status}.
      ${json.errorMessage}
      ${caller}`
    );
  }
  return response;
};
