<script>
  import { operationStore, query } from '@urql/svelte';
  import { user } from "$lib/stores/auth"
  import { page } from "$app/stores"
  import Modal from "$lib/modal/index.svelte"

  let show = false
  const setShow = val => {
    show = val
  }

  const user_data = operationStore(`
    query getUser($id: String!) {
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

</script>

<div class="max-w-xl m-auto mt-8">
  <div class="flex justify-between">
    <a href={`/users`}>
      <h1 class="text-blue-500 text-3xl">Users</h1>
    </a>
    {#if $user.role === "owner"}
      <div class="flex gap-x-4">
        <a href={`/users/${$page.params.id}/edit`}>Edit</a>
        <a href={`/users/${$page.params.id}/change-password`}>Change Password</a>
        <div class="cursor-pointer hover:text-red-500" on:click={()=>{
          show = !show
        }}>Delete</div>
      </div>
    {/if}
  </div>
  
  <div>
    {#if $user_data.fetching}
    <p>Loading...</p>
  {:else if $user_data.error}
    <p>Oh no... {$user_data.error.message}</p>
  {:else}
    <div class="user-container">
      <div>
        <div class="data-container">
          <div>ID: {$user_data.data.getUser.id}</div>
          <div>Email: {$user_data.data.getUser.email}</div>
          <div>Role: {$user_data.data.getUser.role}</div>
        </div>
      </div>
    </div>
  {/if}
  </div>
</div>

<Modal show={show} setShow={setShow} >
  <div class="p-4 flex gap-x-4">
    <div class="w-12 h-12 flex justify-center items-center">
      <i class="fa fa-exclamation-triangle text-red-600 text-2xl" aria-hidden="true" />
    </div>
    <div class="flex-1">
      <h1 class="text-lg leading-6 font-medium text-gray-900">Delete user</h1>
      <p class="mt-2">Are you sure you want to delete this user?</p>
      <div class="text-right mt-4">
        <button class="bg-white border text-gray-500 hover:bg-gray-500 hover:text-white" on:click={()=>setShow(false)}>Cancel</button>
        <button class="bg-red-700 text-white hover:bg-red-600">Delete</button>
      </div>
    </div>
  </div>
</Modal>

<style>
  .data-container {
    text-align: left;
  }
</style>