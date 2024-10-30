import { FC } from "react";
import IMovieCardProps from "./IMovieCard.props";
import { ReactSVG } from "react-svg";
import Star from "../../assets/star.svg";

const MovieCard: FC<IMovieCardProps> = ({ classes }) => {
  return (
    <div className={`cursor-pointer ${classes?.root || ""}`}>
      <img
        src={"https://picsum.photos/200/300"}
        className={`object-cover h-64 rounded-2xl hover:shadow-2xl ${
          classes?.image || ""
        }`}
      />
      <p
        className={`text-gray-100 font-medium text-base mt-1 ${
          classes?.title || ""
        }`}
      >
        Lorem ipsum
      </p>
      <div className={`flex items-center mt-1 ${classes?.footer || ""}`}>
        <div className={`flex items-center ${classes?.svgWrapper || ""}`}>
          <ReactSVG
            src={Star}
            className={`text-amber-600 w-4 h-4 ${classes?.svg || ""}`}
          />
          <p className={`ml-1 text-xs text-gray-300 ${classes?.rating || ""}`}>
            7.8
          </p>
        </div>
        <hr className={` w-[1px] h-3 bg-gray-400 mx-1 ${classes?.divider || ""}`} />
        <p className={` text-xs text-gray-300 ${classes?.year || ""}`}>
          2023
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
