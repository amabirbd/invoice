import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function InvoiceType() {
  const [invoiceType, setInvoiceType] = React.useState("");

  const handleChange = (event) => {
    setInvoiceType(event.target.value);
  };

  return (
    <Box sx={{ width: 320 }}>
      <FormControl fullWidth>
        <Select
          value={invoiceType}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Select One</em>
          </MenuItem>
          <MenuItem value={1}>Jackson Av</MenuItem>
          <MenuItem value={2}>invoiceType Two</MenuItem>
          <MenuItem value={30}>invoiceType Three</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
