import { Grid, Typography } from '@mui/material'
import React from 'react'
import CustomerDropdown from '../dropdowns/Customer'

function NewInvoice() {
    return (
        <div className='new-invoice'>
            <Typography className="new-invoice-text" variant="h5">New Invoice</Typography>
            <Grid container spacing={2}>
                <Grid item xs={5} md={5}>
                    <div className='col1'>
                        <Typography variant='h6'>Customer Name</Typography>

                        <CustomerDropdown />
                    </div>

                </Grid>
                <Grid item xs={5} md={5}>
                    <div className='col1'>
                        column two
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default NewInvoice
