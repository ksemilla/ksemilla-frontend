<script>

  import { isLogged, logUserOut } from "$lib/stores/auth"

  const onLogout = () => {
    logUserOut()
  }

  const items = [
    {
      label: "Experience",
      path: "/experience",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Skills",
      path: "/skills",
    },
  ]
</script>

<div class="dropdown">
  {#each items as item}
    <a href={item.path} class="item">{item.label}</a>
  {/each}
  {#if $isLogged}
    <a href="/invoices" class="item">Invoices</a>
    <hr />
    <div class="item" on:click={()=>onLogout()}>Logout</div>
  {/if}
  {#if !($isLogged)}
    <hr />
    <a href="/login" class="item">Login</a>
  {/if}
</div>

<style>
  .dropdown {
    background: white;
    position: absolute;
    top: 35px;
    right: 0px;
    border: 1px solid rgba(0,0,0,0.14);
    border-radius: 3px;
    box-shadow: 0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000,0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);
    z-index: 10;
    animation-name: onShow;
    animation-duration: 0.2s;
  }

  .item {
    display: block;
    padding: 5px 10px;
    color: black;
  }

  .item:hover {
    background-color: rgb(184, 184, 184);
  }

  @keyframes onShow {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>