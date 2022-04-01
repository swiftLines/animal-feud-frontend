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
import { padding } from '@mui/system';


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
    height: "90vh",
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    // borderStyle: "solid",
     backgroundImage: "url(https://res.cloudinary.com/nell1818/image/upload/v1648598859/background_sq3oig.png)" 
  }
  const start = {
    backgroundColor: "whiteSmoke",
    height: "90vh",
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
            textAlign="center"
            fontSize="20px"
            sx={{ width: "100%" }}
        >
            <h1 className={styles.title}>
              Animal Feud is a “social” web app that allows users to to share their most controversial facts and opinions surrounding animals. Users can then get into heated debates about the topic posted in a comment section.

            </h1>
        </Box>
      </section>
      <section style={start}>
      <div className={styles.tab}>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Sign Up" {...a11yProps(0)} />
          <Tab label="Log In" {...a11yProps(1)} />
        </Tabs>
      </Box>
        <TabPanel 
          value={value} index={0}>
          <SignupForm handleSignupOrLogin/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LoginForm />
        </TabPanel>
    </Box>
        </div>
      </section>
    </main>

  )
}
        
 
          


export default Landing
