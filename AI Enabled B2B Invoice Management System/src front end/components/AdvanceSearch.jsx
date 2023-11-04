/* eslint-disable eqeqeq */
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function AdvanceSearch(props) {
  function handleAdvSearch(event) {
    event.preventDefault();
    props.setAdvData(
      props.advData.filter(
        (inv) =>
          inv.doc_id == props.invoice.doc_id &&
          inv.invoice_id == props.invoice.invoice_id &&
          inv.cust_number == props.invoice.cust_number &&
          inv.buisness_year == props.invoice.buisness_year
      )
    );
    props.handleClose();
  }

  return (
    <div>
      <form id="adv-search-form" onSubmit={handleAdvSearch}>
        <Dialog open={props.open.advSearch} onClose={props.handleClose}>
          <DialogTitle
            style={{
              backgroundColor: "#3b4d5a",
              color: "#fff",
            }}
          >
            Advance Search
          </DialogTitle>
          <DialogContent
            style={{
              backgroundColor: "#3b4d5a",
            }}
          >
            <Grid container spacing={2}>
              <Grid container item spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    id="outlined-basic"
                    label="Document ID"
                    placeholder="Document ID"
                    name="doc_id"
                    value={props.invoice.doc_id}
                    type="number"
                    onChange={props.handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    id="outlined-basic"
                    label="Invoice Id"
                    placeholder="Invoice Id"
                    name="invoice_id"
                    value={props.invoice.invoice_id}
                    type="text"
                    onChange={props.handleChange}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    id="outlined-basic"
                    label="Customer Number"
                    placeholder="Customer Number"
                    name="cust_number"
                    value={props.invoice.cust_number}
                    type="text"
                    onChange={props.handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px" }}
                    id="outlined-basic"
                    label="Business Year"
                    placeholder="Business Year"
                    name="buisness_year"
                    value={props.invoice.buisness_year}
                    type="number"
                    onChange={props.handleChange}
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
                  fullWidth
                  style={{ color: "#fff", borderColor: "#fff" }}
                  type="submit"
                  variant="outlined"
                  form="adv-search-form"
                  color="primary"
                >
                  SEARCH
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