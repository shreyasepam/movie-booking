import { FC } from "react";
import IBookingSectionProps from "./IBookingsSection.props";
import BookingsGrid from "../bookingsGrid";
import { useAppDispatch } from "../../redux/reduxHooks";
import { getBookedMovieById } from "../../redux/slice/bookingSlotSlice";

const BookingsSection: FC<IBookingSectionProps> = ({ title, data }) => {
  const dispatch = useAppDispatch();

  const onHandleClick = (id: string): void => {
    const mode = title === "History" ? "read" : "delete";
    dispatch(getBookedMovieById({ id, mode }));
  };

  return (
    <div className="mt-4" data-testid="bookings-section">
      <h2 className="text-gray-100 font-semibold text-2xl mb-4">{title}</h2>
      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 mt-4">
          {data?.map((booking) => (
            <BookingsGrid booking={booking} onHandleClick={onHandleClick} />
          ))}
        </div>
      ) : (
        <div className="text-center bg-blue-base p-6">
          <p className="text-white font-semibold text-lg">
            No bookings available!
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingsSection;
