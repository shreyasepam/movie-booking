import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import ModalWrapper from "../ModalWrapper";
import IBookingModalProps from "./IBookingModal.props";
import MovieTheaterMap from "../../movieTheaterMap";
import TimeSlots from "../../timeSlots";
import AppButton from "../../appButton";
import { cleatBookingSlot } from "../../../redux/slice/bookingSlotSlice";
import { deleteMovieBooking, setMovieBooking } from "../../../redux/slice/bookingsSlice";

const BookingModal: React.FC<IBookingModalProps> = () => {
  const dispatch = useAppDispatch();
  const bookingModal = useAppSelector((state) => state.bookingSlot);

  const onClose = () => {
    dispatch(cleatBookingSlot());
  };

  const onDelete = () => {
    dispatch(deleteMovieBooking());
    onClose();
  };

  const onHandleBook = () => {
    if(bookingModal.mode === "read"){
        close();
        return
    }
    if(bookingModal.mode === "delete"){
        onDelete();
        return;
    }
    if (bookingModal.slot && bookingModal.seats.length > 0) {
      dispatch(
        setMovieBooking({
          date: bookingModal.date,
          seats: bookingModal.seats,
          slot: bookingModal.slot,
          movie: bookingModal.movie,
          user: bookingModal.user,
        })
      );
      onClose();
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
