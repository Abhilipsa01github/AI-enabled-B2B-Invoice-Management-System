
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import Grid from "@mui/material/Grid";
import { deleteInvoice } from "../services/InvoiceFetch";

export default function Delete(props) {
  async function handleDelete(event) {
    event.preventDefault();
    let response = await deleteInvoice(props.invChecked);
    if (response) {
      window.location.reload(false);
    }
  }

  return (
    <div>
      <form id="delete-form" onSubmit={handleDelete}>
        <Dialog open={props.open.delete} onClose={props.handleClose}>
          <DialogTitle
            style={{
              backgroundColor: "#3b4d5a",
              color: "#fff",
            }}
          >
            Delete Records ?
          </DialogTitle>
          <DialogContent
            style={{
              backgroundColor: "#3b4d5a",
              color: "#fff",
            }}
          >
            <p style={{ fontFamily: "Roboto,Helvetica,Arial,sans-serif" }}>
              Are you sure you want to delete these record[s] ?
            </p>
          </DialogContent>
          <DialogActions
            style={{
              backgroundColor: "#3b4d5a",
              color: "#fff",
            }}
          >
            <Grid container spacing={1}>
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
              <Grid item xs>
                <Button
                  style={{ color: "#fff", borderColor: "#fff" }}
                  fullWidth
                  variant="outlined"
                  form="delete-form"
                  type="submit"
                  color="primary"
                >
                  DELETE
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}