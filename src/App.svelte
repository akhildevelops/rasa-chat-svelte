<script>
  export let name;
  import MessageIcon from "./components/MessageIcon.svelte";
  import ChatWindow from "./components/ChatWindow.svelte";

  let clicked;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
<div class="chat">
  <ChatWindow show={clicked} />

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
