import { AsyncStorage } from "react-native";

export const getToken = async () => {
  const token = await AsyncStorage.getItem("token");
  return token;
};

export const checkApiStatus = async response => {
  if (!response.ok) {
    let data;
    const responseText = await response.text();
    try {
      data = JSON.parse(responseText);
    } catch (err) {
      // Normally when it gets to here, it means it is not a valid JSON, meaning the response comes back in text.
      return Promise.reject(`HTTP ${response.status}
        ${responseText}
      `);
    }
    return Promise.reject(`HTTP ${data.status} ${data.error}
      ${data.message}
      `);
  }
};
