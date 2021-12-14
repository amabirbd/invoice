import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Reference() {
  const [reference, setReference] = React.useState("");

  const handleChange = (event) => {
    setReference(event.target.value);
  };

  return (
    <Box sx={{ width: 320 }}>
      <FormControl fullWidth>
        <Select
          value={reference}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Select One</em>
          </MenuItem>
          <MenuItem value={1}>Jackson Av</MenuItem>
          <MenuItem value={2}>reference Two</MenuItem>
          <MenuItem value={30}>reference Three</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
