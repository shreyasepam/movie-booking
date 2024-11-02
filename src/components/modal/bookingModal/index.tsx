import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import ModalWrapper from "../ModalWrapper";
import IBookingModalProps from "./IBookingModal.props";
import MovieTheaterMap from "../../movieTheaterMap";
import TimeSlots from "../../timeSlots";
import AppButton from "../../appButton";
import { cleatBookingSlot } from "../../../redux/slice/bookingSlotSlice";

const BookingModal: React.FC<IBookingModalProps> = () => {
  const dispatch = useAppDispatch();
  const bookingModalIsOpen = useAppSelector(
    (state) => state.bookingSlot.isOpen
  );
  const bookingModalReadOnly = useAppSelector(
    (state) => state.bookingSlot.isReadOnly
  );

  const onHandleBook = () => {};

  const onClose = () => {
    dispatch(cleatBookingSlot());
  };

  return (
    <ModalWrapper
      isOpen={bookingModalIsOpen}
      maxWidth="max-w-2xl"
      title={bookingModalReadOnly ? "Your booking" : "Book tickets"}
      onClose={onClose}
    >
      <div>
        <TimeSlots />
        <MovieTheaterMap />
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          {!bookingModalReadOnly && (
            <AppButton
              classes={{
                root: "rounded-md w-full text-white px-3 py-2 flex items-center justify-center bg-blue-base sm:ml-3 sm:w-auto sm:mt-0 sm:w-auto",
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
