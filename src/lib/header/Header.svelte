<script>
  import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte'
  import { clickOutside } from "$lib/clickOutside"
  import Dropdown from "./Dropdown.svelte"
  import UkraineFlag from "./ukrainef.svelte"
  

  let show = false

</script>

<header>
	<div>
		<a href="/" class="logo">
			<svelte:component this={UkraineFlag} />
		</a>
	</div>


	<div>
		<div class="menu-button" on:click={()=>{show = !show}} use:clickOutside on:click_outside={()=>{show = false}}>
      <IoIosMenu />
      {#if show}
        <Dropdown />
      {/if}
    </div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
    align-items: center;
    background-color: #2c2c2c;
    color: #f7f5e8;
    height: 50px;
    padding: 15px;
	}

  .logo {
    color: #f7f5e8;
  }

  .menu-button {
    height: 1.7rem;
    width: 1.7rem;
    position: relative;
    border: 1px solid rgb(29, 29, 29);
    border-radius: 3px;
    background: #484848;
    padding: 2px 4px;
    color: #f7f5e8;
    cursor: pointer;
  }

  .menu-button:hover {
    background-color: #6b6161;
  }

</style>
