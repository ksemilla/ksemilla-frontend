<script>
  import { operationStore, query } from '@urql/svelte';
  import { user } from "$lib/stores/auth"
  import { page } from "$app/stores"
  import Modal from "$lib/modal/index.svelte"

  let show = false
  const setShow = val => {
    show = val
  }

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

<div class="max-w-xl m-auto mt-8">
  <div class="flex justify-between">
    <a href={`/invoices`}>
      <h1 class="text-blue-500 text-3xl">Invoices</h1>
    </a>
    {#if $user.role === "owner"}
      <div class="flex gap-x-4">
        <a href={`/invoices/${$page.params.id}/edit`}>Edit</a>
        <div class="cursor-pointer hover:text-red-500" on:click={()=>{
          show = !show
        }}>Delete</div>
      </div>
    {/if}
  </div>
  
  <div>
    {#if $invoice_data.fetching}
    <p>Loading...</p>
  {:else if $invoice_data.error}
    <p>Oh no... {$invoice_data.error.message}</p>
  {:else}
    <div class="invoice-container">
      <div>
        <div class="data-container">
          <!-- <div>Object ID: {$invoice_data.data.getInvoice.id}</div> -->
          <div>Date: {$invoice_data.data.getInvoice.DateCreated}</div>
          <div>From: {$invoice_data.data.getInvoice.From}</div>
          <div>Address: {$invoice_data.data.getInvoice.Address}</div>
          <div>Amount: &#8369; {$invoice_data.data.getInvoice.Amount}</div>
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
      <h1 class="text-lg leading-6 font-medium text-gray-900">Delete tax invoice</h1>
      <p class="mt-2">Are you sure you want to delete this invoice?</p>
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