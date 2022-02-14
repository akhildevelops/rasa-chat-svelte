import { receiver_msgs } from "../var_store";
import { io } from "socket.io-client";
const connection_url = "http://localhost:5005";

export const web_s = io(connection_url);

export const send = (text) => {
  console.log(`Sending Text: ${text}`);
  web_s.emit("user_uttered", { message: text }, (response) => {
    console.log(response);
    console.log(1234);
  });
};

web_s.on("bot_uttered", (event) => {
  console.log("ready");
  console.log(`Receiveing Text: ${event}`);
  receiver_msgs.update((x) => {
    x.push(event.text);
    return x;
  });
});

web_s.onAny((eventName, ...args) => {
  console.log(eventName);
  console.log(...args);
});
