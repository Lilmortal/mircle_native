import { URL } from "../constants";
import { checkApiStatus } from "../checkApiStatus";

export const addFeed = async feed => {
  let response;
  try {
    response = await fetch(`${URL}/feeds`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(feed)
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
  return response.json();
};

export const getFeeds = async id => {
  let response;
  try {
    response = await fetch(`${URL}/feeds/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
  return response.json();
};
