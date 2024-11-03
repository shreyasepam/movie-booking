import { FC } from "react";
import IBookingSectionProps from "./IBookingsSection.props";
import AppImage from "../appImage";
import BookingsGrid from "../bookingsGrid";
import { useAppDispatch } from "../../redux/reduxHooks";
import { getBookedMovieById } from "../../redux/slice/bookingSlotSlice";

const BookingsSection: FC<IBookingSectionProps> = ({ title, data }) => {
  const dispatch = useAppDispatch();

  const onHandleClick = (id: string): void => {
    dispatch(getBookedMovieById({ id }));
  };

  return (
    <div className="mt-4">
      <h2 className="text-gray-100 font-semibold text-2xl mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 mt-4">
        {data?.map((booking) => (
          <div
            className="flex bg-blue-base p-2 rounded-md shadow-md cursor-pointer hover:shadow-2xl"
            onClick={() => onHandleClick(booking.id!)}
          >
            <AppImage
              path={booking.movie?.poster_path || ""}
              className={`object-cover h-48 rounded-2xl hover:shadow-2xl`}
            />
            <div className="ml-4">
              <p className={`text-gray-100 font-semibold text-2xl`}>
                {booking.movie?.title}
              </p>
              <BookingsGrid booking={booking} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsSection;
