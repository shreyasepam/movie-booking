// components/Cinema.tsx

import React from "react";
import { ICinemaProps, seats } from "./IMovieTheaterMap";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { setSeats } from "../../redux/slice/bookingSlotSlice";

export const Cinema: React.FC<ICinemaProps> = ({ occupied }) => {
  const dispatch = useAppDispatch();
  const bookingSlot = useAppSelector((state) => state.bookingSlot);

  const handleSelectedState = (seat: number) => {
    const isSelected = bookingSlot.seats.includes(seat);
    if (isSelected) {
      dispatch(
        setSeats(
          bookingSlot.seats.filter((selectedSeat) => selectedSeat !== seat)
        )
      );
    } else {
      dispatch(setSeats([...bookingSlot.seats, seat]));
    }
  };

  return (
    <div className="mb-5 perspective-[400px]">
      <div className="h-[70px] bg-white w-full transform rotate-x-[-30deg] scale-110 shadow-[0_3px_10px_2px_rgba(0,0,0,0.3)] mb-6" />

      <div className="grid gap-1.5 grid-cols-[repeat(8,min-content)] items-center">
        {seats.map((seat) => {
          const isSelected = bookingSlot.seats.includes(seat);
          const isOccupied = occupied.includes(seat);

          return (
            <span
              key={seat}
              tabIndex={0}
              className={`
                inline-block w-4 h-3 rounded-t relative top-[1px] transition-transform duration-300 ease-in-out
                ${
                  isSelected
                    ? "bg-green-500"
                    : isOccupied
                    ? "bg-neutral-300"
                    : "bg-neutral-600"
                }
                ${
                  !isOccupied &&
                  "hover:cursor-pointer hover:bg-green-200 hover:scale-110"
                }
                ${seat % 8 === 1 ? "mr-3" : ""}
                ${seat % 8 === 5 ? "mr-3" : ""}
              `}
              onClick={isOccupied ? undefined : () => handleSelectedState(seat)}
              onKeyDown={
                isOccupied
                  ? undefined
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
};
