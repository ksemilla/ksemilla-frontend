<script>
  export let show = false;
  export let setShow;

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
</script>

<div
  class={classNames(
    "absolute bg-gray-800 inset-0 bg-opacity-75 transition-opacity flex justify-center items-center",
    show ? "block" : "hidden"
  )}
  on:click={()=>setShow(false)}
>
  <div class="bg-white rounded-md m-4" on:click|stopPropagation>
    <slot />
  </div>
</div>