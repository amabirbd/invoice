import { ClassNames } from '@emotion/react';
import { Drawer, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const drawerWidth = 200;
const useStyles = makeStyles({
  page: {
    background: '#111102',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#3C415C'

  },
  paper: {
    background: '#3C415C'
  }
  
})

const list = ['Dashboard', 'Relationships', 'Items', 'Point of Sale', 'Sales', 'Purchase/Stocks', 'Banking and Transaction', 'Projects', 'Tasks', 'Timesheets', 'Tickets']

export default function SideNav() {
  const classes = useStyles()
  
  return (
    <div>
      <React.Fragment >
          <Drawer className={classes.drawer} variant='permanent' anchor='left' classes={{paper: classes.drawerPaper}}>
            <div>
              <Typography className='rover-crm' variant='h6'>roverCRM </Typography>
              <Typography className='navigation' variant="caption" display="block" gutterBottom>NAVIGATION</Typography>
              {
                list.map((item) => (
                  <ul>
                    <li><Typography className='navlinks-item' variant='body1'>{item}</Typography></li>
                  </ul>
                ))
              }
            </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}