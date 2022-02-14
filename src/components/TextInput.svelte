<script>
  let value;
  export let show;
  import { send } from "../utils/websocket";
  import { sender_msgs, receiver_msgs } from "../var_store";
  let add_to_group = (x) => {
    send(value);
    x.push(value);
    return x;
  };
</script>

<div style="visibility: {show ? 'visible' : 'hidden'};">
  <input type="text" bind:value />
  <button
    on:click={(e) => {
      sender_msgs.update(add_to_group);
      value = "";
    }}>Send</button
  >
</div>
