import React from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: "3242",
    product: "Mobile",
    img: "https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png",
    customer: "hamza",
    date: "26 march",
    amount: 1000,
    method: "Cash On Delivery",
    status: "approved",
  },
  {
    id: "3242332",
    product: "Tablet",
    img: "https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png",
    customer: "Arslan",
    date: "12 march",
    amount: 100,
    method: "Cash On Delivery",
    status: "pending",
  },

  {
    id: "324435",
    product: "Laptop",
    img: "data:image/jpeg;base64,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",
    customer: "hamza Latif",
    date: "22 march",
    amount: 2000,
    method: "Cash On Delivery",
    status: "approved",
  },
  {
    id: "324233242",
    product: "Tablet",
    img: "https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png",
    customer: "Arslan",
    date: "12 march",
    amount: 100,
    method: "Cash On Delivery",
    status: "pending",
  },
];

const List = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="product" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
