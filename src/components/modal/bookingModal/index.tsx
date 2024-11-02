import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import ModalWrapper from "../ModalWrapper";
import IBookingModalProps from "./IBookingModal.props";
import MovieTheaterMap from "../../movieTheaterMap";

const BookingModal: React.FC<IBookingModalProps> = () => {
  const dispatch = useAppDispatch();
  const bookingModalIsOpen = useAppSelector(
    (state) => state.bookingSlot.isOpen
  );

  return (
    <ModalWrapper isOpen={bookingModalIsOpen} maxWidth="max-w-2xl">
      <div>
        
        <MovieTheaterMap />
      </div>
    </ModalWrapper>
  );
};

export default BookingModal;
