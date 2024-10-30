import { FC, useCallback } from "react";
import IMovieCardProps from "./IMovieCard.props";
import { ReactSVG } from "react-svg";
import Star from "../../assets/star.svg";
import AppImage from "../appImage";
import { useAppSelector } from "../../redux/reduxHooks";

const MovieCard: FC<IMovieCardProps> = ({
  classes,
  poster,
  rating,
  title,
  language,
  id,
  onCardClick,
}) => {
  const movieMetaLanguage = useAppSelector(
    (state) => state.movieMeta.data?.languages
  );
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
      <div className={`flex items-center mt-1 ${classes?.footer || ""}`}>
        <div className={`flex items-center ${classes?.svgWrapper || ""}`}>
          <ReactSVG
            src={Star}
            className={`text-amber-600 w-4 h-4 ${classes?.svg || ""}`}
          />
          <p className={`ml-1 text-xs text-gray-300 ${classes?.rating || ""}`}>
            {rating}
          </p>
        </div>
        <hr
          className={` w-[1px] h-3 bg-gray-400 mx-1 ${classes?.divider || ""}`}
        />
        <p className={` text-xs text-gray-300 ${classes?.language || ""}`}>
          {movieMetaLanguage?.[language || ""] || "NA"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
