import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 400,
      backgroundSize: ''
    },
  });
  
  
const Movie = (props) =>{
    const classes = useStyles();
    const {Title,Poster, type} = props.data;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Poster == "N/A" ? "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg" : Poster}
          title={Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {type && <Button>Добави в Любими</Button>}
    </Card>
  );
}

export default Movie;
