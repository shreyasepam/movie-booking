import { FC } from "react";
import IMovieCardProps from "./IMovieCard.props";
import { ReactSVG } from "react-svg";
import Star from "../../assets/star.svg";

const MovieCard: FC<IMovieCardProps> = () => {
  return (
    <div className="">
        <img src={"https://picsum.photos/200/300"} className="object-cover h-64 rounded-2xl" />
      <div>
        <p className="text-gray-100 font-medium text-base mt-1">Lorem ipsum</p>
        <div className="flex items-center mt-1">
          <div className="flex items-center">
            <ReactSVG src={Star} className="text-amber-600 w-4 h-4" />
            <p className="ml-1 text-xs text-gray-300">7.8</p>
          </div>
          <div className="w-1 h-full  bg-black" />
          <p className="ml-1 text-xs text-gray-300">2023</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
