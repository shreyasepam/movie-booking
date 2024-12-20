import React, { useEffect } from "react";
import IMoviesScreenProps from "./IMovies.props";
import MovieCard from "../../components/movieCard";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { getAllMovies } from "../../redux/slice/moviesSlice";
import { useNavigate } from "react-router-dom";

const Movies: React.FC<IMoviesScreenProps> = () => {
  const navigation = useNavigate();
  const moviesData = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  const onCardClick = (id: number) => {
    navigation(`/movie/${id}`);
  };

  return (
    <div className="w-full pb-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {moviesData?.data?.results?.map((movie, i) => (
          <div key={i}>
            <MovieCard
              id={movie.id}
              poster={movie.poster_path}
              rating={movie.vote_average}
              title={movie.title}
              language={movie.original_language}
              onCardClick={onCardClick}
              classes={{
                rating: "text-xs",
                language: "text-xs",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
