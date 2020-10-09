import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import MovieCard from './Card'
import MediaCard from './Card'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 345,
      backgroundColor:'black',
    
    },
    card:{
      display:'block',
      width:'80%',
      textAlign:'center',
      justifyContent:'center',
      margin:'20px'
  
      
    },
    paper: {
      display: 'flex',
      justifyContent:'space-between',
      margin:'20px',
      
      marginBottom:'30px',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        
      },
    }
  }));
export default function Searchmovies(props) {
    const classes = useStyles();

    return (
    
        <div>    
          <Link style={{textDecoration:'none'}} to={`card/${props.movie.id}`}>
            <Button  >
             <Card className={classes.root} >
                  
             <CardMedia
                style={{height:'400px',width:'250px'}}
                component="img"
                alt="Movie Poster"            
                image={`http://image.tmdb.org/t/p/w185//${props.movie.poster_path}`}
                title={props.movie.title}
                />
                
                
                <center>
                <Typography variant='button'  style={{color:'#fff',display:'flex',justifyContent:'center',marginTop:'7px'}}>
                    <StarIcon fontSize="small" /> <div style={{marginTop:'px', marginLeft:'5px'}} >  Rating: {props.movie.vote_average}/10</div>
                </Typography></center>
           </Card></Button>
            
          </Link>
           
        </div>
        
    )
}
