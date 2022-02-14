<script>
  export let text;
</script>

<div class={$$restProps.class}>{text}</div>

<style>
  div {
    width: 100px;
    /* margin: auto; */
    padding: 15px;
    background: #333;
  }
  /* div:after {
    content: "";
    display: inline-block;
    border-style: solid;
    border-width: 10px 10px 0;
    border-color: #333 transparent;
    position: absolute;
    bottom: -10px;
    left: 20px;
  } */
</style>
