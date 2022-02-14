<script>
  import { sender_msgs } from "../var_store";
  import { receiver_msgs } from "../var_store";
  import MessageBubble from "./MessageBubble.svelte";
  let all_msgs = [];
  // $: msgs = all_msgs;
  sender_msgs.subscribe((e) => {
    all_msgs.push({ from: "sender", msg: e.slice(-1)[0] });
    all_msgs = all_msgs;
  });
  receiver_msgs.subscribe((e) => {
    all_msgs.push({ from: "receiver", msg: e.slice(-1)[0] });
    all_msgs = all_msgs;
  });
</script>

<div class="chat-window">
  {#each all_msgs as msg}
    {#if msg.from == "sender"}
      <div align="right" style="color: red;">
        <div>sender</div>
        <MessageBubble text={msg.msg} class="sender" />
      </div>
    {:else}
      <div align="left" style="color: blue;">
        <div>receiver</div>
        <MessageBubble text={msg.msg} class="receiver" />
      </div>
    {/if}
  {/each}
</div>

<style>
  .chat-window {
    width: 500px;
    border: 1px solid #000;
  }
</style>
