/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { columns, getData } from "../services/InvoiceFetch.js";
import TextField from "@mui/material/TextField";
import ButtonsLeft from "./ButtonsLeft.jsx";
import ButtonsRight from "./ButtonsRight.jsx";
import "../styles/InvoiceData.css";
import { DataGrid } from "@mui/x-data-grid";

export default function InvoiceData() {
  const [data, setData] = useState([]);
  
  const [pageSize, setPageSize] = useState(10);
  const [checked, setChecked] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [invoice, setInvoice] = useState({
    sl_no: 0,
    business_code: "",
    cust_number: "",
    clear_date: "",
    buisness_year: "",
    doc_id: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
  });

  

  useEffect(() => {
    async function fetch() {
      setData(await getData());
    }
    if (searchText === "") fetch();
    else setData(data.filter((inv) => inv.cust_number.startsWith(searchText)));
  }, [searchText]);
  // console.log(data);

  useEffect(() => {
    if (checked.length === 1) {
      setInvoice(data.filter((inv) => inv.doc_id == checked[0])[0]);
    }
  }, [checked]);
 

  function handleChange(event) {
    const { name, value } = event.target;
    setInvoice((prev) => ({
      ...prev,
      sl_no: checked.length === 0 ? data[data.length - 1].sl_no + 1 : prev.sl_no,
      [name]: value,
    }));
  }

  function handleCheckbox(row) {
    setChecked(row);
  }

  function handlePageSizeChange(selected) {
    setPageSize(selected);
  }

  function handleSearchText(event) {
    setSearchText(event.target.value);
  }
  // console.log(searchText);
  // console.log(checked);
  // console.log(invoice);

  return (
    <div className="grid-container">
      <section className="header-second">
        <div className="btn-container">
          <ButtonsLeft
            invoice={invoice}
            invChecked={checked}
            advData={data}
            setAdvData={setData}
            handleChange={handleChange}
          />
          <TextField
            sx={{ bgcolor: "#fff", borderRadius: "4px", minWidth: "240px", margin: "15px 30px" }}
            id="outlined-basic"
            label="Search Customer Id"
            value={searchText}
            onChange={handleSearchText}
            variant="outlined"
          />
          <ButtonsRight invoice={invoice} handleChange={handleChange} invChecked={checked} />
        </div>
      </section>
      <DataGrid
        sx={{
          "*": { color: "#fff" },
          "& .MuiDataGrid-columnHeaderTitle": {
            width: "80px",
            fontSize: "1rem",
            // overflow: "visible",
            textOverflow: "visible",
            lineHeight: "1.43rem",
            whiteSpace: "break-spaces",
          },
        }}
        autoHeight={true}

        getRowId={(row) => row.doc_id}
        rows={data}
        headerHeight={90}
        rowHeight={40}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(row) => handleCheckbox(row)}
      />
    
    </div>
  );
}