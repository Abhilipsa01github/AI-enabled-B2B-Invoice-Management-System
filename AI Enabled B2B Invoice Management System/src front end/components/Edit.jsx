import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { editInvoice } from "../services/InvoiceFetch";

export default function Edit(props) {
  async function handleEdit(event) {
    event.preventDefault();
    let response = await editInvoice(props.invoice);
    if (response) {
      window.location.reload(false);
    }
  }

  return (
    <div>
      <form id="edit-form" onSubmit={handleEdit}>
        <Dialog open={props.open.edit} onClose={props.handleClose}>
          <DialogTitle
            style={{
              backgroundColor: "#3b4d5a",
              color: "#fff",
            }}
          >
            Edit
          </DialogTitle>
          <DialogContent
            style={{
              backgroundColor: "#3b4d5a",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  fullWidth
                  sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                  id="outlined-basic"
                  label="Invoice Currency"
                  name="invoice_currency"
                  value={props.invoice.invoice_currency}
                  type="select"
                  onChange={props.handleChange}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                  id="outlined-basic"
                  label="Customer Payment Terms"
                  name="cust_payment_terms"
                  value={props.invoice.cust_payment_terms}
                  type="text"
                  onChange={props.handleChange}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
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
                  fullWidth
                  style={{ color: "#fff", borderColor: "#fff" }}
                  type="submit"
                  variant="outlined"
                  form="edit-form"
                  color="primary"
                >
                  EDIT
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  fullWidth
                  style={{ color: "#fff", borderColor: "#fff" }}
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