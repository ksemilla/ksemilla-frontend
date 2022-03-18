<script>
  import { OWNER, ACCT } from "$lib/config/const"
  export let initialData = {};
  export let handleSubmit;
  let data = {}

  $: {
    if (initialData) {
      data = initialData
    }
    
  }

  const onSubmit = () => {
    handleSubmit({...data})
  }

</script>

<form on:submit|preventDefault={onSubmit} class="grid grid-cols-1 gap-y-4">
  <div>
    <label for="email">Email</label>
    <input
      type="text"
      id="email"
      name="email"
      bind:value={data.email}
      required
    />
  </div>
  <div>
    <label for="role">Role</label>
    <select
      bind:value={data.role}
    >
      <option value={ACCT}>Acct</option>
      <option value={OWNER}>Owner</option>
    </select>
  </div>
  <button type="submit">Save</button>
</form>