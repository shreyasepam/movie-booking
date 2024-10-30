import { FC } from "react";
import IMovieBannerProps from "./IMovieBanner.props";
import { useAppSelector } from "../../redux/reduxHooks";
import AppImage from "../appImage";
import BgImage from "../appImage/BgImage";
import MovieGenre from "../movieGenre";
import MovieRating from "../movieRating";
import AppButton from "../appButton";

const MovieBanner: FC<IMovieBannerProps> = () => {
  const movieDetails = useAppSelector((state) => state.movie.data);
  return (
    <BgImage
      path={movieDetails?.backdrop_path || ""}
      className="w-full min-h-80 bg-slate-800 p-8 bg-no-repeat bg-cover bg-center"
    >
      <div className="z-[1] flex items-center relative">
        <div>
          <AppImage
            className="w-56 rounded"
            path={movieDetails?.poster_path || ""}
          />
          <p className="w-full text-center text-white bg-black py-1 text-sm border-t-2">
            Released on {movieDetails?.release_date}
          </p>
        </div>
        <div className="h-full ml-8">
          <h2 className="text-4xl text-white font-bold">
            {movieDetails?.title}
          </h2>
          <MovieGenre data={movieDetails?.genre_ids} />
          <MovieRating
            classes={{
              footer: "mt-3",
              rating: "text-base text-white font-light",
              language: "text-base text-white font-light",
              divider: "mx-2",
            }}
            rating={movieDetails?.vote_average}
            language={movieDetails?.original_language}
          />
          <AppButton
            classes={{
              root: "rounded-md px-16 py-3 mt-6 flex items-center justify-center bg-blue-base",
              text: "text-base font-medium text-white",
            }}
            title="Book tickets"
          />
        </div>
      </div>
    </BgImage>
  );
};

export default MovieBanner;
