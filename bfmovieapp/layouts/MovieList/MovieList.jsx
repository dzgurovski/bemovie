import React from 'react';
import Movie from '../../components/Movie';

const MovieList = (props) =>{
    return <div className="movies">
        {props.data.map((movie, key)=>{
            return <Movie key={key} data={movie} />
        })}
    </div>
}

export default MovieList;