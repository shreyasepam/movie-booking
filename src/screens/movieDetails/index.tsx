import React, { useEffect } from "react";
import IMovieDetailsScreenProps from "./IMovieDetails.props";
import MovieBanner from "../../components/movieBanner";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/reduxHooks";
import { getMovieById } from "../../redux/slice/movieByIdSlice";
import MovieOverview from "../../components/movieOverview";
import { toast } from "react-toastify";

const MovieDetails: React.FC<IMovieDetailsScreenProps> = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const fetchById = async (): Promise<void> => {
    try {
      if (id) {
        const response = await dispatch(getMovieById({ id }));
        if (response.meta.requestStatus === "rejected") {
          navigation("/not-found", { replace: true });
        }
      }
    } catch (ex) {
      toast("Somthing went wrong.");
    }
  };

  useEffect(() => {
    fetchById();
  }, [id]);

  return (
    <div>
      <MovieBanner />
      <MovieOverview />
    </div>
  );
};

export default MovieDetails;
