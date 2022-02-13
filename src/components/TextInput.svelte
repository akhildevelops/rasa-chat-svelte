<script>
  let value;
  import { msgs } from "../var_store";
</script>

<input type="text" bind:value />
<button
  on:click={(e) => {
    msgs.update((x) => {
      x.push(value);
      return x;
    });
    value = "";
  }}>Send</button
>
