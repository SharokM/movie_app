
// import { movies } from './MovieData.jsx'
import Movie from './Movie.jsx'
import './movies.css'
import React from 'react';


// FIND A GOOD MOVIE API AND REPLACE THE STATIC DATA WITH API CALLS
// const fetchMovies = () => {
//     return movies;
// }



const MovieComponent = (props) => {


    // const movieData = fetchMovies();
    const movieData = props.movies;


    return (
        <div className="movie-container">
            <h2>Popular Movies</h2>
            <ul className="movie-list">
                {
                movieData
                // filter through movies to only show movies that match search
                .filter((movie) => movie.doesMatchSearch)
                // map over movies and render Movie component
                .map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))

                }

            </ul>
        </div>
    )
}

export default MovieComponent;
