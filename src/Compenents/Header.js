import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import MediaCard from './Card'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Selector from './Selector'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar({movie}) {
  const classes = useStyles();




  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#7b1fa2'}}>
        <Toolbar variant="dense">
          
        <MovieCreationIcon />
          <Typography variant="h6" color="inherit" style={{marginLeft:'5px'}} >
            Movie Finder
          </Typography>
           {/* <Switch>
             <Route path='/card'>
                <MediaCard movie={movie}/>
                
             </Route>
           </Switch>        */}
        </Toolbar>
      </AppBar>
    </div>
    </Router>
  );
}
