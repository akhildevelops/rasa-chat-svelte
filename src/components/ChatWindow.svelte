<script>
  import { msgs } from "../var_store";
</script>

<div class="chat-window">
  {#each $msgs as msg}
    <div>{msg}</div>
  {/each}
</div>

<style>
  .chat-window {
    width: 500px;
    border: 1px solid #000;
  }
</style>
