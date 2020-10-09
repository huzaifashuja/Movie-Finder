import MediaCard from './Compenents/Card';
import React from 'react';
import './App.css';
import Header from './Compenents/Header';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Search from './Compenents/Search'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Popular from './Compenents/Popular';
import Toprated from './Compenents/Toprated';
import Upcoming from './Compenents/Upcoming';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <Router>
    <div className="App">
      <Header/>
      <Paper className={classes.root}>
      <Tabs
        TabIndicatorProps={{style: {background:'#7b1fa2'}}}
        value={value}
        onChange={handleChange}
        centered
        style={{backgroundColor:'#f3e5f5',color:'black',fontWeight:'bold'}}
      >
        <Tab label="Home" to="/" component={Link} />
        <Tab label="Popular" to="/popular" component={Link} />
        <Tab label="Top Rated" to="/toprated" component={Link} />
        <Tab label="Upcoming" to="/upcoming" component={Link} />
      </Tabs>
    </Paper>
      {/* <Selector/> */}
      <Switch>
      {/* <Route exact path="/" component={Selector} />  */}
      <Route exact path="/" component={Search} />
      <Route path="/popular" component={Popular} />
      <Route path="/toprated" component={Toprated} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/card" component={MediaCard} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
