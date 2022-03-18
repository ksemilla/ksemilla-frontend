<script>
  import { operationStore, query } from '@urql/svelte';
  import { mutation } from '@urql/svelte';
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"

  let data = {}

  const mutatePassword = mutation({
    query: `
    mutation changePassword($id: String!, $password: String!) {
      changePassword(input: {id: $id, password: $password }) 
    }
    `
  })

  const onSubmit = () => {
    mutatePassword({...data, id: $page.params.id})
    .then(res=>{
      if (res.data) {
        goto(`/users/${$page.params.id}`)
      } else {
        console.log(res.error)
      }
    })
    .catch(res=>{
      console.log("[ERROR]", res)
    })
  }

</script>

<div class="max-w-sm m-auto pt-8">
  <form on:submit|preventDefault={onSubmit} class="grid grid-cols-1 gap-y-4">
    <div>
      <label for="email">New Password</label>
      <input
        type="password"
        id="email"
        name="email"
        bind:value={data.password}
        required
      />
    </div>
    <button type="submit">Save</button>
  </form>
</div>