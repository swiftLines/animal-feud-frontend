import * as React from 'react';
import { Link } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PasswordIcon from '@mui/icons-material/Password';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const DrawerLeft = ({user, handleLogout})  => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link
            to="/"
            >
            <img
              src='https://res.cloudinary.com/nell1818/image/upload/v1648646000/Animal%20Fued/animalFuedLogo_2_g63gxj.png'
              alt=''
              height="65"
            />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <>
        {user ?
        <>
        <ListItem>
            <Link to="/profiles" style={{ textDecoration: 'none' }}>
            <ListItemIcon>
                <PeopleAltIcon 
                  color='primary'
                />
                <ListItemText
                  sx={{paddingLeft:'1rem'}}
                >View Profiles</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem> 
        <ListItem>
            <Link to="/changePassword" style={{ textDecoration: 'none' }}>
            <ListItemIcon>
                <PasswordIcon
                  color='primary'
                />
                <ListItemText
                  sx={{paddingLeft:'1rem'}}
                >Change Password</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem> 
        <ListItem>
            <Link to="/feed" style={{ textDecoration: 'none' }}>
            <ListItemIcon>
                <DynamicFeedIcon 
                  color='primary'
                />
                <ListItemText
                  sx={{paddingLeft:'1rem'}}
                >Feed</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem>  
        <ListItem>
            <Link to="" onClick={handleLogout} style={{ textDecoration: 'none' }}>
            <ListItemIcon>
                <LogoutIcon
                  color='secondary'
                />
                <ListItemText
                  sx={{paddingLeft:'1rem'}}
                >Logout</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem>
        </> 
      : 
        <>
        <ListItem>
            <Link to="/login" style={{ textDecoration: 'none' }}>
            <ListItemIcon>
                <LoginIcon 
                  color='secondary'
                />
                <ListItemText
                  sx={{paddingLeft:'1rem'}}
                >Login</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem>  
          <ListItem>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
            <ListItemIcon>
                <AssignmentIcon
                  color='primary'
                />
                <ListItemText
                  sx={{paddingLeft:'1rem'}}
                >Sign Up</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem>
          </>
        }
          </>
        <Divider />
      </Drawer>
    
      <Main open={open}>
        <DrawerHeader />
        </Main>
    </Box>
  );
}

export default DrawerLeft