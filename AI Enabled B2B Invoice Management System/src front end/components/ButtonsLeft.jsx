import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/styles";
import AdvanceSearch from "./AdvanceSearch";
import AnalyticsView from "./AnalyticsView";
import { predictInvoice } from "../services/InvoiceFetch";
import refresh from "../images/refresh-logo.png"
export default function ButtonsLeft(props) {
  const [open, setOpen] = useState({
    predict: true,
    analytics: false,
    advSearch: false,
  });

  const MyButton = styled(Button)(() => ({
    fullWidth: true,
    color: "#fff",
  }));

  function handleOpen(event) {
    const comp = event.target.id;
    setOpen((prev) => ({
      ...prev,
      predict: false,
      [comp]: true,
    }));
    // console.log([comp]);
  }
  function handleClose() {
    setOpen({ predict: true, analytics: false, advSearch: false });
  }

  async function handlePredict(event) {
    event.preventDefault();
    let response = await predictInvoice(props.invChecked);
    if (response) {
      window.location.reload(false);
    }
    console.log(response);
  }

  return (
    <ButtonGroup sx={{ margin: "20px 30px" }} fullWidth variant="outlined" aria-label="outlined button group">
      <MyButton
        id="predict"
        style={{ backgroundColor: open.predict === true ? "#02b8fa" : "#transparent" }}
        onClick={handlePredict}
      >
        PREDICT
      </MyButton>
      <MyButton
        id="analytics"
        onClick={handleOpen}
        style={{ backgroundColor: open.analytics === true ? "#02b8fa" : "#transparent" }}
      >
        ANALYTICS VIEW
      </MyButton>
      <AnalyticsView open={open} handleClose={handleClose} handleChange={props.handleChange} />
      <MyButton
        id="advSearch"
        onClick={handleOpen}
        style={{ backgroundColor: open.advSearch === true ? "#02b8fa" : "#transparent" }}
      >
        ADVANCE SEARCH
      </MyButton>
      <AdvanceSearch
        open={open}
        advData={props.advData}
        setAdvData={props.setAdvData}
        handleChange={props.handleChange}
        handleClose={handleClose}
        invoice={props.invoice}
      />
      <Button style={{ width: "fit-content" }}>
        <a style={{ lineHeight: "1" }} href="/">
          <img src={refresh} width="25px" alt="refresh-logo" />
        </a>
      </Button>
    </ButtonGroup>
    
  );
}