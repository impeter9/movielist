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
            movies: [],
            originalList: [],
            searchBool: false,
            watchedButton: false,
            wBColor: null,
            toWatchButton: false,
            tWBColor: null,
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
            let title = e.target[0].value.toLowerCase().split(' ').join('%20');
            let url = 'https://api.themoviedb.org/3/search/movie?api_key=0f574406be37b902e1b9ba769c579ef2&language=en-US&query=' + title + '&page=1&include_adult=false';
            fetch(url)
                .then(response => {return response.json()})
                .then(data => {
                    if (data.results.length === 0){
                        alert('No results found! :(');
                    } else {
                        let newMovies = [{
                            title: data.results[0].title, 
                            watched: false,
                            date: data.results[0].release_date,
                            vote: data.results[0].vote_average,
                            poster: data.results[0].poster_path,    
                            }];
                        this.setState({
                            movies: this.state.movies.concat(newMovies)
                        })
                    }
                })
                .catch((err)=>{console.log('error adding movie')});
        }
        e.target[0].value = '';
    }

    handleSearchChange(e) {
        e.preventDefault();
        if (!this.state.searchBool){
            let originalList = this.state.movies.slice();
            let newMovieList = this.state.movies.filter(movie => movie.title.toLowerCase().includes(e.target[0].value.toLowerCase()));
            let searchBool = this.state.searchBool;
            this.setState({
                originalList: originalList,
                movies: newMovieList,
                searchBool: !searchBool
            })
            e.target[0].value = '';
        }
    }

    handleBackToOriginalList() {
        if (this.state.searchBool) {
            let originalList = this.state.originalList;
            let searchBool = this.state.searchBool;
            this.setState({
                movies: originalList,
                searchBool: !searchBool
            })
        }
    }

    handleWatchState(title) {
        console.log(this.state.movies)
        var newMovieList = this.state.movies.map(movie => {
            if (movie.title.toLowerCase() === title.toLowerCase()){
                return {
                    title: movie.title, 
                    watched: !movie.watched,    
                    date: movie.date,
                    vote: movie.vote,
                    poster: movie.poster,    
                    };
            } else {
                return {
                    title: movie.title, 
                    watched: movie.watched,
                    date: movie.date,
                    vote: movie.vote,
                    poster: movie.poster,    
                    };
            }
        })
        console.log(newMovieList)
        this.setState({
            movies: newMovieList
        })
    }

    handleWatchedButton(e) {
        e.preventDefault();
        if (!this.state.watchedButton && !this.state.toWatchButton) {
            var newWatchedMovieList = this.state.movies.filter(movie => {
                return movie.watched
            });
            var originalList = this.state.movies.slice();
            var watchedButton = this.state.watchedButton;
            this.setState({
                originalList: originalList,
                movies: newWatchedMovieList,
                watchedButton: !watchedButton,
                wBColor: 'lightskyblue'
            })
        } else if (this.state.watchedButton && !this.state.toWatchButton) {
            var movies = this.state.originalList.slice();
            var originalList = [];
            var watchedButton = this.state.watchedButton;
            this.setState({
                originalList: originalList,
                movies: movies,
                watchedButton: !watchedButton,
                wBColor: null
            })
        } else if (!this.state.watchedButton && this.state.toWatchButton) {
            var movies = this.state.originalList.slice();
            var originalList = [];
            var toWatchButton = this.state.toWatchButton;
            var watchedButton = this.state.watchedButton;
            this.setState({
                originalList: originalList,
                movies: movies,
                toWatchButton: !toWatchButton,
                tWBColor: null
            }, (() => {
                var newWatchedMovieList = this.state.movies.filter(movie => {
                    return movie.watched
                });
                var originalList = this.state.movies.slice();
                this.setState({
                    originalList: originalList,
                    movies: newWatchedMovieList,
                    watchedButton: !watchedButton,
                    wBColor: 'lightskyblue'
                })
            }))
        }
    }

    handleToWatchButton(e) {
        e.preventDefault();
        if (!this.state.watchedButton && !this.state.toWatchButton) {
            var newToWatchMovieList = this.state.movies.filter(movie => {
                return !movie.watched
            });
            var originalList = this.state.movies.slice();
            var toWatchButton = this.state.toWatchButton;
            this.setState({
                originalList: originalList,
                movies: newToWatchMovieList,
                toWatchButton: !toWatchButton,
                tWBColor: 'lightskyblue'
            })
        } else if (!this.state.watchedButton && this.state.toWatchButton) {
            var movies = this.state.originalList.slice();
            var originalList = [];
            var toWatchButton = this.state.toWatchButton;
            this.setState({
                originalList: originalList,
                movies: movies,
                toWatchButton: !toWatchButton,
                tWBColor: null
            }) 
        } else if (this.state.watchedButton && !this.state.toWatchButton) {
            var movies = this.state.originalList.slice();
            var originalList = [];
            var toWatchButton = this.state.toWatchButton;
            var watchedButton = this.state.watchedButton;
            this.setState({
                originalList: originalList,
                movies: movies,
                watchedButton: !watchedButton,
                wBColor: null
            }, (()=>{
                var newToWatchMovieList = this.state.movies.filter(movie => {
                    return !movie.watched
                });
                var originalList = this.state.movies.slice();
                var toWatchButton = this.state.toWatchButton;
                this.setState({
                    originalList: originalList,
                    movies: newToWatchMovieList,
                    toWatchButton: !toWatchButton,
                    tWBColor: 'lightskyblue'
                })
            }))
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Add handleAddMovie={this.handleAddMovie.bind(this)}/>
                <Search handleSearchChange={this.handleSearchChange.bind(this)}/>
                <Watch handleWatchedButton={this.handleWatchedButton.bind(this)} handleToWatchButton={this.handleToWatchButton.bind(this)} allState={this.state}/>
                <MovieList handleWatchState={this.handleWatchState.bind(this)} handleBackToOriginalList={this.handleBackToOriginalList.bind(this)} allState={this.state}/>
            </div>
        );
    }
}

export default App;