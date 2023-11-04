import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart(props) {
  let business_name = props.data.business_name;
  business_name = business_name.substring(1, business_name.length - 1).split(",");
  // let business_code = props.data.business_code;
  // business_code = business_code.substring(1, business_code.length - 1).split(",");
  let total_amount = props.data.total_amount;
  total_amount = total_amount.substring(1, total_amount.length - 1).split(",");
  let total_customer = props.data.total_customer;
  total_customer = total_customer.substring(1, total_customer.length - 1).split(",");

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Analytics View",
      },
    },
  };

  let labels = business_name;
  
  console.log(total_customer);
  console.log(total_amount);

  const data = {
    labels,
    datasets: [
      {
        label: "No. of Customers",
        data: total_customer,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Total Open Amount",
        data: total_amount,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Dialog fullWidth maxWidth="lg" open={props.open} onClose={props.handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Button autoFocus xs={2} color="inherit" onClick={props.handleClose}>
              CLOSE
            </Button>
          </Toolbar>
        </AppBar>
        <Bar
          style={{
            background: "#fefbd8",
          }}
          options={options}
          data={data}
        />
        ;
      </Dialog>
    </div>
  );
}