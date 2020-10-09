import React from 'react';
import {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Searchmovies from './Searchmovies';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    backgroundColor:'black'
  },
  hed:{
    color:"#fff",
    textAlign:'center',
    marginTop:'10px'
  },
  card:{
    display:'block',
    width:'80%',
    textAlign:'center',
    justifyContent:'center',
    
    margin:'20px'
  },
  
  page: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    marginBottom:'20px',
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
export default function Upcoming() {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    
      
      
      
    };
    const [movies,setMovies]=useState([]);
    useEffect(() => {
      
    
      const searchMovies= async()=> {
          
          const url=`https://api.themoviedb.org/3/movie/upcoming?api_key=<apikey>&language=en-US&page=${page}`;
          let response = await fetch(url);
          const data = await response.json();
          //console.log(data.results);
          setMovies(data.results);
          window.scrollTo(0, 0);
  
      }
        searchMovies();},[page]);
    
    return (
        <div>
          <Typography className={classes.hed} variant="h4" gutterBottom>
            Upcoming Movies
          </Typography>
            <div className={classes.paper}>
        
        {movies.filter((movie=>movie.poster_path)).map(movie=>(
        <Searchmovies movie={movie} key={movie.id} />
       
       ))}
       
       </div>
       <div className={classes.page}>
         <center>
            <Typography  variant="subtitle2" style={{color:'#e0e0e0'}}>Page: {page}</Typography>
            <Pagination style={{backgroundColor:"#e0e0e0",padding:'5px',borderRadius:'10px',border:'2px solid #7b1fa2'}} size="small" color="default" count={10} page={page} variant="outlined" onChange={handleChange} />
            </center>
        </div>
            
        </div>
    )
}
