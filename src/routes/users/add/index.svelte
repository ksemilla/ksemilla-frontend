<script>
  import { mutation } from '@urql/svelte';
  import { goto } from "$app/navigation"
  import Form from "../_components/Form.svelte"

  const mutateUser = mutation({
    query: `
    mutation createUser($email: String!, $role: String!) {
      createUser(input: {email: $email, role: $role }) {
        id
        email
        role
      }
    }
    `
  })

  const handleSubmit = (data) => {
    console.log(data)
    mutateUser({ ...data })
    .then(res=>{
      if (res.data) {
        goto(`/users/${res.data.createUser.id}`)
      } else {
        console.log(res.error)
      }
    })
    .catch(res=>{
      console.log("[ERROR]", res)
    })
  }

</script>

<div class="max-w-md m-auto my-8">
  <div class="flex justify-between items-end mb-4">
    <h1 class="text-3xl text-center">Add User</h1>
    <a href="/users">
      Cancel
    </a>
  </div>
  
  <Form handleSubmit={handleSubmit} />
</div>