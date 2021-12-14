import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PaymentTerm() {
  const [payment, setPayment] = React.useState("");

  const handleChange = (event) => {
    setPayment(event.target.value);
  };

  return (
    <Box sx={{ width: 320 }}>
      <FormControl fullWidth>
        <Select
          value={payment}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Select One</em>
          </MenuItem>
          <MenuItem value={1}>Jackson Av</MenuItem>
          <MenuItem value={2}>payment Two</MenuItem>
          <MenuItem value={30}>payment Three</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
