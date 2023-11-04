import { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/styles";
import BarChart from "./BarChart.jsx";
import { analyticsInvoice } from "../services/InvoiceFetch.js";

export default function AnalyticsView(props) {
  var today = new Date();
  var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const [analyticsData, setAnalyticsData] = useState({
    clear_start: "1975-04-30",
    clear_end: date.toString(),
    due_start: "1975-04-30",
    due_end: date.toString(),
    baseline_start: "1975-04-30",
    baseline_end: date.toString(),
    invoice_currency: "USD",
  });

  const [openChart, setOpenChart] = useState(false);
  const [chartData, setChartData] = useState({
    business_name: "     ",
    business_code: "     ",
    total_amount: "     ",
    total_customer: "     ",
  });

  console.log(analyticsData);

  const MyLabel = styled("label")(() => ({
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  }));

  async function handleAnalytics(event) {
    event.preventDefault();
    let response = await analyticsInvoice(analyticsData);
    if (response) {
      setChartData(JSON.parse(response));
    }
    setOpenChart(true);
  }

  console.log(chartData);

  function handleChange(event) {
    const { name, value } = event.target;
    setAnalyticsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClose() {
    setOpenChart(false);
  }

  return (
    <div>
      <BarChart data={chartData} open={openChart} handleClose={handleClose} />
      <form id="analytics-form" onSubmit={handleAnalytics}>
        <Dialog open={props.open.analytics} onClose={props.handleClose}>
          <DialogTitle
            style={{
              backgroundColor: "#3b4d5a",
              color: "#fff",
            }}
          >
            Analtyics View
          </DialogTitle>
          <DialogContent
            style={{
              backgroundColor: "#3b4d5a",
            }}
          >
            <Grid container spacing={2}>
              <Grid container item spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                  <MyLabel>Clear Date</MyLabel>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px", margin: "10px 0" }}
                    id="outlined-basic"
                    name="clear_start"
                    value={analyticsData.clear_start}
                    type="date"
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px", marginBottom: "10px" }}
                    id="outlined-basic"
                    name="clear_end"
                    value={analyticsData.clear_end}
                    type="date"
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <MyLabel>Due Date</MyLabel>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px", margin: "10px 0" }}
                    id="outlined-basic"
                    name="due_start"
                    value={analyticsData.due_start}
                    type="date"
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px", marginBottom: "10px" }}
                    id="outlined-basic"
                    name="due_end"
                    value={analyticsData.due_end}
                    type="date"
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                  <MyLabel>Baseline Create Date</MyLabel>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px", margin: "10px 0" }}
                    id="outlined-basic"
                    name="baseline_start"
                    value={analyticsData.baseline_start}
                    type="date"
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px", marginBottom: "10px" }}
                    id="outlined-basic"
                    name="baseline_end"
                    value={analyticsData.baseline_end}
                    type="date"
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <MyLabel>Invoice Currency</MyLabel>
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#fff", borderRadius: "4px", margin: "10px 0" }}
                    id="outlined-basic"
                    placeholder="Invoice Currency"
                    name="invoice_currency"
                    value={analyticsData.invoice_currency}
                    type="text"
                    onChange={handleChange}
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
                  form="analytics-form"
                  color="primary"
                >
                  SUBMIT
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