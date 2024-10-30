import { FC } from "react";
import IMovieRatingProps from "./IMovieRating.props";
import { ReactSVG } from "react-svg";
import Star from "../../assets/star.svg";
import { useAppSelector } from "../../redux/reduxHooks";

const MovieRating: FC<IMovieRatingProps> = ({ classes, language, rating }) => {
  const movieMetaLanguage = useAppSelector(
    (state) => state.movieMeta.data?.languages
  );
  return (
    <div className={`flex items-center mt-1 ${classes?.footer || ""}`}>
      <div className={`flex items-center ${classes?.svgWrapper || ""}`}>
        <ReactSVG
          src={Star}
          className={`text-amber-600 w-4 h-4 ${classes?.svg || ""}`}
        />
        <p className={`ml-1 text-gray-300 ${classes?.rating || ""}`}>
          {(rating || 0).toFixed(1)}
        </p>
      </div>
      <hr
        className={`w-[1px] h-3 bg-gray-400 mx-1 ${classes?.divider || ""}`}
      />
      <p className={`text-gray-300 ${classes?.language || ""}`}>
        {movieMetaLanguage?.[language || ""] || "NA"}
      </p>
    </div>
  );
};

export default MovieRating;
