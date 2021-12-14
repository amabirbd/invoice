import * as React from "react";

import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { FormControl, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/system";

export default function Date() {
  const [value, setValue] = React.useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 320 }}>
      <FormControl fullWidth>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label=""
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </FormControl>
    </Box>
  );
}
