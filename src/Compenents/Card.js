import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {useState,useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useTheme } from "@material-ui/styles";
import StarIcon from '@material-ui/icons/Star';
import "../App.css"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 360,
    [theme.breakpoints.down("md")] : {
    maxWidth: 280
    },
    backgroundColor:'#f3e5f5',
    alignItems:'center',
    margin:'auto',
    marginTop:'50px',
    marginBottom:'50px',
    border:'2px solid',
    borderColor:'#7b1fa2'
  },
  media: {
    
  }
}));

export default function MediaCard(props){
  let path=window.location.pathname;
  let pathname=path.substring(6)
  //console.log(pathname);
  const [movies,setMovies]=useState([]);
  const classes = useStyles();

  useEffect(() => {
      
    
    const MovieCard= async()=> {
        
        const url=`https://api.themoviedb.org/3/movie/${pathname}?api_key=e868b5f94ec6ea6a6788d0f9a0e9d05f&language=en-US`;
        let response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setMovies(data);

    }
      MovieCard();},[]);
  return (
 
		<div>
      {<Card className={classes.root}>
      <CardActionArea>
        <img style={{width:'100%',height:'100%'}} src={`http://image.tmdb.org/t/p/w185//${movies.poster_path}`} alt={movies.title}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movies.title}
          </Typography>
          <Typography variant="body2" style={{color:'#424242'}} component="p">
            {movies.overview}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'space-between'}}>
      <Typography variant='caption'  style={{color:'black',marginTop:'7px'}}>
                     Rating: {movies.vote_average}/10
                </Typography>
        <Typography variant="caption" style={{marginTop:'4px'}}>
          Release : {movies.release_date}
        </Typography>
      </CardActions>
    </Card>
        
        }
    </div>
    
    )
 }
