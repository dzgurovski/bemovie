import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: "100%",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    padding: 5,
    textAlign: "center"
  },
  media: {
    height: 400,
    backgroundSize: 'contain'
  },
});


const Movie = (props) => {
  const classes = useStyles();
  const { movieData, type } = props.data;

  const addMovie = () => {
    axios.get(`http://localhost:5000/api/movies/?imdbID=${movieData.imdbID}`).then((res)=>{
      if(!res.data.data){
        axios.post('http://localhost:5000/api/movies/', movieData).then(res => {
            
        });
      }else{
        alert('This movie has already been added to your list!')
      }
    })
    
  }
  const removeMovie = () => {
    axios.delete('http://localhost:5000/api/movies/', { imdbID: movieData.imdbID }).then(res => {
      props.remove(movieData.imdbID);
    });
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movieData.Poster == "N/A" ? "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg" : movieData.Poster}
          title={movieData.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movieData.Title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {type === "search" && <Button onClick={addMovie} variant="contained" color="primary" disabled={false}>Добави в любими</Button>}
      {type === "remove" && <Button onClick={removeMovie} variant="contained" color="secondary">Премахни от любими</Button>}
    </Card>
  );
}

export default Movie;
