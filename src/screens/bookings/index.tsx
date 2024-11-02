import React from "react";
import IBookingsScreenProps from "./IBookings.props";
import { useAppSelector } from "../../redux/reduxHooks";
import AppImage from "../../components/appImage";
import BookingsGrid from "../../components/bookingsGrid";

const Bookings: React.FC<IBookingsScreenProps> = () => {
  const bookings = useAppSelector((state) => state.bookings.data);
  return (
    <div>
      {!bookings || bookings?.length <= 0 ? (
        <div className="text-center bg-blue-base p-6">
          <p className="text-white font-semibold text-lg">No bookings avaliable!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3">
          {bookings?.map((booking) => (
            <div className="flex bg-blue-base p-2 rounded-md shadow-md cursor-pointer hover:shadow-2xl">
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
      )}
    </div>
  );
};

export default Bookings;
