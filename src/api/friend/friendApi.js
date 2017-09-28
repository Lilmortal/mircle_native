import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

import { URL, WEB_SOCKET_URL } from "../constants";
import { checkApiStatus, getToken } from "../libs";

export const connectToWebSocket = () => {
  //const token = await getToken();
  let stompClient;
  try {
    const socket = new SockJS("http://192.168.1.113:8080");
    stompClient = Stomp.over(socket);

    stompClient.connect({}, frame => {
      stompClient.subscribe("/friend/request", messageOutput => {
        console.log(JSON.parse(messageOutput.body));
      });
    });
  } catch (err) {
    return Promise.reject(err);
  }
  return stompClient;
};

export const sendAFriendRequest = async (
  stompClient,
  id,
  friendId,
  firstName,
  surname
) => {
  return stompClient.send(
    "/friend/connect",
    {},
    JSON.stringify({ id, friendId, firstName, surname })
  );
};
