import React from "react";
import IBookingsScreenProps from "./IBookings.props";
import {useAppSelector } from "../../redux/reduxHooks";
import BookingsSection from "../../components/bookingsSection";

const Bookings: React.FC<IBookingsScreenProps> = () => {
  const bookings = useAppSelector((state) => state.bookings.data);

  return (
    <div>
      {!bookings || bookings?.length <= 0 ? (
        <div className="text-center bg-blue-base p-6">
          <p className="text-white font-semibold text-lg">
            No bookings avaliable!
          </p>
        </div>
      ) : (
        <div>
          <BookingsSection title="Upcomings" data={bookings} />
          <BookingsSection title="History" data={bookings} />
          </div>
      )}
    </div>
  );
};

export default Bookings;
