import React from 'react';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';
import Add from './components/Add.jsx';

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
            movies: []
        };
    }

    handleAddMovie(e) {
        e.preventDefault();
        let newMovies = [{title: e.target[0].value}];
        this.setState({
            movies: this.state.movies.concat(newMovies)
        })
        e.target[0].value = '';
        
        // let alreadyInList = false;
        // for (let i=0; i < this.state.movies.length; i++){
        //     if (this.state.movies[i].title === newMovies.title) {
        //         alreadyInList = true;
        //         return;
        //     }
        // }
        // if (!alreadyInList) {
        //     this.setState({
        //         movies: this.state.movies.concat(newMovies)
        //     })
        // }
    }

    handleSearchChange(e) {
        e.preventDefault();
        let newMovieList = this.state.movies.filter(movie => movie.title.toLowerCase().includes(e.target[0].value.toLowerCase()));
        this.setState({
            movies: newMovieList
        })
        e.target[0].value = '';
    }

    render() {
        return (
            <div>
                <Header />
                <Add handleAddMovie={this.handleAddMovie.bind(this)}/>
                <Search handleSearchChange={this.handleSearchChange.bind(this)}/>
                <MovieList movies={this.state.movies}/>
            </div>
        );
    }
}

export default App;