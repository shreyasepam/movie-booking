import { FC, useMemo } from "react";
import IMovieGenreProps from "./IMovieGenre.props";
import { useAppSelector } from "../../redux/reduxHooks";

const MovieGenre: FC<IMovieGenreProps> = ({ data }) => {
  const genres = useAppSelector((state) => state.movieMeta.data?.genres);
  const memoData = useMemo(() => {
    if (genres && data) {
      return data
        ?.map((x) => genres[x])
        .filter((x) => x)
        .join(", ");
    }
    return "";
  }, [genres, data]);
  return <p className="text-white text-base mt-3 font-light">{memoData}</p>;
};

export default MovieGenre;
