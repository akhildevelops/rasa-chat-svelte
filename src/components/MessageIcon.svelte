<script>
  export let chat_icon, status;
  status = false;
</script>

<img
  class={$$restProps.class}
  src={chat_icon}
  alt="Chat Icon"
  on:click={(e) => (status = !status)}
/>

<style>
  img {
    width: 100px;
  }
</style>
