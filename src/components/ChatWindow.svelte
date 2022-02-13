<script>
  import { sender_msgs } from "../var_store";
  import { receiver_msgs } from "../var_store";
  let var_sender_msgs = [];
  let var_receiver_msgs = [];
  sender_msgs.subscribe((e) => {
    var_sender_msgs = e;
    // console.log(var_sender_msgs);
  });
  receiver_msgs.subscribe((e) => {
    var_receiver_msgs = e;
  });
  $: messages = var_sender_msgs.map((e, i) => {
    return [e, var_receiver_msgs[i]];
  });
</script>

<div class="chat-window">
  {#each messages as msg}
    <div>Sender: {msg[0]}</div>
    <div>Receiver: {msg[1]}</div>
  {/each}
</div>

<style>
  .chat-window {
    width: 500px;
    border: 1px solid #000;
  }
</style>
