import { AsyncStorage } from "react-native";

//export const URL = "http://192.168.1.113:8080";
export const URL = "http://10.214.12.66:8080";
//export const URL = "";

export const getToken = async () => {
  const token = await AsyncStorage.getItem("token");
  return token;
};

export const populateQueryParam = id => {
  const query = Number.isInteger(id) ? `?id=${id}` : `?emailAddress=${id}`;
  return query;
};
