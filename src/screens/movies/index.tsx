import React from "react";
import IMoviesScreenProps from "./IMovies.props";
import MovieCard from "../../components/movieCard";

const Movies: React.FC<IMoviesScreenProps> = () => {
  return (
    <div className="w-full pb-16">
      <h2 className="text-gray-100 font-semibold text-2xl mb-4">Treading</h2>
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {Array(50)
            .fill(0)
            .map((x, i) => (
              <div key={i}>
                <MovieCard />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
