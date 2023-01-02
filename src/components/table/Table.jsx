import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";
const ProductTable = (props) => {
  return (
    <div className={props.productTable ? "productTable" : ""}>
      <TableContainer
        className={`tableContainer ${props.padding && "padding"}`}
        component={Paper}
      >
        <Table
          className="table"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow className="">
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell" align="left">
                Product
              </TableCell>

              <TableCell className="tableCell" align="left">
                Customer
              </TableCell>
              <TableCell className="tableCell" align="left">
                Date
              </TableCell>
              <TableCell className="tableCell" align="left">
                Amount
              </TableCell>
              <TableCell className="tableCell" align="left">
                Payment Method
              </TableCell>
              <TableCell className="tableCell" align="left">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="tableCell" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell className="tableCell" align="left">
                  <div className="cellWrapper">
                    <img className="productImg" src={row.img} alt="" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell" align="left">
                  {row.customer}
                </TableCell>
                <TableCell className="tableCell" align="left">
                  {row.date}
                </TableCell>
                <TableCell className="tableCell" align="left">
                  {row.amount}
                </TableCell>
                <TableCell className="tableCell" align="left">
                  {row.method}
                </TableCell>
                <TableCell className="tableCell" align="left">
                  <p
                    className={`status ${
                      row.status === "Pending" ? "pending" : "delivered"
                    }`}
                  >
                    {" "}
                    {row.status}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductTable;
