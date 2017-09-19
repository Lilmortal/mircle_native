import { URL } from "../constants";
import { checkApiStatus, getToken } from "../libs";

export const addFeed = async (id, feed) => {
  const token = await getToken();
  let response;
  try {
    response = await fetch(`${URL}/user/${id}/feed`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
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
  const token = await getToken();
  let response;
  try {
    response = await fetch(`${URL}/user/${id}/feeds`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    await checkApiStatus(response);
  } catch (err) {
    return err;
  }
  return response.json();
};
