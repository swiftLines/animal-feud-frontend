import styles from './Landing.module.css'
// import { SketchPicker } from 'react-color'
import * as React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


function TabPanel(props, handleSignupOrLogin) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Landing = ({ user }) => {
  const intro = {
    height: "100vh",
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
  
  }
  const start = {
    // backgroundColor: " rgb(26, 190, 182)",
    height: "100vh",
    width: "70%",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main>
      <section style={intro}>
        <Box
            display="flex" 
            justifyContent="start" 
    
            textAlign="center"
            fontSize="20px"
            backgroundColor= 'transparent'
            sx={{ width: "100%" }}
        >
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
        </Box>
      </section>
      <section style={start}>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Sign Up" {...a11yProps(0)} />
          <Tab label="Log In" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SignupForm handleSignupOrLogin/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoginForm />
      </TabPanel>
    </Box>
      </section>
    </main>

  )
}
        
 
          


export default Landing
