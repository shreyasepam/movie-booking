import { FC, useMemo } from "react";
import ShowCase from "./ShowCase";
import { Cinema } from "./Cinema";
import { useAppSelector } from "../../redux/reduxHooks";
import IMovieTheaterMapProps from "./IMovieTheaterMap";
import dayjs from "dayjs";

const MovieTheaterMap: FC<IMovieTheaterMapProps> = () => {
  const bookingSlot = useAppSelector((state) => state.bookingSlot);
  const bookings = useAppSelector((state) => state.bookings);

  const occupied = useMemo(() => {
    if (bookingSlot.mode !== "new") {
      return [];
    }
    const occupiedSeats = bookings.data
      ?.filter((booking) => {
        let parsedDate = dayjs(booking.date);
        let startOfParsedDate = parsedDate.startOf("day");
        let startOfToday = dayjs().startOf("day");
        console.log("asdasdsad", startOfParsedDate, startOfToday);
        return (
          booking.movie?.id === bookingSlot.movie?.id &&
          booking.slot?.id === bookingSlot.slot?.id &&
          (startOfParsedDate.isSame(startOfToday) ||
            startOfParsedDate.isAfter(startOfToday))
        );
      })
      .flatMap((booking) => booking.seats);
    const set = new Set(occupiedSeats || []);
    return Array.from(set);
  }, [bookings, bookingSlot.mode, bookingSlot.slot, bookingSlot.movie]);

  return (
    <div className="text-center flex flex-col items-center text-white text-sm py-8">
      <ShowCase />
      <Cinema occupied={occupied} />
      <p className="text-white">
        You have selected{" "}
        <span className="text-green-500">{bookingSlot.seats.length}</span> seats
        for the price of{" "}
        <span className="text-green-500">
          {bookingSlot.seats.length * (bookingSlot?.slot?.cost || 1)}
          {"/-"}
        </span>
      </p>
    </div>
  );
};

export default MovieTheaterMap;
