import { FC, useCallback } from "react";
import IMovieCardProps from "./IMovieCard.props";
import AppImage from "../appImage";
import MovieRating from "../movieRating";

const MovieCard: FC<IMovieCardProps> = ({
  classes,
  poster,
  rating,
  title,
  language,
  id,
  onCardClick,
}) => {
  const onClickHandle = useCallback(() => {
    if (onCardClick && id) {
      onCardClick(id);
    }
  }, [id, onCardClick]);

  return (
    <div
      className={`cursor-pointer ${classes?.root || ""}`}
      onClick={onClickHandle}
    >
      <AppImage
        path={poster || ""}
        className={`object-cover h-64 rounded-2xl hover:shadow-2xl ${
          classes?.image || ""
        }`}
      />
      <p
        className={`text-gray-100 font-medium text-base mt-1 ${
          classes?.title || ""
        }`}
      >
        {title}
      </p>
      <MovieRating classes={classes} rating={rating} language={language} />
    </div>
  );
};

export default MovieCard;
