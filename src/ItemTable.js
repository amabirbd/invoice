import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ItemContext } from "./App";

export default function ItemTable() {
  const itemContext = React.useContext(ItemContext);
  console.log("item context: ", itemContext.items);
  const items = itemContext.items;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Items</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Tax</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {items.map((item) => {
            <li>{item}</li>;
          })} */}

          {items.map(
            (item) =>
              item !== null &&
              item !== undefined && (
                <TableRow
                  key={item}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="item">
                    {item}
                  </TableCell>
                  {/* <TableCell align="right">{items.calories}</TableCell>
              <TableCell align="right">{items.fat}</TableCell>
              <TableCell align="right">{items.carbs}</TableCell>
              <TableCell align="right">{items.protein}</TableCell> */}
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
