<script>
  import { page } from "$app/stores"
  import { user } from '$lib/stores/auth'
  import { operationStore, query } from '@urql/svelte'
  import InvoiceInline from "./_components/InvoiceInline.svelte"

  let pageNumber = 1

  $: {
    const queryPage = $page.url.searchParams.get("page")
    if (queryPage) {
      pageNumber = queryPage
    }
  }

  const invoices_data = operationStore(`
    query paginatedInvoice($page: Int!) {
      getInvoices(page: $page) {
        data {
          id
          from
          dateCreated
          address
          amount
        }
        total
      }
    }`,
    { pageNumber },
    { requestPolicy: 'network-only' }
  );

  function rawDataToInvoices(invoices) {
    return invoices.data.getInvoices.data
  }

  $: invoices = $invoices_data.data ? rawDataToInvoices($invoices_data) : []
  $: total = $invoices_data.data ? $invoices_data.data.getInvoices.total : 0

  query(invoices_data)

  function refresh(pageNumber) {
    invoices_data.variables.page = pageNumber
    invoices_data.reexecute({ requestPolicy: 'network-only' });
  }

  $: {
    refresh(pageNumber)
  }

</script>

<div class="max-w-3xl m-auto my-8">
  <div class="flex items-center justify-between">
    <h1 class="text-3xl font-medium text-blue-500 mb-4">Invoices</h1>
    {#if $user.role === "OWNER"}
      <a href={`/invoices/add`} class="text-blue-500">
        Add
      </a>
    {/if}
  </div>
  {#if $invoices_data.fetching}
    <p>Loading...</p>
  {:else if $invoices_data.error}
    <p style="color: red">{$invoices_data.error.message}</p>
  {:else}
    <div class="rounded-md overflow-hidden">
      {#each invoices as invoice (invoice.id)}
        <InvoiceInline invoice={invoice}/>
      {/each}
    </div>
    <div class="flex justify-center p-4 gap-x-4">
      {#if parseInt(pageNumber) >= 2}
      <a href={`/invoices?page=${parseInt(pageNumber)-1}`}>
        <div class="text-blue-500">Previous</div>
      </a>
      {:else}
      <div>Previous</div>
      {/if}
      {#if parseInt(pageNumber) * 5 < total}
      <a href={`/invoices?page=${parseInt(pageNumber)+1}`} class="text-blue-500">
        Next
      </a>
      {:else}
      <div>Next</div>
      {/if}
    </div>
  {/if}
</div>