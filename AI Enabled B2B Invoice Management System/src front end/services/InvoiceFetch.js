import axios from "axios";

export const columns = [
  { field: "sl_no", headerName: "Sl no", width: 90, align: "center" },
  { field: "business_code", headerName: "Business Code", width: 135, align: "center" },
  { field: "cust_number", headerName: "Customer Number", width: 135, align: "center" },
  { field: "clear_date", headerName: "Clear Date", width: 135, align: "center" },
  { field: "buisness_year", headerName: "Business Year", width: 135, align: "center" },
  { field: "doc_id", headerName: "Document Id", width: 135, align: "center" },
  { field: "posting_date", headerName: "Posting Date", width: 135, align: "center" },
  { field: "document_create_date", headerName: "Document Create Date", width: 135, align: "center" },
  { field: "due_in_date", headerName: "Due Date", width: 135, align: "center" },
  { field: "invoice_currency", headerName: "Invoice Currency", width: 135, align: "center" },
  { field: "document_type", headerName: "Document Type", width: 135, align: "center" },
  { field: "posting_id", headerName: "Posting Id", width: 135, align: "center" },
  { field: "total_open_amount", headerName: "Total Open Amount", width: 135, align: "center" },
  { field: "baseline_create_date", headerName: "Baseline Create Date", width: 135, align: "center" },
  { field: "cust_payment_terms", headerName: "Customer Payment Terms", width: 135, align: "center" },
  { field: "invoice_id", headerName: "Invoice Id", width: 135, align: "center" },
  { field: "aging_bucket", headerName: "Aging Bucket", width: 135, align: "center" },
];

export const getData = async () => {
  let response = await axios
    .get("http://localhost:8080/hrc_backend/ReadServlet", {
      header: { "Access-Control-Allow-Origin": "*" },
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(response.data);
  return response.data;
};

export const addInvoice = async (invoice) => {
  const data =
    "sl_no=" +
    invoice.sl_no +
    "&business_code=" +
    invoice.business_code +
    "&cust_number=" +
    invoice.cust_number +
    "&clear_date=" +
    invoice.clear_date +
    "&buisness_year=" +
    invoice.buisness_year +
    "&doc_id=" +
    invoice.doc_id +
    "&posting_date=" +
    invoice.posting_date +
    "&document_create_date=" +
    invoice.document_create_date +
    "&due_in_date=" +
    invoice.due_in_date +
    "&invoice_currency=" +
    invoice.invoice_currency +
    "&document_type=" +
    invoice.document_type +
    "&posting_id=" +
    invoice.posting_id +
    "&total_open_amount=" +
    invoice.total_open_amount +
    "&baseline_create_date=" +
    invoice.baseline_create_date +
    "&cust_payment_terms=" +
    invoice.cust_payment_terms +
    "&invoice_id=" +
    invoice.invoice_id;
  // console.log(data);

  let response = await axios
    .get("http://localhost:8080/hrc_backend/AddServlet?" + data, {
      header: { "Access-Control-Allow-Origin": "*" },
    })
    .catch((err) => {
      console.log(err);
    });
  return response.data;
};

export const editInvoice = async (invoice) => {
  const data =
    "invoice_currency=" +
    invoice.invoice_currency +
    "&cust_payment_terms=" +
    invoice.cust_payment_terms +
    "&sl_no=" +
    invoice.sl_no;

  let response = await axios
    .get("http://localhost:8080/hrc_backend/EditServlet?" + data, {
      header: { "Access-Control-Allow-Origin": "*" },
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(response.data);
  return response.data;
};

export const deleteInvoice = async (invoice) => {
  const data = "invoiceToDelete=" + invoice.join(",");
  // console.log(data);

  let response = await axios
    .get("http://localhost:8080/hrc_backend/DeleteServlet?" + data, {
      header: { "Access-Control-Allow-Origin": "*" },
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(response.data);
  return response.data;
};

export const predictInvoice = async (doc_ids) => {
  const data = doc_ids;
  console.log(data);
  let response = await axios.post("http://localhost:5000/get_prediction", { data: data }).catch((err) => {
    console.log("test");
    console.log(err);
  });

  let resData = "";
  if (response) {
    if (response.data.length > 0)
      resData = "aging_bucket=" + response.data[0].aging_bucket + "&doc_id=" + response.data[0].doc_id;
    else resData = "aging_bucket=NA&doc_id=" + doc_ids;

    let servletRes = await axios.get("http://localhost:8080/hrc_backend/PredictServlet?" + resData, {
      header: { "Access-Control-Allow-Origin": "*" },
    });
console.log(resData);
    return servletRes.data;
  }
};
export const analyticsInvoice = async (analyticsData) => {
  const data =
    "clear_start=" +
    analyticsData.clear_start +
    "&clear_end=" +
    analyticsData.clear_end +
    "&due_start=" +
    analyticsData.due_start +
    "&due_end=" +
    analyticsData.due_end +
    "&baseline_start=" +
    analyticsData.baseline_start +
    "&baseline_end=" +
    analyticsData.baseline_end +
    "&invoice_currency=" +
    analyticsData.invoice_currency;
  // console.log(data);

  let response = await axios
    .get("http://localhost:8080/hrc_backend/AnalyticsServlet?" + data, {
      header: { "Access-Control-Allow-Origin": "*" },
    })
    .catch((err) => {
      console.log(err);
    });

  return response.data;
};