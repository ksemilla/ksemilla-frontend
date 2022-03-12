<script>
  export let invoice;

  const monthMap = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  }

  let tag;
  let invoiceYear;
  let prettyDate;

  if (invoice) {
    let [year, month, day] = invoice.DateCreated.split("-", 3)

    invoiceYear = year
    prettyDate = `${monthMap[month]} ${day}, ${year}`

   let month_int = parseInt(month)

    if (month_int <= 3) {
      tag = "Q1"
    } else if (month_int <= 6) {
      tag = "Q2"
    } else if (month_int <= 9) {
      tag = "Q3"
    } else if (month_int <= 12) {
      tag = "Q4"
    }
  }

</script>

<a href={`/invoices/${invoice.id}`}>
  <div class="invoice-item bg-white p-4 border-b hover:bg-gray-200 grid grid-cols-1 gap-y-2">
    <div class="grid grid-cols-12">
      <div class="col-span-10 text-blue-500 font-medium">{prettyDate}</div>
      <div class="col-span-2 text-right">
        <div class="bg-blue-200 px-2 py-1 rounded-2xl text-xs text-blue-600 inline-block">{invoiceYear} {tag}</div>
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-10">{invoice.From}</div>
      <div class="col-span-2 text-right">&#8369; {invoice.Amount}</div>
    </div>
  </div>
</a>