<script>
  export let user;
</script>

<a href={`/users/${user.id}`}>
  <div class="user-item bg-white p-4 border-b hover:bg-gray-200 grid grid-cols-1 gap-y-2">
    <div class="grid grid-cols-12">
      <div class="col-span-10 text-blue-500 font-medium">{user.email}</div>
      <div class="col-span-2 text-right">
        <div class="bg-blue-200 px-2 py-1 rounded-2xl text-xs text-blue-600 inline-block">{user.role}</div>
      </div>
    </div>
  </div>
</a>