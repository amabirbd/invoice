import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomerDropdown from "../dropdowns/Customer";
import Date from "../dropdowns/Date";
import InvoiceType from "../dropdowns/InvoiceType";
import LocationDropdown from "../dropdowns/Location";
import PaymentTerm from "../dropdowns/PaymentTerm";
import Reference from "../dropdowns/Reference";

function NewInvoice() {
  return (
    <div className="new-invoice">
      <Typography className="new-invoice-text" variant="h5">
        New Invoice
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={5} md={5}>
          <div className="col1">
            <div className="form-field">
              <Typography variant="h6">Customer</Typography>
              <CustomerDropdown />
            </div>
            <div className="form-field">
              <Typography variant="h6">Location</Typography>
              <LocationDropdown />
            </div>
            <div className="form-field">
              <Typography variant="h6">Payment Term</Typography>
              <PaymentTerm />
            </div>
          </div>
        </Grid>
        <Grid item xs={5} md={5}>
          <div className="col2">
            <div className="form-field">
              <Typography variant="h6">Reference</Typography>
              <Reference />
            </div>
            <div className="form-field">
              <Typography variant="h6">Date</Typography>
              <Date />
            </div>
            <div className="form-field">
              <Typography variant="h6">Invoice Type</Typography>
              <InvoiceType />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewInvoice;
