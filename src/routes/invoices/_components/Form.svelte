<script>
  import { mutation } from '@urql/svelte';
  import { goto } from "$app/navigation"

  export let initialData;
  let data = {}

  $: {
    if (initialData) {
      data = initialData
    }
    
  }

  const mutateInvoice = mutation({
    query: `
    mutation createInvoice($DateCreated: String!, $From: String!, $Address: String!, $Amount: Float!) {
      createInvoice(input: {DateCreated: $DateCreated, From: $From, Address: $Address, Amount: $Amount }) {
        id
        DateCreated
        From
        Address
        Amount
      }
    }
    `
  })

  const handleSubmit = () => {
    mutateInvoice({ ...data })
    .then(res=>{
      if (res.data) {
        console.log(res.data)
        goto(`/invoices/${res.data.createInvoice.id}`)
      } else {
        console.log(res.error)
      }
    })
    .catch(res=>{
      console.log("[ERROR]", res)
    })
  }

</script>

<form on:submit|preventDefault={handleSubmit} class="grid grid-cols-1 gap-y-4">
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