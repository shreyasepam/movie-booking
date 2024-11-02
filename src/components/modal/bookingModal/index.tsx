import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import ModalWrapper from "../ModalWrapper";
import IBookingModalProps from "./IBookingModal.props";
import MovieTheaterMap from "../../movieTheaterMap";
import TimeSlots from "../../timeSlots";
import AppButton from "../../appButton";
import { cleatBookingSlot } from "../../../redux/slice/bookingSlotSlice";
import { setMovieBooking } from "../../../redux/slice/bookingsSlice";

const BookingModal: React.FC<IBookingModalProps> = () => {
  const dispatch = useAppDispatch();
  const bookingModal = useAppSelector((state) => state.bookingSlot);

  const onHandleBook = () => {
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

  const onClose = () => {
    dispatch(cleatBookingSlot());
  };

  return (
    <ModalWrapper
      isOpen={bookingModal.isOpen}
      title={bookingModal.isReadOnly ? "Your booking" : "Book tickets"}
      onClose={onClose}
    >
      <div>
        <TimeSlots />
        <MovieTheaterMap />
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          {!bookingModal.isReadOnly && (
            <AppButton
              classes={{
                root: "rounded-md w-full text-white px-3 py-2 flex items-center justify-center bg-blue-base sm:ml-3 sm:w-auto mb-2 sm:mb-0 sm:w-auto",
                text: "text-sm font-medium text-gray-100 ",
              }}
              title={"Book"}
              type="submit"
              onClick={onHandleBook}
            />
          )}
          <AppButton
            classes={{
              root: "rounded-md w-full text-white px-3 py-2 flex items-center justify-center bg-red-600 sm:ml-3 sm:w-auto",
              text: "text-sm font-medium text-white",
            }}
            title="Cancel"
            onClick={onClose}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BookingModal;
