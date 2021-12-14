import { Grid, Typography } from "@mui/material";
import React from "react";
import ItemTable from "../../ItemTable";

import SearchBar from "../SearchBar";

function ItemSection() {
  return (
    <div className="new-invoice">
      <Typography className="new-invoice-text" variant="h5">
        Items
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={10} md={5}>
          <div className="form-field">
            <Typography variant="h6">Add Item</Typography>
            <SearchBar />
          </div>
        </Grid>
        <ItemTable />
      </Grid>
    </div>
  );
}

export default ItemSection;
