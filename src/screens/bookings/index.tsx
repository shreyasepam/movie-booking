import React, { useEffect } from "react";
import IBookingsScreenProps from "./IBookings.props";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import BookingsSection from "../../components/bookingsSection";
import { getBookings } from "../../redux/slice/bookingsSlice";

const Bookings: React.FC<IBookingsScreenProps> = () => {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  return (
    <div>
      <BookingsSection title="Upcoming" data={bookings.data} />
      <BookingsSection title="History" data={bookings.archived} />
    </div>
  );
};

export default Bookings;
