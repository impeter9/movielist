import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = (props) => {
    if (props.movies.length === 0){
        return (
            <div className="movie-list-entry">No movie by that name found</div>
        );
    } else {
        return (
                <div className="movie-list">
                    {props.movies.map((movie) => 
                    <MovieListEntry movie={movie}/>)}
                </div>
        );
    }
}

export default MovieList;