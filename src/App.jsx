import React, { Component } from 'react';
import './App.css'
import MovieComponent from './MovieComponent.jsx'
import Header from './Header.jsx';
import { movies } from './MovieData.jsx';



class App extends Component {

  state = {
    searchText: "",
    movies: movies
  }

  onSearch = (text) => {
    const newSearchText = text.toLowerCase();

    const updatedMovieData = this.state.movies.map((movie) => {
      if (!newSearchText) {
       movie.doesMatchSearch = true;
       return movie; 
      } else {
        const title = movie.title.toLowerCase(); 
        const director = movie.director.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const directorMatch = director.includes(newSearchText);

        // search match if/else 
        if (titleMatch) {
          movie.doesMatchSearch = true;
        } else if (directorMatch) {
          movie.doesMatchSearch = true;
        } else {
          movie.doesMatchSearch = false;
        }
        // alt 
        // doesMatch = titleMatch || directorMatch;
        // movie.doesMatchSearch = doesMatch;
        return movie;
      }
  });
    this.setState({
      movies: updatedMovieData,
      searchText: newSearchText
    })

  };

  render() {
    return (
      <div className='App'>
        <Header searchText={this.state.searchText} onSearch={this.onSearch} />
        <MovieComponent movies={this.state.movies}/>      
      </div>
    );
  }
}

export default App;


