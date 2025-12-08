



const Movie = ({ movie }) => {


    return (
        <li key={movie.id} className="movie">
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title} by {movie.director} made in the year {movie.year}</p>
            <p>Rating: {movie.rating}</p>
        </li>
    )

}

export default Movie;