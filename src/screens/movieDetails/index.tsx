import React from 'react'
import IMovieDetailsScreenProps from './IMovieDetails.props';
import MovieBanner from '../../components/movieBanner';

const MovieDetails:React.FC<IMovieDetailsScreenProps> = () => {
  return (
    <div>
        <MovieBanner />
    </div>
  )
}

export default MovieDetails;
