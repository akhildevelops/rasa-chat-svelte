<script>
  let value;
  import { msgs } from "../var_store";
</script>

<input type="text" bind:value />
<button
  on:click={(e) => {
    // console.log(value);
    msgs.update((x) => {
      x.push(value);
      return x;
    });
  }}>Send</button
>
