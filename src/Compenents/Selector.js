import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Upcoming from './Upcoming';
import Popular from './Popular';
import Toprated from './Toprated';
import Search from './Search';
import {
  Link
} from "react-router-dom";



function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  indicator:{
    backgroundColor:'#fff'
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          TabIndicatorProps={{style: {background:'#424242'}}}
          //indicatorColor='primary'
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          style={{backgroundColor:'#e0e0e0',color:'black',fontWeight:'bold'}}
        >
          
          <LinkTab label="Home" href="/" component={Link} {...a11yProps(0)} />
          <LinkTab label="Popular" href="/popular" component={Link}  {...a11yProps(1)} />
          <LinkTab label="Top Rated" href="/toprated" {...a11yProps(2)} />
          <LinkTab label="Upcoming" href="/upcoming" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <div style={{backgroundColor:'black'}}>
      <TabPanel value={value} index={0} to='/'>
        <Search/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Popular/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Toprated/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Upcoming/>
      </TabPanel>
      </div>
    </div>
  );
}
