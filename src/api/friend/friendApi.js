import { URL, WEB_SOCKET_URL } from "../constants";
import { checkApiStatus, getToken } from "../libs";

export const connectToWebSocket = async id => {
  //const token = await getToken();
  let socket;
  try {
    socket = new WebSocket(WEB_SOCKET_URL);
    socket.addEventListener("open", event => {
      socket.send(`${id} connected to server.`);
    });

    socket.addEventListener("message", event => {
      console.log(event.data);
    });
  } catch (err) {
    return Promise.reject(err);
  }
  return socket;
};
