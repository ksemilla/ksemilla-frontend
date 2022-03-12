<script>
  import { operationStore, query } from '@urql/svelte';
  import { page } from "$app/stores"
  import Form from "../../_components/Form.svelte"

  const invoice_data = operationStore(`
    query singleInvoice($id: String!) {
      getInvoice(id: $id) {
        id
        From
        DateCreated
        Address
        Amount
      }
    }`,
    { id: $page.params.id },
    { requestPolicy: 'network-only' }
  );

  query(invoice_data)

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
    <Form initialData={$invoice_data.data.getInvoice} />
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