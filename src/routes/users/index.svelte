<script>
  import { OWNER } from "$lib/config/const"
  import { user } from '$lib/stores/auth'
  import { operationStore, query } from '@urql/svelte'
  import UserInline from './_components/UserInline.svelte';

  const users_data = operationStore(`
    query users {
      getUsers {
        id
        email
        role
      }
    }`,
    { requestPolicy: 'network-only' }
  );

  function rawDataToUsers(users) {
    return users.data.getUsers
  }

  $: users = $users_data.data ? rawDataToUsers($users_data) : []

  query(users_data)

  function refresh() {
    users_data.reexecute({ requestPolicy: 'network-only' });
  }

  $: {
    refresh()
  }

</script>

<div class="max-w-3xl m-auto my-8">
  <div class="flex items-center justify-between">
    <h1 class="text-3xl font-medium text-blue-500 mb-4">Users</h1>
    {#if $user.role === OWNER}
      <a href={`/users/add`} class="text-blue-500">
        Add
      </a>
    {/if}
  </div>
  {#if $users_data.fetching}
    <p>Loading...</p>
  {:else if $users_data.error}
    <p style="color: red">{$users_data.error.message}</p>
  {:else}
    <div class="rounded-md overflow-hidden">
      {#each users as user (user.id)}
        <UserInline user={user}/>
      {/each}
    </div>
  {/if}
</div>