import Head from 'next/head';
import { Container, Button, Typography, TextField, Box } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import MovieList from '../../layouts/MovieList/MovieList';
const Addmovie = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchItems, setSearchItems] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const onTypeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=bb8822e5&type=movie`)
      .then(response => {
        if (response.data.Response === "True") {
           setSearchItems(response.data.Search);
           setLoading(true);
        } else {
          setLoading(false);
          alert('Failed to get movie');
        }
      });
  };
  return <div>
    <Head>
      <title>Be Favoirte Movie App - Add new movie</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container maxWidth="xl">
      <Typography>Добавяне на филм</Typography>
      <Box>
        <TextField onKeyUp={onTypeSearch} id="standard-search" label="Заглавие" type="search" />
        <Button variant="contained" onClick={onSearch} color="primary">Tърси</Button>
      </Box>
      {loading && <MovieList data={{movieData:searchItems, type:"search"}}/>}
    </Container>
  </div>
}

export default Addmovie;