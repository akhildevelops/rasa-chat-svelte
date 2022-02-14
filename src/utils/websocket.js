import { receiver_msgs } from "../var_store";

const connection_url = "ws://localhost:10000";

const web_s = new WebSocket(connection_url);

export const send = (text) => {
  console.log(`Sending Text: ${text}`);
  web_s.send(text);
};

web_s.onopen = (event) => {
  console.log("Connected");
};

web_s.onmessage = (event) => {
  receiver_msgs.update((x) => {
    console.log(`Receiveing Text: ${event.data}`);

    x.push(event.data);
    return x;
  });
};
