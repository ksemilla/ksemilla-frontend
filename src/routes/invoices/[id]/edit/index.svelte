<script>
  import { operationStore, query } from '@urql/svelte';
  import { mutation } from '@urql/svelte';
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import Form from "../../_components/Form.svelte"

  const invoice_data = operationStore(`
    query singleInvoice($id: String!) {
      getInvoice(id: $id) {
        id
        from
        dateCreated
        address
        amount
      }
    }`,
    { id: $page.params.id },
    { requestPolicy: 'network-only' }
  );

  query(invoice_data)

  const mutateInvoice = mutation({
    query: `
    mutation updateInvoice($id: String!, $dateCreated: Int!, $from: String!, $address: String!, $amount: Float!) {
      updateInvoice(input: {id: $id, DateCreated: $dateCreated, From: $from, Address: $address, Amount: $amount }) {
        id
        dateCreated
        from
        address
        amount
      }
    }
    `
  })
  
  const handleSubmit = data => {
    mutateInvoice({ ...data })
    .then(res=>{
      if (res.data) {
        goto(`/invoices/${res.data.updateInvoice.id}`)
      } else {
        console.log(res.error)
      }
    })
    .catch(res=>{
      console.log("[ERROR]", res)
    })
  }


</script>

<div class="container">
  <div class="header">
    <h3>Edit invoice {$page.params.id}</h3>
    <a href="/invoices">Cancel</a>
  </div>
  {#if $invoice_data.fetching}
    <p>Loading...</p>
  {:else if $invoice_data.error}
    <p>Oh no... {$invoice_data.error.message}</p>
  {:else}
    <Form initialData={$invoice_data.data.getInvoice} handleSubmit={handleSubmit} />
  {/if}
</div>

<style>
  .container {
    max-width: 600px;
    margin: auto;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>