<script>
  export let name;
  import MessageIcon from "./components/MessageIcon.svelte";
  import ChatWindow from "./components/ChatWindow.svelte";
  import { web_s } from "./utils/websocket";
  let conn_err = false;
  let ws_url = "";
  web_s.on("connect", (event) => {
    console.log("Socket connected:" + web_s.connected);
    conn_err = false;
  });
  web_s.on("connect_error", (e) => {
    conn_err = true;
    console.error(e);
    ws_url = e.name;
  });
  let clicked;
  $: chat_visibility = clicked ? "visible" : "hidden";
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
{#if conn_err}
  <div>Cannot connect to websocket ==> {ws_url}</div>
{/if}
<div class="chat" style="--chat-visibility: {chat_visibility}">
  <div class="chat-inner">
    <ChatWindow />
  </div>
  <MessageIcon
    class="chat-icon"
    chat_icon="assets/chat-icon.png"
    bind:status={clicked}
  />
</div>

<style>
  .chat {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
  .chat-inner {
    visibility: var(--chat-visibility);
  }
  :global(.chat-icon) {
    height: 100px;
    margin-left: 400px;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
