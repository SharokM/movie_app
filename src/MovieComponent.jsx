
import { movies } from './MovieData.jsx'
import Movie from './Movie.jsx'
import './movies.css'

const fetchMovies = () => {
    return movies;
}

// FIND A GOOD MOVIE API AND REPLACE THE STATIC DATA WITH API CALLS
const MovieComponent = () => {
    const movieData = fetchMovies();


    return (
        <div className="movie-container">
            <h2>Popular Movies</h2>
            <ul className="movie-list">
                {
                movieData.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))

                }

            </ul>
        </div>
    )
}

export default MovieComponent;