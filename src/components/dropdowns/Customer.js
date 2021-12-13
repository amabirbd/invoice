import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CustomerDropdown() {
    const [name, setName] = React.useState('');

    let customers = [
        {
            name: "Harvey Morrison",
            address: "hauseneidorf-06458, Sachsen Anhel, Germany"
        },
        {
            name: "Name Two",
            address: "address two"
        },
        {
            name: "Name three",
            address: "address three"
        },
    ]

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">name</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    label="name"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Harvey Morrison</MenuItem>
                    <MenuItem value={2}>Name Two</MenuItem>
                    <MenuItem value={30}>Name Three</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}