import { FC } from "react";
import ShowCase from "./ShowCase";
import { Cinema } from "./Cinema";
import { useAppSelector } from "../../redux/reduxHooks";
import IMovieTheaterMapProps from "./IMovieTheaterMap";

const MovieTheaterMap: FC<IMovieTheaterMapProps> = () => {
  const bookingSlot = useAppSelector((state) => state.bookingSlot);

  return (
    <div className="text-center flex flex-col items-center min-h-screen bg-blue-dark text-white text-sm py-8">
      <ShowCase />
      <Cinema occupied={[]} />
      <p className="text-white">
        You have selected{" "}
        <span className="text-green-500">{bookingSlot.seats.length}</span> seats
        for the price of{" "}
        <span className="text-green-500">
          ${bookingSlot.seats.length * (bookingSlot?.slot?.cost || 1)}
        </span>
      </p>
    </div>
  );
};

export default MovieTheaterMap;
