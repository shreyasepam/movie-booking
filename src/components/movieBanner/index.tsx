import { FC } from "react";
import IMovieBannerProps from "./IMovieBanner.props";

const MovieBanner: FC<IMovieBannerProps> = () => {
  return (
    <div className="w-full min-h-80 bg-slate-800 flex items-center p-8">
      <div>
        <img
          className="w-56 rounded"
          src={
            "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg"
          }
        />
        <p className="w-full text-center text-white bg-black py-1 text-sm">Released on </p>
      </div>
      <div className="h-full ml-8">
        <h2 className="text-3xl text-white font-bold">
          Garasdasd asd asd asd asd
        </h2>
      </div>
    </div>
  );
};

export default MovieBanner;
