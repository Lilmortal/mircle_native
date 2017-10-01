import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

import { URL, WEB_SOCKET_URL } from "../constants";
import { checkApiStatus, getToken } from "../libs";

// export const connectToWebSocket = async () => {
//   const ws = new WebSocket("ws://192.168.1.113:8080");
//   ws.onmessage = data => {
//     console.log(data.data);
//   };
//   ws.onopen = () => {
//     ws.send("GG");
//   };
//   ws.onerror = error => {
//     console.log(error);
//   };

//   return ws;
// };

// export const sendAFriendRequest = async (
//   webSocket,
//   id,
//   friendId,
//   firstName,
//   surname
// ) => {
//   webSocket.send("Lol");
// };
