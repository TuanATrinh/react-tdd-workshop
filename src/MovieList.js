import React from 'react'
import Movie from './Movie'
import DetailsContext from './DetailsContext'

const MovieList = () => {
  const {searchTerm, movies} = React.useContext(DetailsContext)
  const re = new RegExp(searchTerm, 'gi')

  return (
      <div className="movie-list">
        {movies.filter(movie => re.exec(movie.title)).map(movie => (
          <Movie key={movie.movieId} id={movie.movieId} movie={movie} image={movie.poster} style={{ width: '200px', height: '300px' }}/>
        ))}
      </div>
  );
};


export default MovieList