import React from 'react';

const MovieListEntry = (props) => {
    if (/\S/.test(props.movie.title)) {
        return (
            <div className="movie-list-entry">
                {props.movie.title}
                <ul>
                <li>{'Year:' + props.movie.date.slice(0,4)}</li>
                <li>{'Rating:' + props.movie.vote}</li>
                </ul>
                <img style={{height: 200}} src={'https://image.tmdb.org/t/p/original' + props.movie.poster} alt="poster" />
                <button onClick={() => {props.handleWatchState(props.movie.title)}} class="watchbutton">{props.movie.watched? 'Watched' : 'To Watch'}</button>
            </div>
        );
    } else {
        return null;
    }
}

export default MovieListEntry;