import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Add from "./Add.jsx";
import Edit from "./Edit.jsx";
import Delete from "./Delete.jsx";
import { styled } from "@mui/styles";

export default function ButtonsRight(props) {
  const [open, setOpen] = useState({
    add: false,
    edit: false,
    delete: false,
  });

  const MyButton = styled(Button)(() => ({
    fullWidth: true,
    color: "#fff",
  }));

  function handleOpen(event) {
    const comp = event.target.id;
    setOpen((prev) => ({
      ...prev,
      [comp]: true,
    }));
    // console.log([comp]);
  }
  function handleClose() {
    setOpen({ add: false, edit: false, delete: false });
  }

  return (
    <ButtonGroup sx={{ margin: "20px 30px" }} fullWidth variant="outlined" aria-label="outlined button group">
      <MyButton
        id="add"
        onClick={handleOpen}
        style={{ backgroundColor: open.add === true ? "#02b8fa" : "#transparent" }}
      >
        ADD
      </MyButton>
      <Add open={open} handleClose={handleClose} invoice={props.invoice} handleChange={props.handleChange} />
      <MyButton
        id="edit"
        disabled={props.invChecked.length !== 1}
        onClick={handleOpen}
        style={{ backgroundColor: open.edit === true ? "#02b8fa" : "#transparent" }}
      >
        EDIT
      </MyButton>
      <Edit open={open} handleClose={handleClose} invoice={props.invoice} handleChange={props.handleChange} />
      <MyButton
        id="delete"
        onClick={handleOpen}
        style={{ backgroundColor: open.delete === true ? "#02b8fa" : "#transparent" }}
      >
        DELETE
      </MyButton>
      <Delete open={open} handleClose={handleClose} invChecked={props.invChecked} />
    </ButtonGroup>
  );
}