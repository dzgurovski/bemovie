import React from 'react';
import Movie from '../../components/Movie';

const MovieList = (props) =>{
    return <div className="movies">
        {props.data.movieData.map((movie, key)=>{
            return <Movie remove={props.remove} key={key} data={{movieData:movie, type:props.data.type}} />
        })}
    </div>
}

export default MovieList;