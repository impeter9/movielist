import React from 'react';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';
import Add from './components/Add.jsx';
import Watch from './components/Watch.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // movies: [
            //     {title: 'Mean Girls'},
            //     {title: 'Hackers'},
            //     {title: 'The Grey'},
            //     {title: 'Sunshine'},
            //     {title: 'Ex Machina'},
            //   ],
            movies: [],
            searchBool: false,
            watchedButton: false,
            toWatchButton: false
        };
    }

    handleAddMovie(e) {
        e.preventDefault();
        var sameTitle = false;
        for (var i = 0; i < this.state.movies.length; i++) {
            if (this.state.movies[i].title.toLowerCase() === e.target[0].value.toLowerCase()) {
                sameTitle = true;
            }
        }
        if (!sameTitle) {
            let newMovies = [{title: e.target[0].value.toLowerCase(), watched: false}];
            // console.log(newMovies)
            this.setState({
                movies: this.state.movies.concat(newMovies)
            })
        }
        e.target[0].value = '';
    }

    handleSearchChange(e) {
        e.preventDefault();
        let newMovieList = this.state.movies.filter(movie => movie.title.toLowerCase().includes(e.target[0].value.toLowerCase()));
        this.setState({
            movies: newMovieList,
            searchBool: true
        })
        e.target[0].value = '';
    }

    handleWatchState(title) {
        var newMovieList = this.state.movies.map(movie => {
            if (movie.title.toLowerCase() === title.toLowerCase()){
                return {title: movie.title, watched: !movie.watched};
            } else {
                return {title: movie.title, watched: movie.watched};
            }
        })
        this.setState({
            movies: newMovieList
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Add handleAddMovie={this.handleAddMovie.bind(this)}/>
                <Search handleSearchChange={this.handleSearchChange.bind(this)}/>
                <Watch />
                <MovieList handleWatchState={this.handleWatchState.bind(this)} allState={this.state}/>
            </div>
        );
    }
}

export default App;