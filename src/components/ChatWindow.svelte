<script>
  import { sender_msgs, receiver_msgs } from "../var_store";
  import MessageBubble from "./MessageBubble.svelte";
  import TextInput from "./TextInput.svelte";
  let chat_window;
  let message;
  let all_msgs = [];
  // $: msgs = all_msgs;
  sender_msgs.subscribe((e) => {
    all_msgs.push({ from: "sender", msg: e.slice(-1)[0] });
    all_msgs = all_msgs;
  });
  receiver_msgs.subscribe((e) => {
    all_msgs.push({ from: "receiver", msg: e.slice(-1)[0] });
    console.log(all_msgs);
    all_msgs = all_msgs;
  });
  $: all_msgs,
    (() => {
      if (chat_window != undefined) {
        chat_window.scrollTop = chat_window.scrollHeight + message.offsetHeight;
      }
    })();
</script>

<div class="chat-window-input">
  <div class="chat-window" bind:this={chat_window}>
    {#each all_msgs as msg (msg)}
      <div bind:this={message} align={msg.from == "sender" ? "right" : "left"}>
        <div>{msg.from}</div>
        <MessageBubble text={msg.msg} class={msg.from} />
      </div>
    {/each}
  </div>
  <TextInput />
</div>

<style>
  .chat-window {
    width: 500px;
    border: 1px solid #000;
    overflow-y: scroll;
    height: 300px;
  }
  :global(.sender) {
    background: aqua;
  }
  :global(.receiver) {
    background: goldenrod;
  }
</style>
