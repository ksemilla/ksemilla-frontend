<script>
  import { operationStore, query } from '@urql/svelte';
  import { mutation } from '@urql/svelte';
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import Form from "../../_components/Form.svelte"

  const user_data = operationStore(`
    query singleInvoice($id: String!) {
      getUser(id: $id) {
        id
        email
        role
      }
    }`,
    { id: $page.params.id },
    { requestPolicy: 'network-only' }
  );

  query(user_data)

  const mutateUser = mutation({
    query: `
    mutation updateUser($id: String!, $role: String!, $email: String!) {
      updateUser(input: {id: $id, email: $email, role: $role }) {
        id
        email
        role
      }
    }
    `
  })
  
  const handleSubmit = data => {
    mutateUser({ ...data })
    .then(res=>{
      if (res.data) {
        console.log(res.data)
        goto(`/users/${res.data.updateUser.id}`)
      } else {
        console.log(res.error)
      }
    })
    .catch(res=>{
      console.log("[ERROR]", res)
    })
  }


</script>

<div class="container">
  <div class="header">
    <h3>Edit invoice {$page.params.id}</h3>
    <a href="/users">Cancel</a>
  </div>
  {#if $user_data.fetching}
    <p>Loading...</p>
  {:else if $user_data.error}
    <p>Oh no... {$user_data.error.message}</p>
  {:else}
    <Form initialData={$user_data.data.getUser} handleSubmit={handleSubmit} />
  {/if}
</div>

<style>
  .container {
    max-width: 600px;
    margin: auto;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>