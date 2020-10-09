import React from 'react';
import {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { CardContent } from '@material-ui/core';
import "../App.css"
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Searchmovies from './Searchmovies';

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    backgroundColor:'black'
  },
  card:{
    display:'block',
    width:'80%',
    textAlign:'center',
    justifyContent:'center',
    
    margin:'20px'

    
  },
  snack: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  hed:{
    color:"#fff",
    textAlign:'center',
    marginTop:'10px'
  },
  paper: {
    display: 'flex',
    alignItems:'center',
    marginRight:'0',
    justifyContent:'center',
    width:'100%',
    flexWrap:'wrap',
    marginBottom:'30px',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      
    },
  }
}));

export default function Header() {
    const classes = useStyles();
  const [query,setQuery]=useState('');
  const [open, setOpen] = React.useState(false);
  const [movies,setMovies]=useState([]);
  function quer(e){
    if(query.length===0){
      handleClick();
      e.preventDefault();
      
      
      
    }
    else{
      setQuery('');
      
      
    }
  }
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    const searchMovies= async(e)=> {
      
        quer();
        e.preventDefault();
        const url=`https://api.themoviedb.org/3/search/movie?api_key=<apikey>&language=en-US&query=${query}&include_adult=false`;
        let response = await fetch(url);
        const data = await response.json();
        //console.log(data.results);
        setMovies(data.results);
        
    }
    useEffect(() => {
      
    
      const latestMovies= async()=> {
          
          const url=`https://api.themoviedb.org/3/movie/now_playing?api_key=<apikey>&language=en-US&page=1`;
          let response = await fetch(url);
          const data = await response.json();
          //console.log(data.results);
          setMovies(data.results);
          
  
      }
        latestMovies();},[]);

    return (
        <>
         
         <div>  
           <center>
        <form onSubmit={searchMovies}>
        
          <Card className={classes.card} style={{backgroundColor:'#212121'}}>
            <CardContent>
            <label htmlFor="query" style={{color:'#fff'}}><Typography variant="h4" gutterBottom>
        Movie Name 
      </Typography></label>
            <input type="text" name="query"  placeholder="Enter movie name" 
            value={query}  onChange={(e)=>setQuery(e.target.value)} 
            style={{width:'80%',
            height:'0%',
            fontSize:'1.5em',
            border: '2px solid',
            borderRadius: '10px',
            borderColor:'#7b1fa2',
            padding:'5px',
            marginTop:'0px'
            }} />
            <Button variant='contained'className={classes.button} type='submit' 
            style={{
            width:'60%',marginTop:'20px',backgroundColor:'#7b1fa2',color:'#fff', borderRadius: '10px'}} ><Typography  variant="h6" gutterBottom>
            Search
          </Typography></Button>
            </CardContent>
            </Card>
        </form>
        </center>
        <div className={classes.snack}> <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} style={{backgroundColor:'#212121',color:'#fff'}}severity="success">
            Please Fill the Feild
        </Alert>
      </Snackbar></div>
        </div>
        <Typography className={classes.hed} variant="h4" gutterBottom>
              Now Playing
          </Typography>
          <div style={{alignItems:'center'}}>
        <div className={classes.paper}>
        
            {movies.filter((movie=>movie.poster_path)).map(movie=>(
            <Searchmovies movie={movie} key={movie.id} />
           
           ))}
           </div>
           </div>
           
        </>
          );
        
      }

