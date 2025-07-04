import { Box } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Person4Icon from '@mui/icons-material/Person4';
import MailIcon from '@mui/icons-material/Mail';
import '../styles/Nav.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {primary: {
    main:'#FFFFFF'
  }}
  
});
export default function Nav(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };


    
    return(
        <Box id="navbar">
            <div id='menu-burger'>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon id="menuicon"></MenuIcon>
                </Button>
                <Menu
                    id="fade-menu"
                    slotProps={{
                    list: {
                        'aria-labelledby': 'fade-button',
                    },
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slots={{ transition: Fade }}
                >
                    <MenuItem id='fade-item' onClick={handleClose}>Home</MenuItem>
                    <MenuItem id='fade-item' onClick={handleClose}>About</MenuItem>
                    <MenuItem id='fade-item' onClick={handleClose}>Contact</MenuItem>
                </Menu>
            </div>
            
            <ThemeProvider theme={theme}>
                <ul>
                    <Link to={"/"}><Button variant='text'><HomeIcon></HomeIcon>Home</Button></Link>
                    <Link to={"/About"}><Button variant='text'><Person4Icon></Person4Icon>About</Button></Link>
                    <Link to={"/Contact"}><Button variant='text'><MailIcon></MailIcon>Contact</Button></Link>
                </ul>
            </ThemeProvider>
        </Box>
    )
}