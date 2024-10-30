import { FC } from "react";
import IMovieBannerProps from "./IMovieBanner.props";
import { useAppSelector } from "../../redux/reduxHooks";
import AppImage from "../appImage";
import BgImage from "../appImage/BgImage";

const MovieBanner: FC<IMovieBannerProps> = () => {
  const movieDetails = useAppSelector((state) => state.movie.data);
  const movieMeta = useAppSelector((state) => state.movieMeta.data);
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
          <h2 className="text-3xl text-white font-bold">
            {movieDetails?.title}
          </h2>
        </div>
      </div>
    </BgImage>
  );
};

export default MovieBanner;
