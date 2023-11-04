import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { addInvoice } from "../services/InvoiceFetch";

export default function Add(props) {
  // console.log(props.invoice);

  async function handleAdd(event) {
    event.preventDefault();
    let response = await addInvoice(props.invoice);
    if (response) {
      window.location.reload(false);
    }
    // console.log(props.invoice);
  }

  return (
    <div>
      <form id="add-form" onSubmit={handleAdd}>
        <Dialog fullWidth maxWidth={false} open={props.open.add} onClose={props.handleClose}>
          <DialogTitle
            style={{
              backgroundColor: "#3b4d5a",
              color: "#fff",
            }}
          >
            Add
          </DialogTitle>
          <DialogContent
            style={{
              backgroundColor: "#3b4d5a",
            }}
          >
            <Grid container spacing={2}>
              <Grid container item spacing={2} marginBottom={2}>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Business Code"
                    placeholder="Business Code"
                    name="business_code"
                    value={props.invoice.business_code}
                    onChange={props.handleChange}
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Customer Number"
                    placeholder="Customer Number"
                    name="cust_number"
                    value={props.invoice.cust_number}
                    onChange={props.handleChange}
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Clear Date"
                    name="clear_date"
                    value={props.invoice.clear_date}
                    onChange={props.handleChange}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Business Year"
                    placeholder="Business Year"
                    name="buisness_year"
                    value={props.invoice.buisness_year}
                    onChange={props.handleChange}
                    type="number"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2} marginBottom={2}>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Document Id"
                    placeholder="Document Id"
                    name="doc_id"
                    value={props.invoice.doc_id}
                    onChange={props.handleChange}
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Posting Date"
                    name="posting_date"
                    value={props.invoice.posting_date}
                    onChange={props.handleChange}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Document Create Date"
                    name="document_create_date"
                    value={props.invoice.document_create_date}
                    onChange={props.handleChange}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Due Date"
                    name="due_in_date"
                    value={props.invoice.due_in_date}
                    onChange={props.handleChange}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2} marginBottom={2}>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Invoice Currency"
                    placeholder="Invoice Currency"
                    name="invoice_currency"
                    value={props.invoice.invoice_currency}
                    onChange={props.handleChange}
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Document Type"
                    placeholder="Document Type"
                    name="document_type"
                    value={props.invoice.document_type}
                    onChange={props.handleChange}
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Posting Id"
                    placeholder="Posting Id"
                    name="posting_id"
                    value={props.invoice.posting_id}
                    onChange={props.handleChange}
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Total Open Amount"
                    placeholder="Total Open Amount"
                    name="total_open_amount"
                    value={props.invoice.total_open_amount}
                    onChange={props.handleChange}
                    type="number"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2} marginBottom={2}>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Baseline Create Date"
                    name="baseline_create_date"
                    value={props.invoice.baseline_create_date}
                    onChange={props.handleChange}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Customer Payment Terms"
                    placeholder="Customer Payment Terms"
                    name="cust_payment_terms"
                    value={props.invoice.cust_payment_terms}
                    onChange={props.handleChange}
                    text="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Invoice Id"
                    placeholder="Invoice Id"
                    name="invoice_id"
                    value={props.invoice.invoice_id}
                    onChange={props.handleChange}
                    type="number"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions
            style={{
              backgroundColor: "#3b4d5a",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs>
                <Button
                  style={{ color: "#fff", borderColor: "#fff" }}
                  fullWidth
                  variant="outlined"
                  type="submit"
                  form="add-form"
                  color="primary"
                >
                  ADD
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  style={{ color: "#fff", borderColor: "#fff" }}
                  fullWidth
                  variant="outlined"
                  onClick={props.handleClose}
                  color="primary"
                >
                  CANCEL
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}