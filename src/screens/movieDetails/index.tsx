import React, { useEffect } from "react";
import IMovieDetailsScreenProps from "./IMovieDetails.props";
import MovieBanner from "../../components/movieBanner";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/reduxHooks";
import { getMovieById } from "../../redux/slice/movieByIdSlice";

const MovieDetails: React.FC<IMovieDetailsScreenProps> = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getMovieById({ id }));
    }
  }, [id]);

  return (
    <div>
      <MovieBanner />
    </div>
  );
};

export default MovieDetails;
