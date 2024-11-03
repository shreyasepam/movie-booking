import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import ModalWrapper from "../ModalWrapper";
import IBookingModalProps from "./IBookingModal.props";
import MovieTheaterMap from "../../movieTheaterMap";
import TimeSlots from "../../timeSlots";
import AppButton from "../../appButton";
import { cleatBookingSlot } from "../../../redux/slice/bookingSlotSlice";
import {
  deleteMovieBooking,
  setMovieBooking,
} from "../../../redux/slice/bookingsSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BookingModal: React.FC<IBookingModalProps> = () => {
  const dispatch = useAppDispatch();
  const bookingModal = useAppSelector((state) => state.bookingSlot);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      setError("");
    };
  }, []);

  const onClose = () => {
    setError("");
    dispatch(cleatBookingSlot());
  };

  const onDelete = () => {
    dispatch(deleteMovieBooking());
    onClose();
  };

  const onHandleBook = () => {
    if (bookingModal.mode === "read") {
      close();
      return;
    }
    if (bookingModal.mode === "delete") {
      toast("Booking deleted.");
      onDelete();
      return;
    }
    if (bookingModal.slot && bookingModal.seats.length > 0) {
      dispatch(
        setMovieBooking({
          dateTime: bookingModal.dateTime,
          seats: bookingModal.seats,
          slot: bookingModal.slot,
          movie: bookingModal.movie,
          user: bookingModal.user,
        })
      );
      toast("Slot booked.");
      onClose();
    } else {
      setError("Make sure time slot and seats are selected.");
    }
  };

  return (
    <ModalWrapper
      isOpen={bookingModal.isOpen}
      title={bookingModal.mode === "new" ? "Book tickets" : "Your booking"}
      onClose={onClose}
    >
      <div>
        <TimeSlots />
        <MovieTheaterMap />
        {error && (
          <div className="text-center bg-blue-base p-2">
            <p className="text-gray-100 text-sm">{error}</p>
          </div>
        )}
        <div
          className={`px-4 py-3 sm:flex sm:px-6 ${
            bookingModal.mode === "delete"
              ? "sm:flex-row justify-end"
              : "sm:flex-row-reverse"
          }`}
        >
          {bookingModal.mode !== "read" ? (
            <>
              <AppButton
                classes={{
                  root: `rounded-md w-full text-white px-3 py-2 flex items-center justify-center ${
                    bookingModal.mode === "delete"
                      ? "bg-red-600"
                      : "bg-blue-base"
                  } sm:ml-3 sm:w-auto mb-2 sm:mb-0 sm:w-auto`,
                  text: "text-sm font-medium text-gray-100 ",
                }}
                title={bookingModal.mode === "delete" ? "Delete" : "Book"}
                type="submit"
                onClick={onHandleBook}
              />
              <AppButton
                classes={{
                  root: `rounded-md w-full text-white px-3 py-2 flex items-center justify-center sm:ml-3 sm:w-auto ${
                    bookingModal.mode === "delete"
                      ? "bg-blue-base"
                      : "bg-red-600"
                  }`,
                  text: "text-sm font-medium text-white",
                }}
                title={bookingModal.mode === "delete" ? "Close" : "Cancel"}
                onClick={onClose}
              />
            </>
          ) : (
            <AppButton
              classes={{
                root: "rounded-md w-full text-white px-3 py-2 flex items-center justify-center bg-blue-base sm:ml-3 sm:w-auto",
                text: "text-sm font-medium text-white",
              }}
              title={"Close"}
              onClick={onClose}
            />
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BookingModal;
