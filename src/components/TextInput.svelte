<script>
  let value;
  import { sender_msgs, receiver_msgs } from "../var_store";
  let add_to_group = (x) => {
    x.push(value);
    return x;
  };
</script>

<input type="text" bind:value />
<button
  on:click={(e) => {
    sender_msgs.update(add_to_group);
    receiver_msgs.update(add_to_group);
    value = "";
  }}>Send</button
>
