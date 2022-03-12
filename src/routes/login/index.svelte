<script>
  import { browser } from "$app/env";
  import { goto } from "$app/navigation";
  import { isLogged } from "$lib/stores/auth"
  import LoginForm from "./LoginForm.svelte"

  $: {
    if ($isLogged && browser) {
      goto("/")
    }
  }

</script>

<div>
  <h1>Login</h1>
  <LoginForm />
</div>

<style>
  div {
    max-width: 300px;
    margin: auto;
    margin-top: 8rem;
  }

  div h1 {
    font-size: 2rem;
    text-align: center;
  }
</style>