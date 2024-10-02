import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, List, ListItemText, Box, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Hamburger Button for Mobile */}
      <Button 
        onClick={toggleSidebar} 
        sx={{ display: { md: 'none' }, color: 'gray' }}
      >
        <MenuIcon />
      </Button>

      {/* Sidebar Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleSidebar}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box
          sx={{ width: 250, bgcolor: '#1F2937', color: 'white', height: '100vh'}} // Tailwind's gray-800 equivalent
          role="presentation"
          onClick={toggleSidebar}
          onKeyDown={toggleSidebar}
        >
          <h2 style={{ textAlign: 'center', margin: '16px 0', fontSize: '24px', fontWeight: 'bold' }}>
            Admin Dashboard
          </h2>
          <List>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton component={Link} to="/appointments">
              <ListItemText primary="Appointments" />
            </ListItemButton>
            <ListItemButton component={Link} to="/doctors">
              <ListItemText primary="Doctors" />
            </ListItemButton>
            <ListItemButton component={Link} to="/add-doctor">
              <ListItemText primary="Add Doctor" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* Persistent Sidebar for Desktop */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          width: '250px',
          bgcolor: '#1F2937',  // Tailwind's gray-800 equivalent
          color: 'white',
          height: 'calc(100vh - 64px)', // Adjust for Navbar height (assuming 64px height for Navbar)
          position: 'fixed',
          top: '73px', // Adjusted to start after Navbar
          left: 0,
        }}
      >
        <h2 style={{ textAlign: 'center', margin: '16px 0', fontSize: '24px', fontWeight: 'bold' }}>
          Admin Dashboard
        </h2>
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={Link} to="/appointments">
            <ListItemText primary="Appointments" />
          </ListItemButton>
          <ListItemButton component={Link} to="/doctors">
            <ListItemText primary="Doctors" />
          </ListItemButton>
          <ListItemButton component={Link} to="/add-doctor">
            <ListItemText primary="Add Doctor" />
          </ListItemButton>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
