import {useState,useEffect} from 'react';
import Head from 'next/head';
import {Container, Button, makeStyles, Box} from '@material-ui/core'
import Link from 'next/link';
import axios from 'axios';
import MovieList from '../layouts/MovieList/MovieList';

export default function Home() {
  const useStyles = makeStyles(() => ({
    addButton: {
      justifyContent: 'flex-end',
      display:"flex",
      marginTop: 10
    }
  }));
  const classes = useStyles();
  const [loading,setLoading] = useState(false);
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    fetchFavoredMovie()
  },[]);
  const fetchFavoredMovie = () => {
    axios.get('http://localhost:5000/api/movies/all')
        .then(response => {
            if (response.data.success) {
                console.log(response.data.favorites)
                setMovies(response.data.favorites)
                setLoading(true)
            } else {
                alert('Failed to get favorites movie')
            }
        });
}
  return (
    <>
      <Head>
        <title>Be Favoirte Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl">
        <div className="addButton">
          <Link href="/addmovie"><Button  variant="contained" color="primary">Добави нов филм </Button></Link>
        </div>
        {loading && <MovieList data={movies}/>}
      </Container>
    </>
  )
}
