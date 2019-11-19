import React from 'react';

const MovieListEntry = (props) => {
    if (/\S/.test(props.movie.title)) {
        // if(!props.movie.watched) {
        //     return (
        //         <div className="movie-list-entry">{props.movie.title}<button class="watchbutton">Watched</button></div>
        //     );
        // } else if (props.movie.watched) {
        //     return (
        //         <div className="movie-list-entry">{props.movie.title}<button class="watchbutton">To Watch</button></div>
        //     );
        // }
        return (
            <div className="movie-list-entry">{props.movie.title}<button onClick={() => {props.handleWatchState(props.movie.title)}} class="watchbutton">{props.movie.watched? 'Watched' : 'To Watch'}</button></div>
        );
    } else {
        return null;
    }
}

export default MovieListEntry;