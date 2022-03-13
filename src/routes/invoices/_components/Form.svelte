<script>
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
    <label for="from">Client</label>
    <input
      type="text"
      id="from"
      name="from"
      bind:value={data.From}
      required
    />
  </div>
  <div>
    <label for="address">Address</label>
    <input
      type="text"
      id="address"
      name="address"
      bind:value={data.Address}
      required
    />
  </div>
  <div>
    <label for="date">Date</label>
    <input
      type="date"
      id="date"
      name="date"
      bind:value={data.DateCreated}
      required
    />
  </div>
  <div>
    <label for="amount">Amount</label>
    <input
      type="number"
      id="amount"
      name="amount"
      min={0}
      step="0.01"
      bind:value={data.Amount}
      required
    />
  </div>
  <button type="submit">Save</button>
</form>