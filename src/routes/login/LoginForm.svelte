<script>
  import { mutation } from '@urql/svelte';
  import { isLogged, user } from "$lib/stores/auth"

  let data = {
    email: "",
    password: ""
  }

  const mutateLogin = mutation({
    query: `
      mutation login($email: String!, $password: String!) {
        login(input: {email: $email, password: $password}) {
          user {
            id
            email
            role
          }
          token
        }
      }
    `
  })

  const handleSubmit = () => {
    mutateLogin({ email: data.email, password: data.password })
    .then(res=>{
      if (res.data) {
        localStorage.setItem("token", res.data.login.token)
        isLogged.update(()=>true)
        user.update(()=>res.data.login.user)
      } else {
        console.log(res.error.message)
      }
    })
    .catch(res=>{
      console.log("[ERROR]", res)
    })
  }

</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="mb-4">
    <label for="email">Email</label>
    <input
      id="email"
      name="email"
      type="text"
      bind:value={data.email}
    />
  </div>

  <div>
    <label for="password">Password</label>
    <input
      id="password"
      name="password"
      type="password"
      bind:value={data.password}
    />
  </div>
  <br />
  <div class="text-center">
    <button type="submit">Submit</button>
  </div>
  
</form>

<style>
  form {
    text-align: left;
  }

  form div {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 5px;
  }

</style>