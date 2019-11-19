import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = (props) => {
    if (props.allState.movies.length === 0){
        if (props.allState.searchBool){
            return (
                <div id="default_statement" className="movie-list-entry">No movie by that name found</div>
            );
        } else {
            return null;
        }

    } else {
        return (
                <div className="movie-list">
                    {props.allState.movies.map((movie) =>
                    <MovieListEntry handleWatchState={props.handleWatchState} movie={movie}/>)}
                </div>
        );
    }
}

export default MovieList;