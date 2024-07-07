import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './SystemMode';
import './NavBar.css'

export default function ButtonAppBar(props) {
    let Component = props.component;
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'transparent',color:'#6E07F3',boxShadow:'none'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <img className='top_icon' src='/images/icon.png'/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Component theme={props.theme} colorMode={props.colorMode} />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }