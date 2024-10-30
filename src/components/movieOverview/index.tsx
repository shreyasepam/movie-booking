import { FC } from "react";
import { useAppSelector } from "../../redux/reduxHooks";
import IMovieOverviewProps from "./IMovieOverview.props";

const MovieOverview: FC<IMovieOverviewProps> = () => {
  const movieDetails = useAppSelector((state) => state.movie);
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-50">Overview</h3>
      <p className="mt-2 text-gray-50 font-light">
        {movieDetails.loading || movieDetails.data?.overview
          ? movieDetails.data?.overview
          : "Sorry! Overview not available."}
      </p>
    </div>
  );
};

export default MovieOverview;
