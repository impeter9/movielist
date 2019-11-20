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
            originalList: [],
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

    handleWatchedButton(e) {
        e.preventDefault();
        console.log(this.state.watchedButton);
        if (!this.state.watchedButton) {
            var newWatchedMovieList = this.state.movies.filter(movie => {
                return movie.watched
            });
            var originalList = this.state.movies.slice();
            var watchedButton = this.state.watchedButton;
            this.setState({
                originalList: originalList,
                movies: newWatchedMovieList,
                watchedButton: !watchedButton
            })
        } else if (this.state.watchedButton) {
            var movies = this.state.originalList.slice();
            var originalList = [];
            var watchedButton = this.state.watchedButton;
            this.setState({
                originalList: originalList,
                movies: movies,
                watchedButton: !watchedButton
            })
        }
    }

    handleToWatchButton(e) {
        e.preventDefault();
        if (!this.state.toWatchButton) {
            var newToWatchMovieList = this.state.movies.filter(movie => {
                return !movie.watched
            });
            var originalList = this.state.movies.slice();
            var toWatchButton = this.state.toWatchButton;
            this.setState({
                originalList: originalList,
                movies: newToWatchMovieList,
                toWatchButton: !toWatchButton
            })
        } else if (this.state.toWatchButton) {
            var movies = this.state.originalList.slice();
            var originalList = [];
            var toWatchButton = this.state.toWatchButton;
            this.setState({
                originalList: originalList,
                movies: movies,
                toWatchButton: !toWatchButton
            })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Add handleAddMovie={this.handleAddMovie.bind(this)}/>
                <Search handleSearchChange={this.handleSearchChange.bind(this)}/>
                <Watch handleWatchedButton={this.handleWatchedButton.bind(this)} handleToWatchButton={this.handleToWatchButton.bind(this)} allState={this.state}/>
                <MovieList handleWatchState={this.handleWatchState.bind(this)} allState={this.state}/>
            </div>
        );
    }
}

export default App;