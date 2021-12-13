import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import CropFreeIcon from '@mui/icons-material/CropFree';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <CropFreeIcon /> */}
          </Typography>
          <Button color="inherit">
              <NotificationsNoneIcon />
              <KeyboardArrowDownIcon />
              <div className='nav-item-padding'></div>
              <img src="https://th.bing.com/th/id/OIP.GpGa6EUGrLiS2mWA9yi5VwHaEK?pid=ImgDet&rs=1" alt="flag" width="50" height="30"></img>
              <KeyboardArrowDownIcon />
              <div className='nav-item-padding'></div>

              <SettingsIcon />
              <KeyboardArrowDownIcon />


          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
