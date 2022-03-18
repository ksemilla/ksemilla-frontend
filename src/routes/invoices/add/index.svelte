<script>
  import { mutation } from '@urql/svelte';
  import { goto } from "$app/navigation"
  import Form from "../_components/Form.svelte"

  const mutateInvoice = mutation({
    query: `
    mutation createInvoice($dateCreated: Int!, $from: String!, $address: String!, $amount: Float!) {
      createInvoice(input: {dateCreated: $dateCreated, from: $from, address: $address, amount: $amount }) {
        id
        dateCreated
        from
        address
        amount
      }
    }
    `
  })

  const handleSubmit = (data) => {
    mutateInvoice({ ...data })
    .then(res=>{
      if (res.data) {
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

<div class="max-w-md m-auto my-8">
  <div class="flex justify-between items-end mb-4">
    <h1 class="text-3xl text-center">Add Invoice</h1>
    <a href="/invoices">
      Cancel
    </a>
  </div>
  
  <Form handleSubmit={handleSubmit} />
</div>