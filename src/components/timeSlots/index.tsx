import { FC } from "react";
import ITimeSlotsProps, { ITimeSlotProps } from "./ITimeSlots.props";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { movieTimeSlot, validTime } from "../../redux/config";
import { setSlot } from "../../redux/slice/bookingSlotSlice";
import AppButton from "../appButton";

const TimeSlot: FC<ITimeSlotProps> = ({
  time,
  id,
  isSelected,
  onClick,
  disabled,
}) => {
  return (
    <AppButton
      title={time}
      classes={{
        root: `ring-2 rounded-md ${
          isSelected
            ? "ring-green-500"
            : disabled
            ? "ring-gray-700"
            : "ring-white"
        }`,
        text: "text-gray-100",
      }}
      disabled={disabled}
      onClick={() => onClick(id)}
    />
  );
};

const TimeSlots: FC<ITimeSlotsProps> = () => {
  const dispatch = useAppDispatch();
  const bookingSlot = useAppSelector((state) => state.bookingSlot.slot);
  const isReadOnly = useAppSelector((state) => state.bookingSlot.isReadOnly);

  const onHandleClick = (id: string) => {
    if (!isReadOnly) {
      const slot = movieTimeSlot.find((x) => x.id === id);
      if (slot) {
        dispatch(setSlot(slot));
      }
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
      {movieTimeSlot.map((slot) => (
        <TimeSlot
          id={slot.id}
          time={slot.time}
          isSelected={bookingSlot?.id === slot.id}
          onClick={onHandleClick}
          disabled={validTime(slot.time)}
        />
      ))}
    </div>
  );
};

export default TimeSlots;